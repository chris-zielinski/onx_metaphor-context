/* jspsych-text.js
 * Josh de Leeuw
 *
 * This plugin displays text (including HTML formatted strings) during the experiment.
 * Use it to show instructions, provide performance feedback, etc...
 *
 * documentation: docs.jspsych.org
 *
 *
 params = {
	 text: the html content
	 end_type: the way to end trial 
				'mouse': click with the mouse, anywhere on the page 
				'button': click on a button 
				'keyboard': type any keyboard key or specific key(s) if allowed_keys parameter is provided [default]
	 button_string: specific button string [default 'OK' if not provided]
	 allowed_keys: array of allowed keys to end trial [default: [] empty: any key]
 }
 Text can be an array of text to process successive trials
 If the other parameters are not as array of the same size as text array, the same parameters will be applied to all 
 trials.
 */

(function($) {
    jsPsych.text = (function() {

        var plugin = {};

        plugin.create = function(params) {

            params = jsPsych.pluginAPI.enforceArray(params, ['text']);
			
			params.end_type = (typeof params.end_type === 'undefined') ? 'keyboard' : params.end_type;
			params.button_string = (typeof params.button_string === 'undefined') ? 'OK' : params.button_string;
			params.allowed_keys = (typeof params.allowed_keys === 'undefined') ? [] : params.allowed_keys;
			
			// As much trials as stimuli (each stimuli = text to copy)
			var Ntr = params.text.length;
			// check if specific allowed keys array has been set for each trial
			var key_per_trial = (params.allowed_keys.length === Ntr) ? true : false;

			// define content and parameters for all successive trials
            var trials = new Array(Ntr);
			
            for (var i = 0; i < trials.length; i++) {
                trials[i] = {};
				// text to be displayed
                trials[i].text = params.text[i];
				// way to end the current trial
				trials[i].end_type = (Array.isArray(params.end_type)) ? params.end_type[i] : params.end_type;
				// button string
                trials[i].button_string = (Array.isArray(params.button_string)) ? params.button_string[i] : params.button_string;
				// keyboard allowed keys
				trials[i].allowed_keys = (key_per_trial) ? params.allowed_keys[i] : params.allowed_keys;

				// display text during the duration timing_stim, then go to the next trial
				// (without waiting for keyboard or mouse response)
				trials[i].timing_stim = params.timing_stim || -1; 
				// + Add timing_post_trial parameter (otherwise, the default value is 1000 in jspsych.js)
				trials[i].timing_post_trial = params.timing_post_trial || -1;
				// Minimum duration in ms
				trials[i].timing_min = (typeof params.timing_min === 'undefined') ? 0 : params.timing_min;
				
				// Progress bar
				trials[i].progbar = (typeof params.progbarstr === 'undefined') ? "" : params.progbarstr;
				trials[i].title = (typeof params.title === 'undefined') ? "" : params.title;	
            }
            return trials;
        };

        plugin.trial = function(display_element, trial) {

			display_element.html('');
            // if any trial variables are functions
            // this evaluates the function and replaces
            // it with the output of the function
            trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);
			
			var end_type = trial.end_type;
			var end_time = (trial.timing_stim > 0);
			
			var start_time = (new Date()).getTime();
			
			/**------ Display (title and) texte **/
			// With an animation for title 
			if (trial.title !== "") {
				// title duration
				var tdur = 800;
				
				trial.timing_min = trial.timing_min + tdur;
				var $title = $('<p\>')
							.addClass('title')
							.attr('style', 'font-size: 30px') //16px
							.html(trial.title);
				display_element.append($title);
				display_element.append(trial.text);
				/*$('.title').animate({fontSize: "30px"},
					{ 
						duration: tdur,
						complete: function(){										
							display_element.append(trial.text);
						}
					});*/
			}else{
				display_element.html(trial.text);
			}
						
			// Add the progress bar
			display_element.prepend(trial.progbar);
			
			// add the button if any
			if (end_type==='button'){
				
				// Add submit button				
				var $but = $('<div />')
						.addClass("button")
						.attr("id","submit")
						.html('<span>'+ trial.button_string+'</span>');
						
				display_element.append($but);
			}
			/**------ After response function **/
            var after_response = function(info) {
				// clear the display
                display_element.html(''); 
				// Keep data
				jsPsych.data.write({
					"rt": info.rt,
					"kp": info.key
				});
				// Next trial
                jsPsych.finishTrial();
            };
			/**------ Star event listener or finish trial **/
			if (end_time) {				
				setTimeout(function() {
						display_element.html('');
						jsPsych.finishTrial();
					}, trial.timing_stim);
						
			}else{	
				// Add a time delay before starting listeners (to prevent pressing/clicking
				// before instruction to be shown)
				setTimeout(function(){		
					if (end_type==='mouse') {	
						// Start mouse listener
						var mouse_listener = function(e) {
							var rt = (new Date()).getTime() - start_time;
							display_element.unbind('click', mouse_listener);
							after_response({key: 'mouse', rt: rt});
						};
						display_element.click(mouse_listener);	
					} else if (end_type==='button') {
						$('#submit').click(function(){
							var rt = (new Date()).getTime() - start_time;
							after_response({key: 'button', rt: rt});							
						});
					} else {
						// Start keyboard listener
						jsPsych.pluginAPI.getKeyboardResponse({
							callback_function: after_response,
							valid_responses: trial.allowed_keys,
							rt_method: 'date',
							persist: false,
							allow_held_key: false
						}); 
					}
				}, trial.timing_min);
			}	
        };

        return plugin;
    })();
})(jQuery);
