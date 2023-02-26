var put_info = function (){
	var legal = { 
		title: "Mentions légales",
		text: [
			"Ce site a été conçu pour le projet de recherche mené par des personnels d'<a target='_blank' href='https://www.univ-amu.fr/'>Aix-Marseille Université</a>.",
			"<span class='important'>Identification</span> AMU (LPC, LIS, ILCB) - Adresse : 3 Place Victor Hugo, 13003 Marseille, France - Téléphone : +33(0)4.13.55.09.60 - Courriel : marion.fechino(at)univ-amu.fr ",
			"<span class='important'>Conception et réalisation</span> Aix-Marseille Université - M. Fechino<sup>1</sup>, A. Nasr<sup>2</sup>, A. M. Jacobs<sup>3</sup>, J. Ziegler<sup>1</sup>, C. Zielinski<sup>4</sup> (<sup>1</sup><a target='_blank' href='https://lpc.univ-amu.fr/'>Laboratoire de Psychologie Cognitive</a> ; <sup>2</sup><a target='_blank' href='https://www.lis-lab.fr/'>Laboratoire Informatique et Système</a> ; <sup>3</sup><a target='_blank' href='https://www.fu-berlin.de/'>Freie Universität Berlin</a> ; <sup>4</sup><a target='_blank' href='https://www.ilcb.fr/'>Institute of Language, Communication, and the Brain</a>)",
			"<span class='important'>Responsable de la publication</span> Johannes Ziegler",
			"<span class='important'>Hébergement</span> Serveur virtuel sécurisé DigitalOcean configuré et administré par Stéphane Dufau pour l'ILCB (<a target='_blank' href='https://lpc.univ-amu.fr/fr'>Laboratoire de Psychologie Cognitive</a>, Marseille, AMU)"]
	};
	

	var anonym = {
		title: "Anonymat",
		text: [	
			"Les données collectées sont <b>anonymes</b>, c'est-à-dire qu'elles ne contiennent aucune information permettant de vous identifier (vos nom et prénom, adresse physique et IP demeurent inconnus).",
			"La liste des données collectées est :"+ 
			"<ul><li style='list-style-type:square;'> la date de lancement de l'expérience depuis votre navigateur</li>"+
			/*"<li style='list-style-type:square;'> le type de navigateur (Firefox, Chrome, Opera) et sa version</li>"+
			"<li style='list-style-type:square;'> le système d'exploitation (Windows, Mac, Unix) et sa version</li>"+*/
			"<li style='list-style-type:square;'> les valeurs données à l'échelle de compréhension, métaphoricité, beauté, familiarité et apport du contexte des 24 extraits</li>"+
			"<li style='list-style-type:square;'> les réponses contrôles</li>"+
			"<li style='list-style-type:square;'> les réponses du questionnaire de reconnaissance d’auteurs</li>"+		
			"<li style='list-style-type:square;'> les données du questionnaire final</li></ul>",
			"Les réponses du formulaire final sont utilisées pour analyser l'ensemble des données (corrélations entre les mesures recueillies).", 
			"L'ensemble de ces données est stocké dans une base mySQL sur le serveur à l'aide d'un script PHP, à la toute fin de l'expérience. ",
			"L'accès aux pages de l'expérience n'engendre aucun dépôt de traceur (cookie) sur votre ordinateur.",
			"Ce site n'est pas déclaré à la CNIL car il ne recueille pas d'informations personnelles (<i>« informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent »</i> - article 4 de la loi n° 78-17 du 6 janvier 1978)."]
	};

	var consent = {
		title: "Consentement",
		text: ["En acceptant de lancer l'expérience, vous donnez votre consentement à l'enregistrement des données et à leur utilisation à des fins de recherche scientifique. Du fait qu'elles soient anonymes, il sera impossible de les supprimer a posteriori de la base de données. Vous pouvez à tout moment quitter l'expérience (les données ne sont enregistrées qu'à la toute fin de l'expérience)."]
	};

	var lucky = {
		title: "Tirage au sort",
		text: ["A l'issue de votre participation, un tirage au sort a lieu qui vous permettra peut-être de gagner la somme de 40€ (un gagnant tous les 40 participants). La méthode de tirage au sort garantit l'anonymat des données : aucun lien ne pourra être établi entre le gagnant et une entrée spécifique de la base de données. Le résultat du tirage s'affiche à la fin de l'expérience. Si vous êtes gagnant, un code gagnant et une adresse e-mail de contact seront affichés. La personne en charge de la remise de la somme vous indiquera le rendez-vous à Saint-Charles pour venir retirer la récompense. Une signature et votre numéro de sécurité sociale vous seront demandés à cette occasion pour des raisons administratives (procédure de paiement des participations aux expériences)."]
	};

	var respon = {
		title: "Limitation de responsabilité",
		text: [
			"L'expérience est jouée par votre navigateur à l'aide du langage JavaScript, et en particulier de la librairie <a target='_blank' href='https://www.jspsych.org/'>jsPsych</a>. Ce langage est interprété par tous les navigateurs récents, il permet de rendre le contenu de la page dynamique – le contenu est modifié par votre navigateur directement, indépendamment du côté serveur. En aucun cas ce site ne pourra être tenu responsable de dommages matériels directs ou indirects liés à l'exécution de l'expérience par votre navigateur."]
	};

	var scripts = {
		title: "Outils & scripts",
		text: ["L'expérience a été développée à partir de la librairie <a target='_blank' href='https://www.jspsych.org/'><img class='logo' src='img/layout/logo_jspsych.png' style='float:left;max-height:3em;padding-right:1em;padding-bottom:2em;' alt='Logo jsPsych' title='Vers le site de jsPsych'/>jsPsych</a>. "+  
			"Le fond d'écran de la page d'accueil provient du site <a target='_blank' href='https://www.toptal.com/designers/subtlepatterns/'>Subtle Patterns</a>."]
	};
		
	var allinfos = [anonym, consent, lucky, respon, legal, scripts]; 

	function put_lines(textarr){
		var Np = textarr.length;
		var spar = "";
		for (var k = 0 ; k < Np ; k++){
			spar += "<p>" + textarr[k] + "</p>";
		}
		return spar;
	}
	
	var Ni = allinfos.length;
	var infotext = "";
	for (var i=0; i < Ni; i++){
		
		var infopart = allinfos[i];
		infotext += "<div class='legal_title shabox'>" + infopart.title + "</div>";
		infotext += put_lines(infopart.text);
	}
	return infotext;	
};

var info_txt = put_info();

