/**
* jspsych-form -- jsPsych plugin for AppReg experiment
* Adapted from jspsych-survey-text plugin 
*
* Input parameters :
* -----------------
*
* Each form row is defined by an object with parameters :
* 
* --- type : kind of response choice to display : 
*			'text' : input text field
*			'radio' : radio button (a unique choice amongst several)
			'checkbox' : check box choices
			'list' : choice in the drop-down menu
*
* --- id : identification string to retrieve the associated answer in the jspsych recorded data
*
* --- quest : the question asked to the user
*
* --- visible_if : option to display the element only if other previous elements are selected : array with the id name of the required selected elements

* Choice list for 'radio', 'checkbox' or 'list' type
* --- opt_str : array of option string to display		
* --- opt_id : array of associated identification strings to retrieve the answer in jspsych data
*
* If type is 'checkbox' :
* --- checklim :  maximum allowed answers for checkbox list	
*
* If type is 'text':
* --- input_nchar : width of the input text field in number of characters
*
* Each row element is append to an array to define the whole form page that will be created 
* by this plugin.
*
* Example of form page definition :
*
* 	// Definition of the rows (one object = one form row)
*	var form_elmt = [
*		{
*		type : "radio",	
*		id : "manual",
*		quest : "Your handedness : ",
*		radio_str : ["left", "right"],
*		radio_id : ["left", "right"]
*		},						
*		{
*		type: "text",	
*		id: "age",  
*		quest: "Your age :", 
*		input_nchar: 3 
*		},	
*		{
*		type: "radio",
*		id: "anyprob",
*		quest: "Have you encountered any problem during the experiment ?",
*		radio_str : ["yes", "no"],
*		radio_id : ["prob_yes", "prob_no"]
*		},
*		{
*		type: "text",
*		id: "anywhich",
*		quest: "Which kind ?",
*		input_nchar: 30,
*		visible_if : ["prob_yes"]
*		},
*		{
*		type: "checkbox",
*		id: "kb_func",
*		quest: "What is your main activity (max. 2 choices) ?",
*		opt_str: ["note taken", "copy", "composition", "email", "instant messaging"],
*		opt_id: ["kbfunc_note", "kbfunc_copy", "kbfunc_compo", "kbfunc_email", *"kbfunc_chat"],
*		checklim: 2
*		},
*		{
*		type: "radio",
*		id: "othmed_smartphone",
*		quest: "Do you use a smartphone ?",
*		opt_str: ["yes", "no"],
*		opt_id: ["othmed_smart_yes", "othmed_smart_no"]
*		},
*		{
*		type: "list",
*		id: "othmed_smart_year",
*		quest: "From how many years ?",
*		opt_str : ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15 yrs and more"],
*		opt_id : ["smyr_1","smyr_2","smyr_3","smyr_4","smyr_5","smyr_6","smyr_7",
*		"smyr_8","smyr_9","smyr_10","smyr_11","smyr_12", "smyr_13","smyr_14","smyr_15"],
*		visible_if : ["othmed_smart_yes"]
*		}
*		];
*				
*		// Block definition (as a jspsych object)
*		var form_block = {
*			type: "form",
*			form_struct: form_elmt,
*			preamble : "Some informations to finish :",
*			submit : "Submit"
*		};
*
*
* TO DO : for conditional answer, remove value if trigger choice is finally uncheck 
*
* jsPsych documentation: docs.jspsych.org
* de Leeuw, J. R. (2014). jsPsych: A JavaScript library for creating behavioral 
* experiments in a Web browser. Behavior research methods, 1-12
*
* CREx-BLRI-AMU
* https://github.com/blri/Online_experiments_jsPsych
* 2016-12-13 christelle.zielinski@blri.fr
**/

(function($) {
	
	jsPsych['form'] = (function() {

		var plugin = {};

		plugin.create = function(params) {
			
			// Check for form_struct parameters 		
			var form_in = params.form_struct;		
			// array to keep all form elements with checked parameters
			var form_out = [];
			// array to store all id of element that make another visible
			var all_id_cond = [];
			// default params for each form element
			var def_obj = {	
				id: function(fobj, i){ return 'Q'+i;},
				quest: '',
				type: 'text',
				// length of input field of type text in number of character
				nchar_width: 20,
				// arr of options for radio/checkbox/select type
				opt_str: '',
				// associated array of unique id that will be used as answer value in output data
				opt_id: function(fobj, i){ return (fobj.type==='text')? [fobj.id] : '';},
				// maximum allowed number of checkbox checked
				check_lim: 0,
				// flag to know if answer if required before effective validation of the form
				required: 0,
				// conditionnal state: array of previous answer id (in opt_id) that can make this form element visible
				visible_if: []
			};
			// check for input parameters
			function check_form_obj(fobj, def_obj){
				var i = 1;
				for (var k in def_obj){					
					if (typeof fobj[k] === 'undefined'){
						fobj[k] = (typeof def_obj[k] === 'function') ? def_obj[k](fobj, i) : def_obj[k];
					}
					i++;
				}
				return fobj;
			}
			function force_arr(fobj, field_arr){
				for (var i=0; i<field_arr.length; i++){
					var fn = field_arr[i];
					fobj[fn] = (fobj[fn].length===0) ? fobj[fn] : ((typeof fobj[fn] === 'string') ? [fobj[fn]] : fobj[fn]);
				}
				return fobj;
			}
			
			for (var i=0 ; i < form_in.length ; i++){
				
				var fobj = form_in[i];
				// set default for undefined fields
				fobj = check_form_obj(fobj, def_obj);
				// add some parameters
				/* The number of character nchar is used to defined the width of
				of the input text field, which is expressed in em units. One em 
				corresponds to	height of a Ç",being about 130% higher than its width.*/
				fobj.input_width = (fobj.type==='text') ? Math.floor(fobj.nchar_width*0.7)+'em' : '';
				fobj.is_visible = (fobj.visible_if.length===0) ? true : false;
				// continue with this form element only if all necessary parameters have been set
				if ((fobj.type === "text" && fobj.quest==='') || 
					(fobj.type!=='text' && fobj.opt_str.length===0)){
						continue;
				}
					
				// force array for opt_str, opt_id and
				fobj = force_arr(fobj, ['opt_id', 'opt_str', 'visible_if']);
				
				// collect all id of element that will fire an event to make hidden element visible
				// define the "cond_ID" class of the hidden element based on the id of the 
				// element that will make it visible if it is checked
				var cond_vis = fobj.visible_if;
				var hid_class = '';
				for (var k=0 ; k<cond_vis.length ; k++){
					if ($.inArray(cond_vis[k], all_id_cond) === -1){
						all_id_cond.push(cond_vis[k]);
					}
					// be sure unique class name by combining the main question ID with the specific element id
					hid_class += 'cond_' + cond_vis[k] + ' ';
				}
				fobj.hidden_class = hid_class;
				// store new form element only if opt_str and quest have been set	
				form_out.push(fobj);
			}
			// add on change function to the cond_ID elements + div
			var disp_visible = function(){
				var quest_id = '#' + $(this).attr('id');
				// associated parent response div id
				$(quest_id + '>.cond_opt, '+quest_id+'>label>.cond_opt').each(function(){
					var cid = $(this).attr('id');
					if ($(this).is(':checked') === true){
						$('.cond_' + cid).removeClass('hiderow');
					}else{
						
						$('.cond_' + cid).addClass('hiderow');
					}
				});
			};
			for (var i=0 ; i<form_out.length ; i++) {
				var fobj = form_out[i];
				var Nopt = fobj.opt_id.length;
				// Array to know if an on change function has to be associated with the option				
				var opt_func_flag = [];
				for (var io = 0 ; io < Nopt ; io++) {
					if ($.inArray(fobj.id + '_' + fobj.opt_id[io], all_id_cond) > -1){
						opt_func_flag.push(1);
					}else{
						opt_func_flag.push(0);
					}
				}
				form_out[i].opt_func_flag = opt_func_flag;
			}
			var trials =[{
				preamble : (typeof params.preamble == 'undefined') ? "" : params.preamble,
				form_element : form_out,
				submit : (typeof params.submit == 'undefined') ? "Submit" : params.submit,
				progbar : (typeof params.progbarstr === 'undefined') ? "" : params.progbarstr,
				opt_func : disp_visible
			}];

			return trials;
		};

		plugin.trial = function(display, trial) {
			
			// Evaluates the function if any
			// trial.form_element = jsPsych.pluginAPI.evaluateFunctionParameters(trial.form_element);
			
			/**------ DISPLAY THE FORM **/
			// Clear the display
			display.html('');
			display.addClass('form');
		
			// Add progress bar
			display.append(trial.progbar);
			
			// Show preamble text
			var $preamb = $('<div/>')
				.attr('id','preamb')
				.html(trial.preamble)
				.addClass('form_preamble');	
				
			display.append($preamb);

			var $formdiv = $('<div/>')
				.attr('id','form')
				.addClass('form_div');	
				
			display.append($formdiv);
			var nrow = trial.form_element.length;

			/** FORM QUESTIONS AND OPTIONS **/
			// Add questions, input aeras and radio buttons
			for (var i=0; i<nrow; i++) {
				var elm = trial.form_element[i];
				var quest_id = elm.id;
				// visible elm ?
				var is_vis = elm.is_visible;
				var vis_class = (!is_vis) ? 'hiderow' : '';
				var $row = $('<div />')
					.addClass('form_row ' +  elm.hidden_class + ' ' + vis_class)
					.addClass((elm.required===0) ? 'form_onchg' : '')
					.attr('id', 'row_' + quest_id);
				$row.change(function(){ 
					$(this).addClass('form_onchg')
					.removeClass('reqanswer');
					// remove the required msg if all questions have been changed from the last validation
					if($('#required').css('display')==='block' && $('.reqanswer').length===0){
						$('#required').css('display', 'none');
					}
				});	
				$('#form').append($row);
				/** QUESTION **/
				// Question as div element
				var $quest =  $('<div/>')
					.addClass('form_quest')
					.html(elm.quest)
					.attr('name', quest_id);	
				
				// $('#form').append($quest);
				$('#row_' + quest_id).append($quest);
				// prepare answer column
				var $resp = $('<div/>')
					.addClass('form_resp')
					.attr('id', 'resp_' + quest_id);
					
				//$('#form').append($resp);
				$('#row_' + quest_id).append($resp);
				
				// ID of the response div-column element
				var rid = '#resp_' + quest_id;
				
				var input_type = elm.type;
				/** LIST TYPE **/
				if (input_type==='list'){
				
					var $list_sel = $('<select/>')
						.attr('name', quest_id)
						.attr('id', "list_" + quest_id)
						.addClass((elm.required===1)?'req':'');	
					
					$(rid).append($list_sel);
					
					// List choices
					// Add a first one "Choix" (if selected after submit, indicating that nothing had been selected)
						
					var $list_opt = $('<option/>')
						.attr('value', 'NA')
						.html('Sélectionner');
					
					$('#list_'+ quest_id).append($list_opt);						
					
					for (var j=0 ; j<elm.opt_str.length ; j++) {
						
						var $list_opt = $('<option/>')
							.attr('value', elm.opt_id[j]) 
							.attr('id', quest_id + '_' + elm.opt_id[j])
							.attr('name', quest_id)
							.html(elm.opt_str[j]);
							
							
						if (elm.opt_func_flag[j]===1){
							$list_opt.addClass('cond_opt');
							$list_sel.change(trial.opt_func);
						}
						$('#list_'+ elm.id).append($list_opt);
						
					}
				}
				/** OTHER TYPE RADIO, CHKBOX, TEXT... **/
				if (input_type !=='list'){
					/** LOOP // choices**/
					// display radio inline (few choices expected) --> inside a div wrapped by the flex-column div
					if (input_type === 'radio'){
						var $rad_div = $('<div />')
									.addClass('radio_div')
									.attr('id', 'raddiv_' + quest_id);
						$(rid).append($rad_div);
						rid = '#raddiv_' + quest_id;
					}
					for (var j=0; j<elm.opt_id.length; j++){
						var input_id = elm.opt_id[j];
						var uid = quest_id + '_' + input_id;
						var input_label = elm.opt_str[j];
						
						var $input = $('<input/>')
							.attr('type', input_type)
							.attr('id', uid)
							.attr('name', quest_id)
							.addClass(input_type + '_but choice')
							.css('width', elm.input_width)
							.addClass((elm.required===1)?'req':'');	
						// add associated value for radio or checkbox type
						if (input_type !== 'text'){
							$input.attr('value', input_id);
						}
						// label
						var $label = $('<label/>')
							.attr('id', 'lab' + uid)
							.attr('for', uid)
							.html(input_label)
							.addClass(input_type+'_lab');
						// add change function to the response div if this element fire a visibility change
						// of another question		
						if (elm.opt_func_flag[j]===1){
							$input.addClass('cond_opt');
							$(rid).change(trial.opt_func);
						}
						$(rid).append($label);
						$('#lab' + uid).prepend($input);
						// Prepend to have radio in the left
						// special for check_box
						// Attach maximum allowed choices
						// jaredhoyt's answer in http://stackoverflow.com/questions/10458924/limit-checked-checkbox-in-a-form
						if ((input_type==='checkbox') && (elm.check_lim>0)){
							var checkboxes = $('input[name=' + elm.id + ']');
							var max = elm.check_lim;
							checkboxes.change(function(){
									var current = checkboxes.filter(':checked').length;
									checkboxes.filter(':not(:checked)').prop('disabled', current >= max);
							});
						}
						
					}			
				}
			} // end loop // form rows
			
			var $msg = $('<div />')
				.attr('id', 'required')
				.css({'margin-top': '1em',
						'text-align': 'center',
						'width': '100%',
						'color': 'rgb(246, 108, 20)',
						'display': 'none'})
				.html('Merci de répondre à toutes les questions avant de valider.');
				
			display.append($msg);
			// Add submit button
			
			var $but = $('<div />')
					.addClass("button")
					.attr("id","submit")
					.html('<span>'+ trial.submit+'</span>');
			display.append($but);		  
			/**------ PARSE THE RESPONSES AFTER SUBMIT BUTTON CLICK **/
			
			$("#submit").click( function() {
				// Measure response time
				var endTime = (new Date()).getTime();
				var response_time = endTime - startTime;
				

				// Add hidden input for elements of type "select" (list) to hold the selected value
				$("#form select").each( function(index) {	
					var fname = $(this).attr("name"); 
					var val = $(this).val();
					if ($(this).hasClass('req')){
						var rq = 'req';
					}else{
						var rq = '';
					}
					// update value if element exists
					var idsel = '#selc_' + fname;
					if ($(idsel).length){
						
						$(idsel).attr("value", val);
						
					} else {
						var $selinput = $('<input/>')
							.attr('id', 'selc_'+ fname)
							.attr('type', 'hidden')
							.attr('name', fname)
							.attr('value', val)
							.addClass('choice')
							.addClass(rq)
							.addClass(($(this).hasClass('hiderow')) ? 'hiderow' : '');

						$("#form").append($selinput);
					}

				});
				
				// Create object to hold responses
				var form_data = {};	
				var is_req = {};
				var req_data = {};
				// Parse all input fields, store associated NAME (as "name") and VALUES	
				// Restrict to form_resp class only to avoid AdWare / SpyWare data inclusion (hidden input..)				
				$(".choice").each(function(idx) {
					var intyp = $(this).attr('type');
					var fname = $(this).attr('name'); 
					var val = $(this).val();
					// Initialize object key / content
					if (typeof req_data[fname]==='undefined'){
						req_data[fname] = 'NA';
					}
					// special case for checkbox (multiple values to be collected)
					if (typeof form_data[fname] === 'undefined' && intyp !=='checkbox'){
						form_data[fname] = 'NA';
					}					
					// Input text field or selected element or radio button : a unique answer 
					// to add to the field with the name value of the form_data object
					// For radio element, keep value only if it is checked
					if ( intyp==='text' || intyp==='hidden' || 
						(intyp==='radio' && $(this).is(':checked'))){
						if (val===''){
							val = 'NA';
						}
						req_data[fname] = val;
						form_data[fname] = val;
					}
					// Special case for checkbox type because several element (with the same "name" attribute)
					// could by checked
					if (intyp === 'checkbox'){
						
						if ($(this).is(':checked')){
							form_data[fname + '_' + val] = 1;
							req_data[fname] = val;
						}else{
							form_data[fname + '_' + val] = 0;
						}
					}
					if (typeof is_req[fname] === 'undefined'){						
						is_req[fname] = (!$('#row_' + fname).hasClass('hiderow') && $(this).hasClass('req')) ? 1 : 0;
					}
				});
				// Check if all response were given
				var isn = 0;
				for (var k in req_data) {
					if (req_data[k]==='NA' && is_req[k]===1 ){
						$('#row_'+ k).addClass('reqanswer').removeClass('form_onchg');
						isn = 1;
					}else{
						$('#row_'+ k).removeClass('reqanswer');
					}
				}
				
				if (isn==1){
					$('#required').css('display', 'block');
					
				}else{
					// save data
							
					jsPsych.data.write({
						"rt": response_time,
						"responses": form_data //JSON.stringify(form_data)
					});

					display.html('');
					display.removeClass('form');
					// next trial
					jsPsych.finishTrial();
				}
			});

			var startTime = (new Date()).getTime();
		};

		return plugin;
	})();
})(jQuery);