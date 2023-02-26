/**
* jspsych-form -- jsPsych plugin for AppReg experiment
* Adapted from jspsych-survey-text plugin 
*
* 2020-03-30 christelle.zielinski@univ-amu.fr
**/

(function($) {
	
	jsPsych['form-author'] = (function() {

		var plugin = {};

		plugin.create = function(params) {		
			// Check for form_struct parameters 
			params.timing_post_trial = 800;	
			return [params];
		};
		plugin.trial = function(display, trial) {
			
			// total number of authors
			var stim = trial.stim;
			var Nart = stim.length;
			// gather stim data as a {stim_id: val} object
			// to test for answer after submission
			var sval = {};
			
			display.html('<p id="author-instr">Rappel : cochez les auteurs dont vous êtes sûr.e.s.</p>')
			var k = 0;
			var $tab = $('<table />').attr('id', 'tab').addClass('author-table');
			display.append($tab);
			
			while (k < Nart){
				// make the row
				
				var $tr = $('<tr />').attr('id', 'tr_' + k);
				var row_id = '#tr_'+k;
				$('#tab').append($tr);
				// left column
				var sid = stim[k].id;
				var oth_left = '<th id="' + k + '"><label for="y' + k +'">' + stim[k].name + '</label><input type="checkbox" class="radio checkbox" value="y" id="y' + k + '" name="' + sid + '">' + '</th>';
	
				$(row_id).append(oth_left);
				sval[sid] = stim[k].val;
				k++;
				// right column
				if (k >= Nart){
					break;
				}
				var sid = stim[k].id;
				var oth_right = '<th id="' + k + '"><label for="y' + k +'">' +  stim[k].name + '</label><input type="checkbox" class="radio checkbox" value="y" id="y' + k + '" name="' + sid + '"></th>';
				
				$(row_id).append(oth_right);
				sval[sid] = stim[k].val;
				k++;
			}
			
			// submit button
			var $but = $('<div />')
				.addClass('button button-rating')
				.attr("id","submit")
				.html('<span>Valider</span>');					
			display.append($but);

			// collect data when submit
			$('#submit').click(function(){
				var all_id = [];
				var all_resp = [];
				var all_score = [];
				$('th').each(function(idx){
					var ist = parseInt($(this).attr('id'));
					var sid = stim[ist].id;
					// author id
					all_id.push(sid);
					// expected response
					var is_auth = sval[sid];
					// collect checked response
					var resp = 'NA';
					$('input[name="' + sid + '"]').each(function(){
						// case checked
						if ($(this).is(":checked") === true){
							resp = $(this).attr('value');
						}
					});
					all_resp.push(resp);
					// score 
					// case author checked
					if (resp==='y'){
						if (is_auth){
							all_score.push(1);
						}else{
							all_score.push(-1);
						}								
					}else{
						// ???
						all_score.push(0);
					}
				});
				// write data
				jsPsych.data.write({type: 'art', 
									id: all_id, 
									resp: all_resp, 
									score: all_score});
				display.html('');
				jsPsych.finishTrial();
			});
		};
		return plugin;
	})();
})(jQuery);