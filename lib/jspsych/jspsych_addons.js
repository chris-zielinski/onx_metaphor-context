/** 
* Add new methods to jsPsych object for CREx experiments
*
* jsPsych.getSubjectID
* jsPsych.prepareProgressBar
* jsPsych.typingFeedbackBlock
*
*
*
* jsPsych documentation: docs.jspsych.org
* de Leeuw, J. R. (2014). jsPsych: A JavaScript library for creating behavioral 
* experiments in a Web browser. Behavior research methods, 1-12
*
* CREx-BLRI-AMU
* https://github.com/blri/Online_experiments_jsPsych
* 2016-12-13 christelle.zielinski@blri.fr
**/

/** subject_ID */
jsPsych.getSubjectID = (function() {
	
	/* Define subject ID (based on an accurate start date - millisecond order precision) */
	function datestr(sdat) {
		function formatstr(num, dignum){
			dignum = (typeof dignum =='undefined') ? 2 : dignum;
			var numstr = num.toString();
			if (numstr.length < dignum) {
				for (var j = 0 ; j < dignum - numstr.length ; j++) {				
					numstr = "0" + numstr;
				}
			}
			return numstr;
		}
		var sy = sdat.getFullYear();
		var smo = formatstr(sdat.getMonth()+1);
		var sda = formatstr(sdat.getDate());
		var sho = formatstr(sdat.getHours());
		var smi = formatstr(sdat.getMinutes());
		var sse = formatstr(sdat.getSeconds());
		var sms = formatstr(sdat.getMilliseconds(), 3);
		var strdat = sy + smo + sda + "_" + sho + smi + sse + "_" + sms;
		
		return strdat ;
	}

	return 'ID_' + datestr(new Date());
});

jsPsych.prepare_data = function(){
	function concat_field_value(data, fields, concat_arr=false){
		var json_data = {};
		for (var i=0; i<data.length; i++){
			var trial_data = data[i];
			for (var j=0; j<fields.length; j++){
				var fnam = fields[j];
				var dat = trial_data[fnam];
				if (i==0){
					if(concat_arr && Array.isArray(dat)){
						json_data[fnam] = dat;
					}else{
						json_data[fnam] = [dat];
					}
				}else{
					if(concat_arr && Array.isArray(dat)){
						json_data[fnam] = json_data[fnam].concat(dat);
					}else{
						json_data[fnam].push(dat);
					}
				}
			}
		}
		return json_data;
	}
	
	// get all data
	var alldata = jsPsych.data.getData();	
	// those of type rating - exclude the first one == example
	var rating_data = jsPsych.data.getTrialsOfType('rating').slice(1);
	var fields = ["trial_num", "id_stim", "cat", "rt_click", "rt_resp", "comp", "fam", "beau", "meta"];
	rating_data = concat_field_value(rating_data, fields);
	// add the check trials
	var check_data = jsPsych.data.getTrialsOfType('check');
	check_data = concat_field_value(check_data, ["trial_num", "id_stim", "resp", "correct"]);
	// art data
	var art_data = jsPsych.data.getTrialsOfType('art');
	art_data = concat_field_value(art_data, ["id", "resp", "score"], true);
	// special case for response of form trial (object concatenation)
	var form_data = jsPsych.data.getTrialsOfType("form");
	var all_resp = {};
	for (var i=0; i<form_data.length; i++){
		var fdata = form_data[i];
		all_resp = Object.assign(all_resp, fdata.responses);
	}
	return {rating: rating_data, check: check_data, art: art_data, form: all_resp};	
};
