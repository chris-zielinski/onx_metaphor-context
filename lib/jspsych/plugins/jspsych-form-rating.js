/**
* jspsych-form -- jsPsych plugin for AppReg experiment
* Adapted from jspsych-survey-text plugin 
*
* 2020-03-30 christelle.zielinski@univ-amu.fr
**/
(function($) {
	
	jsPsych['form-rating'] = (function() {

		var plugin = {};

		plugin.create = function(params) {		
			// Check for form_struct parameters 
			params.timing_post_trial = 0;	
			return [params];
		};

		plugin.trial = function(display, trial) {
			
			// init variables
			var start_time;
			var istim = 0;
			var rt_click = 0;
			var rt_resp = 0;
			var nb_check = 0;
			// total number of stim
			var Nstim = trial.stim.length;
			
			// function to display the sentence + click event			
			function disp_stim_click(){
				var $stim = $('<div/>')
						.attr('id', 'stim')
						.html(trial.stim[istim].str);
				var $click_msg = $('<div/>')
					.attr('id', 'recall')
					.html('(cliquez sur la page pour valider)');
				display.append($stim, $click_msg);
				start_time = performance.now();
				nb_check = 0;
				// start mouse listener
				var mouse_listener = function(e) {
					rt_click = Math.round(performance.now() - start_time);
					$('html').unbind('click', mouse_listener);
					disp_rating(trial.rating);
				};
				// prevent unrealistic click
				setTimeout(function(){
					$('html').click(mouse_listener);}, 400);
			}
			function add_button(buttx, vis){
				if (vis === undefined){
					vis = true;
				}
				// Add submit button			
				var $but = $('<div />')
						.addClass('button button-rating')
						.attr("id","submit")
						.html('<span>' + buttx + '</span>')
						.css('visibility', vis ? 'visible' : 'hidden');					
				display.append($but);
			}
			// display button
			function disp_button(){
				$('#submit').css('visibility', 'visible');
			}
			function disp_tab_rating(form_arr){
				var Nquest = form_arr.length;
				for (var i=0; i<Nquest; i++){
					var oquest = form_arr[i];
					var q_id = oquest.id;
					// question row
					var hdr_quest = '<div class="row"><div class="col-header" id="' +
								q_id + '">' +	oquest.quest + '</div></div>';
					// choices row
					var row_choice = '<div class="row" id="row-choice-'+ q_id + '"></div>';
					
					$('#rating-wrap').append(hdr_quest, row_choice);
					
					// add top line 
					if (i>0){
						$('#' + q_id).addClass('top-line');
					}
					// file the choice row	
					// left label
					$('#row-choice-' + q_id).append('<div class="column col-range col-left">' + oquest.opt_extlabel[0] + '</div>');
					
					// add the radio buttons + labels
					// choice-column+div
					var rad_col = '<div class="column col-radio"><div class="choice" id="all-choices-' + 
									q_id + '"></div></div>';
					$('#row-choice-' + q_id).append(rad_col);
					
					// loop/radio
					for (var j=0; j<oquest.opt_val.length; j++){
						var val = oquest.opt_val[j];
						var rid = q_id + val;
						var rstr = oquest.opt_str[j];
						var radio = '<label for="' + rid +'"><div class="radiv">' +
							'<input type="radio" class="radio" id="' + rid + '" value="' + val +
							'" name="' + q_id + '">' + rstr + '</div></label>';
						$('#all-choices-' + q_id).append(radio);
					}
					// right label
					$('#row-choice-' + q_id).append('<div class="column col-range col-right">' + oquest.opt_extlabel[1] + '</div>');	
					// put button if last question
					if (i== Nquest-1){
						// Add submit button			
						add_button('Continuer !', false);
					}
					// add a counter: number of radio-choice div checked
					// display the validation button when all choice div have been checked at least one time
					$('#all-choices-' + q_id).one('change', function(){
						nb_check++;
						if (nb_check===Nquest){
							disp_button();
							// add click event 
							$('#submit').click(function(){
								submit_rating(form_arr);
							});
						}
					});
				}
			}
			function escapeRegExp(string) {
				return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); 
			}
			var count_char = function(str){
				var to_rm = ['<br/>', '<br />', '<b>', '</b>', '&ndash;', '&mdash;', ' ?', ' !', ' ;'];
				for (var i=0; i<to_rm.length; i++) { 
					str = str.replace(new RegExp(escapeRegExp(to_rm[i]), 'g'), ''); 
				}
				return {nb_char: str.length, nb_word: str.split(" ").length}
			}
			
			// rating validation function
			var submit_rating = function(form_arr){
				// get rt
				rt_resp = Math.round(performance.now() - start_time);
				// check if all answers are given
				var resp = {};
				for (var i=0; i< form_arr.length; i++){
					var oquest = form_arr[i];
					var qid = oquest.id;
					var val = $('input[name="'+ qid+ '"]:checked').val();
					resp[qid] = parseInt(val);
				}	
				// get stim characteristics
				var stim_charnum = count_char(trial.stim[istim].str);
				// write data
				var data = Object.assign({type: 'rating',
									trial_num: istim+1,
									id_stim: trial.stim[istim]['id'],
									nb_char: stim_charnum.nb_char,
									nb_wd: stim_charnum.nb_word,
									cat: trial.stim[istim]['cat'],
									rt_click: rt_click,
									rt_resp: rt_resp}, resp);
				jsPsych.data.write(data);

				// go to the next task 
				display.html('');
				setTimeout(function(){
					// check-point question for specific trials
					if (trial.stim[istim]['check']===1){					
						disp_check();
					}else{	
					// next stimulus
						next_trial();
					}
				}, 800);
			};
			// display form rating
			// make it once as it is always the same
			function disp_rating(form_arr){
				// clear the page
				display.html('');				
				// rating table div
				var $form = $('<div/>')
					.attr('id', 'rating-wrap')
					.css('visibility', 'hidden');					
				display.append($form);				
				// disp tab with question and rating options + button when all choices done
				disp_tab_rating(form_arr);
				// show the form
				$('#rating-wrap').css('visibility', 'visible');
				// associated starting time
				start_time = performance.now();
			}
			
			//  display the next stimulus or finish the block
			var next_trial = function(){
				// next trial
				istim++;
				if (istim+1 > Nstim){
					display.html('');
					jsPsych.finishTrial();	
				}else{
					disp_stim_click();
				}
			};
			
			// check-point questions for some specific trials
			function disp_check(){
				var check_form = trial.check_form;
				var id_stim = trial.stim[istim].id;
				var check_stim = trial.check[id_stim];
				// disp the preamb
				display.append('<div class="check-header">' + check_form.quest + '</div>');
				// add wrapper
				display.append('<div id="check-wrap"></div>');
				// disp the choices
				for (var i=0; i<check_stim.opt_val.length; i++){
					var id_chk = (i+1).toString();
					var $p = $('<p/>').attr('id', 'p' + id_chk);
					var chkbox = '<input type="checkbox" id="' + id_chk 
						+ '" class="radio checkbox" value="' + check_stim.opt_val[i] + '">';
					var lab = '<label for="' + id_chk + '">' + check_stim.opt_str[i] + '</label>';
					$('#check-wrap').append($p);
					$('#p' + id_chk).append(chkbox, lab);
				}
				// disp validation button
				add_button('Continuer !');
				// add required message if needed
				var $msg = $('<div />')
					.attr('id', 'required')
					.css('visibility','hidden')
					.html('Merci de choisir une ou plusieurs réponses.');
				display.append($msg);
				
				var check_answer = function(){
					
					// be sure at least one checkbox is checked
					var is_one = false;
					var all_corr = true;
					var all_chk = [];
					$('input[type=checkbox]').each(function(idx){
						if ($(this).is(":checked") === true){
							is_one = true;
							all_chk.push($(this).attr('id'));
							if ($(this).attr('value') !=="1"){
								all_corr = false;
							}
						}else{
							if ($(this).attr('value') ==="1"){
								all_corr = false;
							}
						}
					});
					if (!is_one){
						$('#required').css('visibility', 'visible');
						$('#check-wrap').change(function(){
							$('#required').css('visibility', 'hidden');
						});
					}else{
						// save data
						jsPsych.data.write({type: 'check', 
											id_stim: id_stim, 
											trial_num: istim+1, 
											resp: all_chk,
											correct: (all_corr) ? 1 : 0});
						display.html('');
						// add feedback
						var fb = check_form.feedback(all_corr);
						display.append('<div id="feedback">' + fb + '</div>');
						add_button('Continuer avec un nouvel extrait !');
						$('#submit').click(function(){
							display.html('');
							// next trial
							setTimeout(next_trial, 800);
						});
					}
				}
				// add click event
				$('#submit').click(function(){
					$('#required').css('visibility', 'hidden');
					check_answer();
				});				
			}

			disp_stim_click();

		};

		return plugin;
	})();
})(jQuery);