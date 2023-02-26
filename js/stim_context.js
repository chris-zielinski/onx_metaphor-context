/** Big object to define the struli and the form pages **/

/* Define all sub-objects first*/

/**---- STIMULI **/
function define_rating_block(){
	
	var example = [{cat: "non-met", str: 
	"La <b>Nature est un temple</b> où de vivants piliers<br/>"+ "Laissent parfois sortir de confuses paroles ;<br/>"+"L’homme y passe à travers des forêts de symboles<br/>"+ "Qui l’observent avec des regards familiers.", id: "id_ex", check: 0}];
	
	var rating_form = [
		{
		id : "comp",
		quest : "En prenant en compte ce contexte, ressentez-vous que l'extrait en gras était compréhensible ?",
		opt_str : ["1", "2", "3", "4", "5", "6", "7"],
		opt_val : ["1", "2", "3", "4", "5", "6", "7"],
		opt_extlabel: ["Incompréhension totale", "Compréhension totale"],
		},
		{
		id : "fam",
		quest : "En prenant en compte ce contexte, ressentez-vous que l'extrait était familier (sensation que vous avez déjà vu cette association) ?",
		opt_str : ["1", "2", "3", "4", "5", "6", "7"],
		opt_val : ["1", "2", "3", "4", "5", "6", "7"],
		opt_extlabel: ["Non familiarité totale", "Familiarité totale"],
		},
		{
		id : "beau",
		quest : "En prenant en compte ce contexte, ressentez-vous que l'extrait en gras était beau ?",
		opt_str : ["1", "2", "3", "4", "5", "6", "7"],
		opt_val : ["1", "2", "3", "4", "5", "6", "7"],
		opt_extlabel: ["Pas du tout beau", "Complètement beau"],
		},
		{
		id : "meta",
		quest : "En prenant en compte ce contexte, pensez-vous que l'extrait en gras était une métaphore ?",
		opt_str : ["1", "2", "3", "4", "5", "6", "7"],
		opt_val : ["1", "2", "3", "4", "5", "6", "7"],
		opt_extlabel: ["Pas du tout métaphorique", "Complètement métaphorique"],
		},
		{
		id : "cont",
		quest : "Ressentez-vous que le contexte vous a aidé à comprendre l'extrait en gras ?",
		opt_str : ["1", "2", "3", "4", "5", "6", "7"],
		opt_val : ["1", "2", "3", "4", "5", "6", "7"],
		opt_extlabel: ["Absolument non aidant", "Complètement aidant"],
		}
	];
	var ex_form = JSON.parse(JSON.stringify(rating_form));
    ex_form[0].quest += '<span class="ex_indic">(est-ce que cette expression vous semble facile à comprendre ?)</span>';
    ex_form[1].quest += '<span class="ex_indic">(est-ce que vous avez déjà rencontré cette expression ?)</span>';
	
	var all_stim = {
		list_1: [{cat:"met", str:"<b>Cette âme était une exilée</b><br/>" + "Sur cette terre et parmi nous...<br/>" +"Ce sont les chérubins jaloux<br/>" +"Qui l'ont auprès d'eux rappelée.", id:"id_1", check:0},
			{cat:"met", str:"Mais, hélas ! je ne peux diminuer ma plainte,<br/>"+"Je suis votre jet d'eau murmurant, exalté,<br/>"+"Mon cœur jaillit en vous, épars et sans contrainte,<br/>"+"Vaste comme un parfum propagé par l'été !<br/>"+"Pourquoi donc, <b>douce nuit</b> aux humains étrangère,<br/>"+"M'avez-vous attirée au seuil de vos secrets ?<br/>"+"Votre muette paix, massive et mensongère,<br/>"+" N'entr'ouvre pas pour moi ses brumeuses forêts.", id:"id_2", check:0},
			{cat:"no-met", str:"L'ennui me consumait dans tes vieilles murailles,<br/>"+" Ô fière cité de Champlain !<br/>"+" Je ne suis pas, vois-tu, <b>l'enfant de tes entrailles</b><br/>"+" Et ton cœur me semble d'airain.", id:"id_3", check:0},
			{cat:"met", str:"L'équipage affamé qui se perd et se noie.<br/>"+"Il s'y noya de même, et de même, ayant faim,<br/>"+"Fit ce que fait tout homme invalide et sans pain.<br/>"+"« Je gémis, disait-il, d'avoir <b>une pauvre âme</b><br/>"+"Faible autant que serait l'âme de quelque femme,<br/>"+"Qui ne peut accomplir ce qu'elle a commencé<br />"+"Et s'abat au départ sur tout chemin tracé.<br/>"+"L'idée à l'horizon est à peine entrevue,<br/>"+"Que sa lumière écrase et fait ployer ma vue.<br/>"+"Je vois grossir l'obstacle en invincible amas,<br/>"+"Je tombe ainsi que Paul en marchant vers Damas.<br/>"+" &mdash; Pourquoi, me dit la voix qu'il faut aimer et craindre,<br/>"+"Pourquoi me poursuis-tu, toi qui ne peux m'étreindre?<br/>"+"&mdash; Et le rayon me trouble et la voix m'étourdit,<br/>"+"Et je demeure aveugle et je me sens maudit. »", id:"id_4", check:0},
			{cat:"no-met", str:"La nuit, quand la veilleuse agonise dans l'urne,<br/>"+"Quand Paris, enfoui sous la brume nocturne<br/>"+"Avec la tour saxonne et l'église des Goths,<br/>"+"Laisse sans les compter passer <b>les heures noires</b><br/>"+"Qui, douze fois, semant les rêves illusoires,<br/>"+"S'envolent des clochers par groupes inégaux.", id:"id_5", check:0},
			{cat:"met", str:"Quinze siècles durant sa parole féconde<br/>"+"Avait incessamment vibré pour l'ancien monde,<br/>"+"Si souvent submergé par des fleuves de sang,<br/>"+"Et <b>son écho suave</b> allait s'affaiblissant<br/>"+"À travers les brouillards du sophisme et du doute.<br/>"+"Bien des peuples semblaient avoir perdu leur route,<br/>"+"Qu'éclairaient les seuls feux sinistres des bûchers.<br/>"+"Les cœurs partout prenaient l'âpreté des rochers,<br/>"+"Et le siècle était prêt, entre mille ruines,<br/>"+"À recevoir le grain funeste des doctrines<br/>"+"Dont la Réforme allait ensemencer les cœurs ;<br/>"+"Et l'Europe, où grondaient tant de sourdes rancœurs,<br/>"+"Où survivait toujours l'antique servitude,<br/>"+"Se mourait de débauche et de décrépitude.", id:"id_6", check:0},
			{cat:"met", str:"Je ne veux rien de plus, s'il est vrai que sur terre<br/>"+"<b>Le calme est le nid</b> du bonheur,<br/>"+"Et que la paix fleurit sous le toit solitaire<br/>"+"Et se loge dans l'humble cœur.", id:"id_7", check:1},
			{cat:"no-met", str:"Le jardin était grand, profond, mystérieux,<br/>"+"Fermé par de hauts murs aux regards curieux,<br/>"+"Semé de fleurs s'ouvrant ainsi que des paupières,<br/>"+"Et d'insectes vermeils qui couraient sur les pierres ;<br/>"+"Plein de bourdonnements et de confuses voix ;<br/>"+"Au milieu, presque un champ, dans le fond, presque un bois.<br/>"+"<b>Le prêtre</b>, tout nourri de Tacite et d'Homère,<br/>"+"<b>Était un doux vieillard</b>. Ma mère - était ma mère !", id:"id_8", check:0},
			{cat:"no-met", str:"Et là nous admirions le couchant et l'aurore<br/>"+"Déployant à notre œil leurs tableaux gracieux ;<br/>"+"Et nos cœurs bénissaient l'Artiste que décore<br/>"+"Toute <b>l'immensité de la mer</b> et des cieux.", id:"id_9", check:0},
			{cat:"met", str:"Nos chevaux, au soleil, foulaient l'herbe fleurie ;<br/>"+"Et moi, silencieux, courant à ton côté,<br/>"+"Je laissais au hasard flotter ma rêverie ;<br/>"+"Mais dans le fond du cœur je me suis répété :<br/>"+"&mdash; Oui, la vie est un bien, <b>la joie est une ivresse</b> ;<br/>"+"Il est doux d'en user sans crainte et sans soucis ;<br/>"+"Il est doux de fêter les dieux de la jeunesse,<br/>"+"De couronner de fleurs son verre et sa maîtresse,<br/>"+"D'avoir vécu trente ans comme Dieu l'a permis,<br/>"+"Et, si jeunes encor, d'être de vieux amis.", id:"id_10", check:0},
			{cat:"met", str:"Tsoui-Tchou-Tchi,<br/>"+"Ta tasse est beaucoup plus grande<br/>"+"Que celle des autres.<br/>"+"Lorsque tu renverses la tête<br/>"+"Pour boire en montrant<br/>"+"Le blanc de tes yeux,<br/>"+"Tu as le temps de voir<br/>"+"S’il y a des nuages sur le ciel.<br/>"+"Ton visage est blanc<br/>"+"Comme la mousse des vagues,<br/>"+"Et tu as l’air d’<b>un arbre de jade</b><br/>"+"Que le vent traverse,<br/>"+"Quand le vin parfumé passe<br/>"+"Entre tes lèvres.", id:"id_11", check:1},
			{cat:"no-met", str:"Voici le firmament, <b>le reste est procédure</b>.<br/>"+"Et vers le tribunal voici l'ajustement.<br/>"+"Et vers le paradis voici l'achèvement.<br/>"+"Et la feuille de pierre et l'exacte nervure.", id:"id_12", check:0},
			{cat:"no-met", str:"Mais selon sa grandeur chaque être me mesure,<br/>"+"Les fourmis au ciron et l'homme à la nature,<br/>"+"Et les soleils, pour qui <b>le siècle est un moment</b>,<br/>"+"À ces mondes de feu, poudre du firmament !<br/>"+"Chacun, de mon ouvrage impalpable parcelle,<br/>"+"Réfléchit de moi-même une pâle étincelle ;<br/>"+"Je franchis chaque temps, je dépasse tout lieu.", id:"id_13", check:0},
			{cat:"no-met", str:"Faudra-t-il de sang-froid, et sans être amoureux,<br/>"+"Pour quelque Iris en l'air faire le langoureux ;<br/>"+"Lui prodiguer les noms de Soleil et d'Aurore,<br/>"+"Et, toujours bien mangeant, mourir par métaphore?<br/>"+"Je laisse aux doucereux <b>ce langage affété</b>,<br/>"+"Où s'endort un esprit de mollesse hébété.", id:"id_14", check:0},
			{cat:"no-met", str:"Dans ce monde de mensonges,<br/>"+"Moi, j'aimerai mes douleurs,<br/>"+"Si mes rêves sont tes songes,<br/>"+"Si <b>mes larmes sont tes pleurs</b> !", id:"id_15", check:0},
			{cat:"no-met", str:"<b>Le prêtre de ce temple</b> est un de ces hébreux<br/>"+"Qui, proscrits sur la terre, et citoyens du monde,<br/>"+"Portent de mers en mers leur misère profonde,<br/>"+"Et d'un antique amas de superstitions<br/>"+"Ont rempli dès longtemps toutes les nations.", id:"id_16", check:0},
			{cat:"met", str:"Endors sereinement ton rêve et ton murmure<br/>"+"Au-dessus des clameurs lointaines des cités.<br/>"+"Le monde à ton regard s'efface et se balance<br/>"+"Autour de ces bouleaux pleureurs<br/>"+"Et <b>l'hymne de ton âme</b> infiniment s'élance.", id:"id_17", check:0},
			{cat:"no-met", str:"Toi seul es son refuge, et seul sa confiance,<br/>"+"C'est toi seul qu'au secours son zèle ose appeler,<br/>"+"Cependant qu'elle attend avecque patience<br/>"+"Que tu daignes la consoler.<br/>"+"Oraison pour obtenir l'illumination de l'âme.<br/>"+"Éclaire-moi, <b>mon cher sauveur</b>,<br/>"+"Mais de cette clarté qui cachant sa splendeur,<br/>"+"Chasse mieux du dedans tous les objets funèbres,<br/>"+"Et qui purge le fond du cœur<br/>"+"De toute sorte de ténèbres.", id:"id_18", check:0},
			{cat:"no-met", str:"La fumée, en sortant des hautes cheminées,<br/>"+"Formait des orbes bleus, des vagues satinées,<br/>"+"Qui rayaient le ciel pur, comme un rustique andain<br/>"+"Raie un champ que l'on fauche. Et, parti du jardin,<br/>"+"Derrière la maison, par un bosquet de chêne,<br/>"+"Un sentier conduisait, <b>large ruban</b> d'ébène,<br/>"+"Jusques à la prairie où de chaudes lueurs<br/>"+"Le soleil inondait les gazons et les fleurs.", id:"id_19", check:0},
			{cat:"met", str:"Mars et Vénus sont revenus<br/>"+"Ils s'embrassent à bouches folles<br/>"+"Devant des sites ingénus<br/>"+"Où sous les roses qui feuillolent<br/>"+"De beaux dieux roses dansent nus<br/>"+"Viens ma tendresse est <b>la régente </b><br/>"+"<b>De la floraison</b> qui paraît<br/>"+"La nature est belle et touchante<br/>"+"Pan sifflote dans la forêt<br/>"+"Les grenouilles humides chantent." , id:"id_20", check:0},
			{cat:"met", str:"Ma sœur, sauveras-tu de l'implacable orage<br/>"+"Ce lis immaculé qui fleurit dans ton cœur?<br/>"+"D'invisibles dangers t'attendent au passage,<br/>"+"Et les anges de Dieu tombent par leur candeur.<br/>"+"Mais je tremble surtout que <b>ta beauté céleste</b><br/>"+"Ne devienne, en ce monde impie, un don funeste,<br/>"+"&ndash; Mais pour ange gardien j'aurai ton souvenir,<br/>"+"Répondit Madeleine ; et puis qui peut connaître<br/>"+"Ce qu'en son sein fécond nous garde l'avenir?<br/>"+"Dans ce monde maudit je trouverai peut-être<br/>"+"L'amour, cet idéal flambeau dont notre cœur<br/>"+"Illumine toujours ses rêves de bonheur.", id:"id_21", check:0},
			{cat:"met", str:"Quelle voix a l'accent du flot baisant les rives ?<br/>"+"Quel <b>amoureux silence</b> est plus délicieux<br/>"+"Et verse un plus long rêve aux âmes attentives<br/>"+"Que l'entretien muet des bois silencieux ?", id:"id_22", check:0},
			{cat:"no-met", str:"Sur les coteaux ombreux pour qu'un peuple y fourmille,<br/>"+"Fais place avec la hache à ta jeune famille ;<br/>"+"Là, sous les cerisiers encor rouges de fruit,<br/>"+"Mille bruns moissonneurs souperont à grand bruit ;<br/>"+"De beaux enfants joufflus, rentrant le soir aux granges,<br/>"+"Passeront en chantant sur le char des vendanges,<br/>"+"Et <b>les joyeux voisins</b> viendront se convier<br/>"+"À rompre le pain blanc au pied de l'olivier.", id:"id_23", check:1},
			{cat:"met", str:"Dire ce qu'éprouva notre Prosper auprès<br/>"+"De tous ces chers bijoux d'enfant, je ne pourrais ;<br/>"+"Surtout lorsqu'il trouva, portant <b>les folles traces</b><br/>"+"Des anciens jours vécus, ses vieilles paperasses.<br/>"+"Car toute sa jeunesse au riant souvenir<br/>"+"Était dans ces feuillets épars, et revenir<br/>"+"En arrière, c'est vivre une autre fois. La folle<br/>"+"Du logis s'éveillait, et sa blonde parole<br/>"+"Semblait douce à l'enfant comme un zéphyr de mai.<br/>"+"Alors, comme autrefois le héros, enfermé<br/>"+"Près des vierges, frémit au son rauque des armes,<br/>"+"Prosper, sorti plus grand d'un baptême de larmes,<br/>"+"Vers l'azur idéal retrouva son chemin.<br/>"+"Le poème qu'il fit, tu le liras demain.", id:"id_24", check:0}],
		list_2:[{cat:"met", str:"Quand l'éclair et la foudre enflent rafale et grèle,<br/>"+"Les forêts sont des mers dont chaque <b>arbre est un flot</b>,<br/>"+"Et tous, le chène énorme et le coudrier grèle,<br/>"+"Dans l’opaque fouillis poussent un long sanglot.", id:"id_25", check:0},
			{cat:"no-met", str:"Il voulait, réservant pour lui ce prix céleste,<br/>"+"Être un époux pour elle, être un dieu pour le reste,<br/>"+"Et, lui donnant aussi sa part de royauté,<br/>"+"Faire de sa conquête une divinité.<br/>"+"<b>Ces lieux étaient la scène</b> et cette heure était l'heure.<br/>"+"Conduite de la nuit de sa morne demeure.<br/>"+"À ce jour que lançaient les torches dans les cieux,<br/>"+"Daïdha, rougissante, était devant ses yeux.", id:"id_26", check:0},
			{cat:"no-met", str:"Et la rame tardive, aux murs du vieux château,<br/>"+"Plus lente chaque jour ramène le bateau.<br/>"+"Debout, Herman l'attend. Le sombre capitaine<br/>"+"Rapporte son ennui de la chasse lointaine.<br/>"+"Le repas est distrait, bref et silencieux.<br/>"+"L'époux timide et fier, sans rayon dans les yeux,<br/>"+"Porte en un cœur profond cet amour qui le ronge ;<br/>"+"Il souffre sans se plaindre et paraît vivre en songe.<br/>"+"Un peu d'ardent soleil manque à ce noble sang<br/>"+"Pour le faire éclater en un cri tout-puissant ;<br/>"+"Peut-être il eût parlé sous un regard plus tendre,<br/>"+"Et la céleste voix s'y serait fait entendre ;<br/>"+"Mais ce regard sur lui jamais ne s'arrêta.<br/>"+"Qu'importent <b>les secrets de cette âme</b> à Fausta !<br/>"+"Qu'importe au prisonnier le trésor que recèle<br/>"+"Le mur sombre où se rive une chaîne éternelle !", id:"id_27", check:0},
			{cat:"no-met", str:"Que ce pâtre à jambe de bois<br/>"+"Est donc vieux malgré son jeune âge !<br/>"+"&ndash; Il chante, comme c'est l'usage.<br/>"+"Mais quelle <b>épouvantable voix !</b>", id:"id_28", check:0},
			{cat:"met", str:"Dieu seul a pu savoir et peut vous dire un jour<br/>"+"Quelle place en ma vie a tenu cet amour.<br/>"+"Dans mes heures de calme et dans mes nuits de fièvre,<br/>"+"Ils reviennent sans fin, vos deux noms, sur ma lèvre.<br/>"+"Et, quand l'âme en priant fuira mon corps glacé,<br/>"+"<b>Ces noms seront l'adieu</b> que j'aurai prononcé.", id:"id_29", check:0},
			{cat:"met", str:"Landgraves, rhingraves, burgraves,<br/>"+"Venus du ciel ou de l'enfer,<br/>"+"Ils sont tous là, muets et graves,<br/>"+"Les roides <b>convives de fer</b> !", id:"id_30", check:1},
			{cat:"no-met", str:"Vous avez ces enfants, ces hommes et ces femmes ;<br/>"+"Vous possédez les corps, vous possédez, les âmes ;<br/>"+"À vous leur toit, à vous leur or, à vous leur sang ;<br/>"+"Le champ et la maison sont à vous ; ce passant<br/>"+"Vous appartient ; soufflez si vous voulez qu'il meure ;<br/>"+"Toute vie est à vous, en tous lieux, à toute heure ;<br/>"+"Ce vieillard au front chauve est une chose à vous ;<br/>"+"Tous les hommes sont faits pour plier les genoux,<br/>"+"Vous seul êtes créé pour vivre tête haute ;<br/>"+"Tous se trompent, vous seul ne faites pas de faute ;<br/>"+"Dieu ne compte que vous, vous seul, au milieu d'eux ;<br/>"+"<b>Votre droit est le droit</b> de Dieu même ; et tous deux<br/>"+"Vous régnez, devant vous le monde doit se taire ;<br/>"+"Dieu n'a pas le ciel plus que vous n'avez la terre ;<br/>"+"Il est votre pensée et vous êtes son bras ;<br/>"+"Il est roi de là-haut et vous Dieu d'ici-bas.<br/>"+"Tout ce peuple est à vous.", id:"id_31", check:0},
			{cat:"no-met", str:"Chantons le vin et la beauté :<br/>"+"Tout <b>le reste est folie</b>.<br/>"+"Voyez comme on oublie<br/>"+"Les hymnes de la liberté.<br/>"+"Un peuple brave<br/>"+"Retombe esclave :<br/>"+"Fils d'Épicure, ouvrez-moi votre cave.<br/>"+"La France, qui souffre en repos,<br/>"+"Ne veut plus que mal à propos<br/>"+"J'ose en trompette ériger mes pipeaux.<br/>"+"Adieu donc, pauvre Gloire !<br/>"+"Déshéritons l'histoire.<br/>"+"Venez, Amours, et versez-nous à boire.", id:"id_32", check:0},
			{cat:"met", str:"Ô <b>ton ombre est mon pays</b> ; j'y vieillis ; je sais l'âge<br/>"+"Des grands chènes épars sur les coteaux voisins.<br/>"+"Jamais je ne dormis dans les murs d'un village ;<br/>"+"Je ne cueillis jamais le blé ni les raisins.", id:"id_33", check:0},
			{cat:"met", str:"Soirs d'hiver<br/>"+"Ah ! comme la neige a neigé !<br/>"+"<b>Ma vitre est un jardin</b> de givre.<br/>"+"Ah ! comme la neige a neigé !<br/>"+"Qu'est-ce que le spasme de vivre<br/>"+"À la douleur que j'ai, que j'ai !", id:"id_34", check:0},
			{cat:"no-met", str:"Je suis celui des pourritures grandioses<br/>"+"Qui s'en revient du pays mou des morts ;<br/>"+"Celui des Ouests noirs du sort<br/>"+"Qui te montre, là-bas, comme une apothéose,<br/>"+"<b>Son île immense</b>, où des guirlandes<br/>"+"De détritus et de viandes<br/>"+"Se suspendent,<br/>"+"Tandis, qu'entre les fleurs somptueuses des soirs,<br/>"+"S'ouvrent les yeux en disques d'or de crapauds noirs.", id:"id_35", check:1},
			{cat:"no-met", str:"Beauté, génie, amour, furent <b>son nom de femme</b><br/>"+"Écrit dans son regard, dans son cœur, dans sa voix.<br/>"+"Sous trois formes au ciel appartenait cette âme :<br/>"+"Pleurez terre, et vous, cieux, accueillez-la trois fois.", id:"id_36", check:0},
			{cat:"met", str:"Ô vivants, soyez bons, priez, faites l'aumône.<br/>"+"À qui l'aumône?  À tous. Souvenez-vous qu'ici<br/>"+"<b>La compassion sainte est une aumône</b> aussi,<br/>"+"Et que la charité qui nourrit et désarme,<br/>"+"Tombe des mains obole et tombe du cœur larme !", id:"id_37", check:0},
			{cat:"met", str:"Voilà pourquoi, ô Amaïdée !<br/>"+"Altaï t'a dit que j'étais Poète ;<br/>"+"Mais je n'étais, hélas !<br/>"+"Que le martyr de mes pensées.<br/>"+"Hommes et femmes, qui avez des regards<br/>"+"Et des caresses,<br/>"+"Vous qui pouvez dénouer des chevelures<br/>"+"Et confondre <b>la flamme de</b><br/>"+"<b>Vos bouches</b> incombustibles,<br/>"+"C'est vous qui êtes les Poètes,<br/>"+"Et non pas Somegod !", id:"id_38", check:0},
			{cat:"met", str:"L'univers tout entier concentré dans ce vin<br/>"+"Qui contenait les mers les animaux les plantes<br/>"+"Les cités les destins et les astres qui chantent<br/>"+"Les hommes à genoux sur la rive du ciel<br/>"+"Et le docile fer notre bon compagnon<br/>"+"Le feu qu'il faut aimer comme on s'aime soi-même<br/>"+"Tous les fiers trépassés qui sont un sous mon front<br/>"+"L'éclair qui luit ainsi qu'une pensée naissante<br/>"+"Tous les noms six par six les nombres un à un<br/>"+"Des kilos de papier tordus comme des flammes<br/>"+"Et ceux-là qui sauront blanchir nos ossements<br/>"+"Les bons vers immortels qui s'ennuient patiemment<br/>"+"Des armées rangées en bataille<br/>"+"<b>Des forêts de crucifix</b> et mes demeures lacustres.", id:"id_39", check:0},
			{cat:"met", str:"Vous avez la paix candide des années,<br/>"+"Vous êtes le chœur des <b>vivants souvenirs </b>:<br/>"+"Douces, vous tressez les couronnes fanées<br/>"+"Des anciens désirs.", id:"id_40", check:0},
			{cat:"met", str: "Je suis dieu. Comme un dieu qu'on m'adore et me prie !<br/>"+"&ndash; Les magistrats ont dit : Peuple ! c'est le devoir.<br/>"+"Un jour, fou furieux, il a souhaité voir<br/>"+"Des gavials manger des hommes ; les édiles<br/>"+"Ont fait faire un palais de marbre aux crocodiles.<br/>"+"Qu'est-ce que l'univers ?  un immense valet.<br/>"+"Le bien, le juste, ô roi, c'est tout ce qui vous plaît.<br/>"+"S'il veut verser du sang, <b>le sang est une gloire</b>,<br/>"+"Le sang est une pourpre ; et s'il désire en boire,<br/>"+"On rendra grâce aux Dieux de la soif de Néron.<br/>"+"La guerre l'étourdit de son vaste clairon.", id: "id_41", check: 0},
			{cat:"no-met", str: "Ô le plus affreux <b>supplice est l'extrême vertu</b>.<br/>"+"Son grand sanglot déborde, et monte dans les âges<br/>"+"Vers celui qui toujours dans son ombre s'est tu.", id: "id_42", check: 0},
			{cat:"no-met", str: "Elle n'est pas pauvre<br/>"+"Celle-là dans <b>sa robe de soirée</b> souillée de boue<br/>"+"Mais riche des réalités du matin<br/>"+"De l'ivresse de son sang<br/>"+"Et du parfum de son haleine que nulle insomnie ne peut altérer<br/>"+"Riche d'elle-même et de tous les matins<br/>"+"Passés présents et futurs<br/>"+"Riche d'elle-même et du sommeil qui la gagne<br/>"+"Du sommeil rigide comme un acajou<br/>"+"Du sommeil et du matin et d'elle-même<br/>"+"Et de toute sa vie qui ne se compte<br/>"+"Que par matinées, aubes éclatantes<br/>"+"Cascades, sommeils, nuits vivantes", id: "id_43", check: 1},
			{cat:"no-met", str: "Et le Maître s'assit: ses regards étaient doux ;<br/>"+"Son front blanc, couronné par de longs cheveux roux,<br/>"+"Avait dans sa beauté sereine et reposée<br/>"+"Une grâce ineffable et pleine de pensée ;<br/>"+"L'ardente charité, nimbe d'or et de feu,<br/>"+"Rayonnait de sa face avec l'esprit de Dieu.<br/>"+"Un manteau bleu s'ouvrait sur sa rouge tunique,<br/>"+"<b>Ouvrage de sa mère</b> et d'une pièce unique,<br/>"+"Mystérieux tissu qu'un prophête chanta,<br/>"+"Voile du corps sacré promis au Golgotha.<br/>"+"Devant Jésus était le pécheur d'hommes, Pierre,<br/>"+"Le futur fondement de son Église entière,<br/>"+"Né pour la foi robuste et fait à l'action,<br/>"+"Tête chauve et brunie où vit la passion.", id: "id_44", check: 0},
			{cat:"met", str: "Met, sur les routes d'or, des voiles aux cyprès.<br/>"+"Jamais d'un cœur plus sûr, d'un esprit plus secret,<br/>"+"Je ne me suis penché contre Sainte-Victoire.<br/>"+"La montagne latine est <b>un bouquet de gloire</b><br/>"+"Que, ce soir, je respire avec avidité.<br/>"+"Est-ce le pur flambeau de votre éternité<br/>"+"Qui jette tant d'éclats sur ces mouvants espaces ? <br/>"+"Ô mon ami, mes pas tremblent sur votre trace.", id: "id_45", check: 0},
			{cat:"met", str: "À sentir sur sa joue et dans ses molles tresses<br/>"+"Passer confusément d'invisibles caresses,<br/>"+"Une vague épouvante enfle son cœur prudent.<br/>"+"Avide avec effroi de fraîcheurs innomées,<br/>"+"Buvant comme un poison l'odeur des fleurs aimées,<br/>"+"Enfin elle s'abîme en <b>un repos ardent</b>.", id: "id_46", check: 0},
			{cat:"met", str: "Ils se mouvaient, pareils à deux <b>blocs de silence</b>,<br/>"+"Faits de sourde rancune et d'âpre violence<br/>"+"Aux trois repas, ils attablaient, farouchement,<br/>"+"Face à face, leur double entêtement.", id: "id_47", check: 0},
			{cat:"met", str: "<b>Le voyage est un maître</b> aux préceptes amers ;<br/>"+"Il vous montre l'oubli dans les cœurs les plus chers,<br/>"+"Et vous prouve, &ndash; ô misère et tristesse suprême !", id: "id_48", check: 0}],
		list_3:[{cat:"met", str: "Même après que le cri sur sa route élevé<br/>"+"Se fut évanoui dans ma jeune mémoire,<br/>"+"Ce fut de voir, parmi <b>ces fanfares de gloire</b>,<br/>"+"Dans le bruit qu'il faisait, cet homme souverain<br/>"+"Passer, muet et grave, ainsi qu'un dieu d'airain !", id: "id_49", check: 0},
			{cat:"no-met", str: "Le pouvoir n'était rien que la paternité,<br/>"+"De la vie et du temps la sainte autorité,<br/>"+"Dont l'âge décernait l'évidente puissance,<br/>"+"Et pour qui <b>l'habitude était l'obéissance</b>.<br/>"+"Quand la famille humaine en rameaux s'étendait,<br/>"+"Le conseil des vieillards au père succédait ;<br/>"+"Du destin des tribus séculaires arbitres,<br/>"+"Ils régnaient sans couronne, et gouvernaient sans titres ;<br/>"+"Leur parole écoutée était les seules lois:<br/>"+"On respectait le temps qui parlait par leurs voix,<br/>"+"Mais à leur tribu seule ils devaient la justice ;<br/>"+"L'ignorance livrait le reste à leur caprice :<br/>"+"Tout ce qui n'était pas du sang de leurs aveux,<br/>"+"Profane, n'avait plus titre d'homme à leurs yeux.", id: "id_50", check: 0},
			{cat:"no-met", str: "Le Brun des bois anciens, favorable à l'étude,<br/>"+"Sait encadrer mon silence et ma solitude.<br/>"+"Venez ensevelir <b>mon ancien désespoir</b>.<br/>"+"Sous la neige du Blanc et dans la nuit du Noir.", id: "id_51", check: 0},
			{cat:"no-met", str: "Ce sont eux qu'il faudrait pouvoir rendre immortels,<br/>"+"Eux qui mériteraient un temple à leur mémoire,<br/>"+"Comme Athène autrefois, dans <b>les jours de sa gloire</b>,<br/>"+"Pour les dieux inconnus élevait des autels.", id: "id_52", check: 0},
			{cat:"met", str: "Toi, dont le monde encore ignore le vrai nom,<br/>"+"Esprit mystérieux, mortel, ange, ou démon,<br/>"+"Qui que tu sois, Byron, bon ou fatal génie,<br/>"+"J'aime de tes concerts la sauvage harmonie,<br/>"+"Comme j'aime le bruit de la foudre et des vents<br/>"+"Se mêlant dans l'orage à la voix des torrents !<br/>"+"<b>La nuit est ton séjour</b>, l'horreur est ton domaine :<br/>"+"L'aigle, roi des déserts, dédaigne ainsi la plaine ;<br/>"+"Il ne veut, comme toi, que des rocs escarpés<br/>"+"Que l'hiver a blanchis, que la foudre a frappés,<br/>"+"Des rivages couverts des débris du naufrage,<br/>"+"Ou des champs tout noircis des restes de carnage :<br/>"+"Et, tandis que l'oiseau qui chante ses douleurs<br/>"+"Bâtit au bord des eaux son nid parmi les fleurs,<br/>"+"Lui des sommets d'Athos franchit l'horrible cime,<br/>"+"Suspend aux flancs des monts sont aire sur l'abîme,<br/>"+"Et là, seul, entouré de membres palpitants,<br/>"+"De rochers d'un sang noir sans cesse dégouttants,<br/>"+"Trouvant sa volupté dans les cris de sa proie,<br/>"+"Bercé par la tempête, il s'endort dans la joie.", id: "id_53", check: 1},
			{cat:"no-met", str: "Prophète de malheur, <b>oiseau noir</b> ou démon,<br/>"+"Par ce grand ciel tendu sur nous, sorcier d'ébène,<br/>"+"Par ce Dieu que bénit notre même limon,<br/>"+"Dis à ce malheureux damné chargé de peine,<br/>"+"Si dans le paradis qui ne doit pas cesser,<br/>"+"Oh ! dis-lui s'il pourra quelque jour embrasser<br/>"+"La précieuse enfant que tout son corps adore,<br/>"+"La sainte enfant que les anges nomment Lenore ? <br/>"+"Le corbeau gémit: « Jamais plus ! ».", id: "id_54", check: 0},
			{cat:"met", str: "Là, présidant aux plaisirs amoureux,<br/>"+"Déesse heureuse, elle y rend tout heureux.<br/>"+"Elle jouit, s'endort, ou se réveille,<br/>"+"Aux sons flatteurs qui charment son oreille.<br/>"+"De son pouvoir <b>le trône solennel</b><br/>"+"<b>est une alcove</b> ; un lit est son autel.", id: "id_55", check: 0},
			{cat:"met", str: "Souvent mille chagrins empoisonnent leurs charmes,<br/>"+"Souvent mille terreurs y jettent mille alarmes,<br/>"+"Et souvent des objets d'où naissent leurs plaisirs<br/>"+"Ma justice en courroux fait naître leurs soupirs.<br/>"+"L'impétuosité qui les porte aux délices<br/>"+"Elle-même à leur joie enchaîne les supplices,<br/>"+"Et joint aux vains appas d'un peu d'illusion<br/>"+"Le repentir, le trouble et la confusion.<br/>"+"Toutes ces voluptés sont courtes et menteuses,<br/>"+"Toutes n'ont que désordre, et toutes sont honteuses.<br/>"+"Les hommes cependant n'en aperçoivent rien ;<br/>"+"Enivrés qu'ils en sont, ils en font tout leur bien :<br/>"+"Ils suivent en tous lieux, comme bêtes stupides,<br/>"+"Leurs sens pour souverains, leurs passions pour guides ;<br/>"+"Et pour l'indigne attrait d'un faux chatouillement,<br/>"+"Pour un bien passager, un plaisir d'un moment,<br/>"+"Amoureux d'une <b>vie ingrate</b> et fugitive,<br/>"+"Ils acceptent pour l'âme une mort toujours vive,<br/>"+"Où mourant à toute heure, et ne pouvant mourir,<br/>"+"Ils ne sont immortels que pour toujours souffrir.<br/>"+"Plus sage à leurs dépens, donne moins de puissance<br/>"+"Aux brutales fureurs de ta concupiscence.", id: "id_56", check: 0},
			{cat:"met", str: "L'on voit dans ma boîte magique<br/>"+"La rareté ! la rareté !<br/>"+"Rien qui ne flatte et qui ne pique<br/>"+"La curiosité.<br/>"+"Le monde en <b>peinture mouvante</b>,<br/>"+"Par mon verre se montre aux yeux,<br/>"+"Et la figure est si parlante,<br/>"+"Qu'elle fait dire aux curieux :<br/>"+"Oh la merveille !<br/>"+"Oh la merveille sans pareille !", id: "id_57", check: 0},
			{cat:"met", str: "Ce monde est si mauvais, notre pauvre patrie<br/>"+"Va sous tant de ténèbres,<br/>"+"Vaisseau désemparé dont l'équipage crie<br/>"+"Avec des voix funèbres,<br/>"+"Ce siècle est un tel <b>ciel tragique</b> où les naufrages<br/>"+"Semblent écrits d'avance...<br/>"+"Ma jeunesse, élevée aux doctrines sauvages,<br/>"+"Détesta ton enfance,<br/>"+"Et plus tard, cœur pirate épris des seuls côtes<br/>"+"Où la révolte naisse,<br/>"+"Mon âge d'homme, noir d'orages et de fautes,<br/>"+"Abhorrait ta jeunesse.", id: "id_58", check: 0},
			{cat:"met", str: "Aimez-la, mes petits chéris,<br/>"+"Dans la plus humble créature ;<br/>"+"Aimez-la chez les grands esprits,<br/>"+"C’est leur essence la plus pure ;<br/>"+"C’est la fleur, le joyau sans prix,<br/>"+"C’est <b>la perle de la nature</b>.", id: "id_59", check: 0},
			{cat:"no-met", str: "Le plus brave de tous les rois<br/>"+"Dressant un appareil de guerre<br/>"+"Qui devait imposer des lois<br/>"+"À tous <b>les peuples de la terre</b>,<br/>"+"Entre les bras de ses sujets,<br/>"+"Assuré de tous les objets<br/>"+"Comme de ses meilleurs gardes,<br/>"+"Se vit frapper mortellement<br/>"+"D'un coup à qui cent hallebardes<br/>"+"Prenaient garde inutilement.", id: "id_60", check: 1},
			{cat:"met", str: "L'avril boréal<br/>"+"Est-ce l'avril ? Sur la colline<br/>"+"Rossignole une voix câline,<br/>"+"De l'aube au soir.<br/>"+"Est-ce le chant de la linotte ?<br/>"+"Est-ce une flûte ? est-ce la note<br/>"+"Du merle noir ?<br/>"+"Malgré la bruine et la grêle,<br/>"+"Le virtuose à <b>la voix frêle</b><br/>"+"Chante toujours ;<br/>"+"Sur mille tons il recommence<br/>"+"La mélancolique romance<br/>"+"De ses amours.<br/>"+"Le chanteur, retour des Florides,<br/>"+"Du clair azur des ciels torrides<br/>"+"Se souvenant,<br/>"+"Dans les bras des hêtres en larmes<br/>"+"Dis ses regrets et ses alarmes<br/>"+"À tout venant.<br/>"+"Surpris dans son vol par la neige,<br/>"+"Il redoute encor le cortège<br/>"+"Des noirs autans ;<br/>"+"Et sa vocalise touchante<br/>"+"Soupire et jase, pleure et chante<br/>"+"En même temps.", id: "id_61", check: 0},
			{cat:"no-met", str: "Allons, Babet, il est bientôt dix heures ;<br/>"+"Pour un goutteux c'est l'instant du repos.<br/>"+"Depuis un an qu'avec moi tu demeures,<br/>"+"Jamais, je crois, je ne fus si dispos.<br/>"+"À mon coucher ton aimable présence<br/>"+"Pour ton bonheur ne sera pas sans fruit.<br/>"+"Allons, Babet, un peu de complaisance,<br/>"+"Un lait de poule et <b>mon bonnet de nuit</b>.<br/>"+"Petite bonne, agaçante et jolie,<br/>"+"D'un vieux garçon doit être le soutien.<br/>"+"Jadis ton maître a fait mainte folie<br/>"+"Pour des minois moins friands que le tien.<br/>"+"Je veux demain, bravant la médisance,<br/>"+"Au Cadran Bleu te régaler sans bruit.<br/>"+"Allons, Babet, un peu de complaisance,<br/>"+"Un lait de poule et mon bonnet de nuit.", id: "id_62", check: 0},
			{cat:"no-met", str: "Et <b>cet homme est le chef</b> de la pauvre famille<br/>"+"&mdash; C'est le père annoncé tantôt comme un sauveur ! &mdash;<br/>"+"Voyez-le, sous les feux de la lune qui brille,<br/>"+"Étendu sur le seuil sans voix et sans vigueur !", id: "id_63", check: 0},
			{cat:"no-met", str: "L'histoire est là ; ce sont toutes les panoplies<br/>"+"Par qui furent jadis tant d'œuvres accomplies ;<br/>"+"Chacune, avec son timbre en <b>forme de delta</b>,<br/>"+"Semble la vision du chef porta ;<br/>"+"Là sont les ducs sanglants et les marquis sauvages<br/>"+"Qui portaient pour pennons un milieu des ravages<br/>"+"Des saints dorés et peints sur des peaux de poissons.", id: "id_64", check: 0},
			{cat:"met", str: "Et vous vous partagez le pain de la douleur<br/>"+"Pour que grandisse en vous l'humanité souffrante !<br/>"+"<b>Une neige chaude</b> et secrète est dans vos cœurs<br/>"+"Et vous donne pour feu sa pureté ardente.", id: "id_65", check: 0},
			{cat:"no-met", str: "J'ai cette honneur d'avoir des ennemis<br/>"+"D'ordre privé, dont je suis trop bien aise<br/>"+"Et m'esjouis autant qu'il est permis,<br/>"+"Car la vie autrement serait fadaise<br/>"+"Et, parlons clair, une bonne foutaise.<br/>"+"Or j'en ai moult, non des moins furieux<br/>"+"Mais, comme on dit, ardents, chauds comme braise :<br/>"+"<b>Mes ennemis sont des gens</b> sérieux.<br/>"+"Ils ont passé ma substance au tamis,<br/>"+"Argent et tout, fors ma gaîté française<br/>"+"Et mon honneur humain qui, j'en frémis,<br/>"+"Eussent bien pu déchoir en la fournaise<br/>"+"Où leur cuisine excellemment mauvaise<br/>"+"Grille et bout, pour quels goûts injurieux ?<br/>"+"Sottise, Lucre et Haine qui biaise ?<br/>"+"Mes ennemis sont des gens sérieux.", id: "id_66", check: 1},
			{cat:"no-met", str: "Je contemplais les nuits sans nul présage amer,<br/>"+"Quand, jadis, me leurrait leur promesse illusoire,<br/>"+"Comme un enfant qui suit, du haut d'un promontoire,<br/>"+"Les feux rouges et bleus des fanaux sur la mer.<br/>"+"Mais aujourd'hui j'ai peur de l'uniforme éther :<br/>"+"Depuis que <b>ma terrasse est un observatoire</b>,<br/>"+"Je songe, connaissant la terre et son histoire,<br/>"+"Que tout astre, sans doute, a son âge de fer.", id: "id_67", check: 0},
			{cat:"no-met", str: "Je puis souffrir ! je puis, plaignant vos créatures,<br/>"+"Errer sous <b>ce ciel noir</b> ;<br/>"+"Je suis sûr de rester, au milieu des tortures,<br/>"+"Plein d'amour et d'espoir.", id: "id_68", check: 0},
			{cat:"no-met", str: "Allons, Polyte, <b>un coup de croc</b> :<br/>"+"Vois-tu comme le mec ballotte.<br/>"+"On croirait que c'est un poivrot<br/>"+"Ballonné de vin qui barbote ;<br/>"+"Pour baigner un peu sa ribote<br/>"+"Il a les arpions imbibés :<br/>"+"Mince, alors, comme il nous dégote,<br/>"+"Pauvré remorqueurs de macchabés.<br/>"+"Allons, Polyte, au petit trot,<br/>"+"Le mec a la mine pâlotte :<br/>"+"Il a bouffé trop de sirop ;<br/>"+"Bientôt faudra qu'on le dorlote,<br/>"+"Qu'on le bichonne, qu'on lui frotte<br/>"+"Les quatre abatis embourbés.", id: "id_69", check: 0},
			{cat:"met", str: "Oui, il y a dans ce moment-ci<br/>"+"un coup de vent dans le monde des arts ;<br/>"+"la tradition ancienne était une admirable convention,<br/>"+"mais c'était une convention ;<br/>"+"<b>le débordement romantique a été un déluge</b> effrayant,<br/>"+"mais une importante conquête.", id: "id_70", check: 0},
			{cat:"no-met", str: "Je ne suis qu'un vieux bon homme,<br/>"+"Ménétrier du hameau ;<br/>"+"Mais pour sage on me renomme,<br/>"+"Et je bois mon vin sans eau.<br/>"+"Autour de moi sous l'ombrage<br/>"+"Accourez vous délasser.<br/>"+"Eh ! Lon lan la, gens de village,<br/>"+"Sous <b>mon vieux chêne</b> il faut danser.<br/>"+"Oui, dansez sous mon vieux chêne ;<br/>"+"C'est l'arbre du cabaret.<br/>"+"Au bon temps toujours la haine<br/>"+"Sous ses rameaux expirait.<br/>"+"Combien de fois son feuillage<br/>"+"Vit nos aïeux s'embrasser !<br/>"+"Sous mon vieux chêne il faut danser.", id: "id_71", check: 0},
			{cat:"no-met", str: "Et nous voici devant la mer avec nos âmes d'accalmie.<br/>"+"Je fus une heure sans voix aux cadrans de vos rêves,<br/>"+"<b>Un jour de solitude</b>, une nuit d'insomnie,<br/>"+"Mensonge de désir qui t'étonne et s'achève.", id: "id_72", check: 0}],
		list_4:[{cat:"no-met", str: "Calmes dans leur allégresse,<br/>"+"Jamais les élus aux cieux<br/>"+"N’ont bu cette ardente ivresse<br/>"+"Qui pétille dans tes yeux ;<br/>"+"Pour eux jamais, ô ma belle,<br/>"+"Tant d’amour ne chargea l’aile<br/>"+"Du timide séraphin,<br/>"+"Et l'éternelle ambroisie<br/>"+"Contient moins de poésie<br/>"+"Qu’<b>une goutte de ton vin</b> !", id: "id_73", check: 0},
			{cat:"met", str: "Pour qu'il reste ici-bas une place au mystère,<br/>"+"Nous cachons nos déserts avec un soin jaloux.<br/>"+"<b>Nos bases de granit sont les reins</b> de la terre,<br/>"+"Et ce vieux continent s'étaye encor sur nous.", id: "id_74", check: 0},
			{cat:"met", str: "Il me semble que Dieu, qui se laisse toujours<br/>"+"Toucher par les soupirs d'une mère qui prie,<br/>"+"Permettrait que sa main indulgente et chérie<br/>"+"Effaçât les erreurs du <b>livre de mes jours</b>.", id: "id_75", check: 0},
			{cat:"no-met", str: "Et la mer obéit au même acharnement<br/>"+"De vitesse et d'essor à travers ses espaces :<br/>"+"Les sous-marins rusés et les croiseurs rapaces<br/>"+"Guettent au pied des caps pour s'élancer vers où ?<br/>"+"Des signaux concordants sont donnés tout à coup.<br/>"+"Les ports sont ameutés de brusques canonnades.<br/>"+"Des obusiers géants quittent les esplanades.<br/>"+"Dans la cale et la soute on travaille partout<br/>"+"Et voici qu'à l'aurore, en <b>ligne de bataille</b>,<br/>"+"Sur les flots montueux que leur étrave entaille,<br/>"+"Passent les cuirassés dardant vers l'horizon<br/>"+"Les obliques et rayonnants buissons<br/>"+"De leurs canons.", id: "id_76", check: 0},
			{cat:"met", str: "Ce qui rayonne là, ce n'est pas un vain jour<br/>"+"Qui naît et meurt, riant et pleurant tour à tour,<br/>"+"Jaillissant, puis rentrant dans la noirceur première ;<br/>"+"Et, comme notre aurore, <b>un sanglot de lumière</b> ;<br/>"+"C'est un grand jour divin, regardé dans les cieux<br/>"+"Par les soleils, comme est le nôtre par les yeux ; ", id: "id_77", check: 1},
			{cat:"no-met", str: "D'une éternelle nuit le peuple menacé<br/>"+"rappelle par ses cris le soleil éclipsé.<br/>"+"Mais quel corps menaçant vient troubler la nature<br/>"+"par son étincelante et <b>longue chevelure</b> ?<br/>"+"Qu'un si grand appareil annonce de fureur !<br/>"+"Vil peuple, il ne doit point te causer de terreur :<br/>"+"d'un important couroux ces députés sinistres,<br/>"+"si ce n'est pour des rois, partent pour des ministres.", id: "id_78", check: 0},
			{cat:"met", str: "N'as-tu pas dans les mains assez crevé de bulles,<br/>"+"De rêves gonflés d'air et d'espoirs ridicules ?<br/>"+"Plongeur, n'as-tu pas vu sous l'eau du lac d'azur<br/>"+"Les reptiles grouiller dans le limon impur ?<br/>"+"L'objet le plus hideux, que le lointain estompe,<br/>"+"Prend une belle forme où le regard se trompe.<br/>"+"Le mont chauve et pelé doit à l'éloignement<br/>"+"Les changeantes couleurs de son beau vêtement ;<br/>"+"Approchez, ce n'est plus que rocs noirs et difformes,<br/>"+"Escarpements abrupts, entassements énormes,<br/>"+"Sapins échevelés, broussailles au poil roux,<br/>"+"Gouffres vertigineux et torrents en courroux.<br/>"+"Je le sais, je le sais. <b>Déception amère</b> !<br/>"+"Hélas ! j'ai trop souvent pris au vol ma chimère !<br/>"+"Je connais quels replis terminent ces beaux corps,<br/>"+"Et la sirène peut m'étaler ses trésors :<br/>"+"À travers sa beauté je vois, sous les eaux noires,<br/>"+"Frétiller vaguement sa queue et ses nageoires.<br/>"+"Aussi ne vais-je pas, de vains mots ébloui,<br/>"+"Chercher sous d'autres cieux mon rêve épanoui ;<br/>"+"Je ne crois pas trouver devant moi, toutes faites,<br/>"+"Au coin des carrefours les strophes des poètes,<br/>"+"Ni pouvoir en passant cueillir à pleines mains<br/>"+"Les fleurs de l'idéal aux chardons des chemins.", id: "id_79", check: 0},
			{cat:"met", str: "Mon cœur est comme un grand paradis de délices<br/>"+"Qu'un ange au glaive d'or contre le mal défend ;<br/>"+"Et j'habite mon cœur, pareil à quelque enfant<br/>"+"Chasseur de papillons, seul, parmi les calices.<br/>"+"Gardé des chagrins fous et des mortels supplices,<br/>"+"En l'asile fleuri du jardin triomphant,<br/>"+"Pour me désaltérer, dans le jour étouffant,<br/>"+"J'ai ton eau, frais ruisseau du rêve bleu, qui glisses !<br/>"+"Je ne sortirai plus jamais du cher enclos<br/>"+"Où, dans <b>l'ombre paisible</b>, avec les lys éclos,<br/>"+"Par ses parfums secrets je respire la vie.<br/>"+"Car la nature a mis en moi l'essentiel<br/>"+"Des plaisirs que je puis goûter et que j'envie:<br/>"+"C'est en moi que je sens mon bonheur et mon ciel !", id: "id_80", check: 0},
			{cat:"no-met", str: "Mais si le Temps m'épargne et si la Mort m'oublie,<br/>"+"Mes mains, <b>mes froides mains</b> par de nouveaux concerts<br/>"+"Sauront la rajeunir, cette lyre vieillie ;<br/>"+"Dans mon cœur épuisé je trouverai des vers,<br/>"+"Des sons dans ma voix affaiblie ;<br/>"+"Et cette liberté, que je chantai toujours,<br/>"+"Redemandant un hymne à ma veine glacée,<br/>"+"Aura ma dernière pensée<br/>"+"Comme elle eut mes premiers amours.", id: "id_81", check: 0},
			{cat:"met", str: "<b>Les claires heures des printemps<br/>"+"Sont des gemmes</b> qu'en leurs largesses<br/>"+"Nous jettent des cieux éclatants<br/>"+"Les mains d'invisibles princesses.", id: "id_82", check: 0},
			{cat:"no-met", str: "Le chant doux et berceur de sa voix cristalline<br/>"+"Fait pleuvoir le sommeil sur <b>le front de l'enfant</b>,<br/>"+"Et des rêves remplis des bruits de la colline<br/>"+"Planent sur les berceaux que son aile défend.", id: "id_83", check: 0},
			{cat:"met", str: "C'est Toulouse au beau ciel, ses jardins gracieux<br/>"+"Et son fleuve et tes pleurs ; et je ferme les yeux<br/>"+"Pour me mieux dérober au jour qui m'environne<br/>"+"Et pour nouer en ton honneur cette couronne<br/>"+"Que sur tes noirs cheveux un rêve ira poser,<br/>"+"Cette couronne où chaque <b>feuille est un baiser</b>.", id: "id_84", check: 0},
			{cat:"no-met", str: "Le monde est-il meilleur ? La charité, plus forte !<br/>"+"Le riche avec plaisir fait-il ouvrir sa porte<br/>"+"À <b>l'homme malheureux</b> que la misère escorte ?", id: "id_85", check: 0},
			{cat:"met", str: "Les gens de terre leur criaient du rivage :<br/>"+"« Mange-cabris ! Culs-de-peau ! <b>Nez de beurre</b> ! »<br/>"+"Et les colosses bonasses: &mdash; « Mange-anchois ! »<br/>"+"Répondaient-ils en clameur prolongée.", id: "id_86", check: 0},
			{cat:"no-met", str: "On dirait que <b>l'énorme voûte</b><br/>"+"Se renverse avec son soleil,<br/>"+"Tant, alors, l'abîme en sommeil,<br/>"+"Nettement la réfléchit toute !", id: "id_87", check: 0},
			{cat:"no-met", str: "Je reconnus soudain le cercueil d'une femme.<br/>"+"« Malheureux ! m'écriai-je en un premier transport,<br/>"+"Parlez, que faisiez-vous ? Profaniez-vous la mort ?<br/>"+"Vouliez-vous dérober au tombeau son mystère ?<br/>"+"Osiez-vous disputer sa dépouille à la terre ? »<br/>"+"Son front, à ce soupçon, se redressa d'horreur ;<br/>"+"Il joignit ses deux mains sur le corps :<br/>"+"« Ah ! monsieur. Moi profaner la mort et dépouiller la tombe !<br/>"+"Ah ! si, depuis deux jours, sous ce poids je succombe,<br/>"+"C'est pour n'avoir pas pu des vivants obtenir.<br/>"+"Une main de l'autel qui voulût la bénir,<br/>"+"Une prière à part, hélas ! pour sa pauvre âme !<br/>"+"Cette bière est à moi, <b>cette morte est ma femme</b> !<br/>"+"&ndash; Expliquez-vous, lui dis-je, et sur ce cher linceul,<br/>"+"S'il est vrai, mon enfant, vous ne prierez pas seul ;<br/>"+"Mes larmes tomberont du cœur avec les vôtres ;<br/>"+"Je n'en ai plus pour moi, mais j'en ai pour les autres. »", id: "id_88", check: 0},
			{cat:"met", str: "Je fleuris simple et ma fierté,<br/>"+"Si timide parfois ou gauchement hautaine,<br/>"+"N'est que <b>la pureté de ma clarté</b>.", id: "id_89", check: 0},
			{cat:"no-met", str: "Innombrables, au fond des esprits ou des cœurs,<br/>"+"Par mille <b>trous nouveaux</b> il glissera ses griffes ;<br/>"+"Et tes propres croyants conduits par leurs pontifes,<br/>"+"Plus louches au massacre ou plus fous de terreurs,<br/>"+"Se tordront plus courbés sous le faix de leurs âmes.<br/>"+"Pour en finir avec les hommes et les femmes<br/>"+"Dont le gémissement s'allonge sous tes lois,<br/>"+"Peut-être un jour, après des millions d'années,<br/>"+"Tu diras : « Que la nuit se fasse ! » Et cette fois,<br/>"+"Dans la flamme ou dans l'eau, pour jamais condamnées,<br/>"+"Les générations périront sans appel.<br/>"+"Mais le chemin, ô Maître ! est ardu de ton ciel.<br/>"+"Peu d'élus près de toi siégeront sous leurs nimbes,<br/>"+"Tandis que mes états seront pleins jusqu'aux bords ;<br/>"+"Et l'éternel sanglot des enfers et des limbes,<br/>"+"Montant vers toi, sera ton éternel remords !", id: "id_90", check: 1},
			{cat:"met", str: "Et te voici parti vers les Londres funèbres,<br/>"+"En des palais obscurs dont a peur le soleil,<br/>"+"Pour y fixer cet art triomphal et vermeil<br/>"+"Comme une vigne d'or sur <b>des murs de ténèbres</b>.", id: "id_91", check: 0},
			{cat:"no-met", str: "Solitude, jardin des vipères, ciel gris<br/>"+"Et pluvieux où glisse avec de tristes cris,<br/>"+"Un triangle d'oiseaux sauvages. Mes pensées,<br/>"+"N'ont-elles pas souvent loin <b>des rives glacées</b><br/>"+"Où l'esprit se lamente et mire dans les eaux<br/>"+"Un visage de nuit, n'ont-elles pas, oiseaux,<br/>"+"Fui naguère battant les airs d'une aile forte<br/>"+"Vers l'azur. Mais ce soir que l'espérance est morte.", id: "id_92", check: 0},
			{cat:"met", str: "Le printemps, le printemps !<br/>"+"Tout renaît et fleurit.<br/>"+"<b>Le vin de la jeunesse</b> enivre la nature.", id: "id_93", check: 1},
			{cat:"met", str: "Seule ainsi, dans la nuit, forçat du vers rebelle,<br/>"+"Tu jongles, tu faiblis à chercher de vains mots,<br/>"+"Cependant qu'à sa joie un monde heureux t'appelle,<br/>"+"Et que le plaisir rit au sein des verts rameaux...<br/>"+"Ignorant de ton art, riant de tes chimères,<br/>"+"Tandis qu'au fond de toi le noir dégoût descend,<br/>"+"Le monde, dédaigneux de <b>tes strophes amères</b>,<br/>"+"Ne jette même pas un regard en passant...", id: "id_94", check: 0},
			{cat:"met", str: "Cette apparition de l'infini<br/>"+"Qui donne aux grands horizons leur charme,<br/>"+"Et <b>au spectacle de l'univers</b><br/>"+"Sa haute valeur poétique et religieuse,<br/>"+"Ne peut pas être décrite ou dessinée<br/>"+"Avec de fermes et invariables contours.", id: "id_95", check: 0},
			{cat:"no-met", str: "L'arbre se drape, ici, dans un manteau d'hermine,<br/>"+"Et là, sous les cristaux s'endorment les sillons.<br/>"+"Ah ! je n'ai plus, mon Dieu ! la chasteté divine<br/>"+"Qui revêtait mon corps d'un manteau de rayons !<br/>"+"Je dors depuis longtemps sous un voile de glace.<br/>"+"<b>Mon nom est un objet</b> de honte. Et ma place<br/>"+"Est avec cette fleur qui n'a plus de parfum<br/>"+"Et que la main rejette après l'avoir cueillie !<br/>"+"Où sont ceux qui m'aimaient ? L'amour est importun<br/>"+"Quand il naît ou survit dans une âme avilie !", id: "id_96", check: 0}],
		list_5:[{cat:"met", str: "Poètes, la sève nouvelle<br/>"+"Éclate aux branches des buissons.<br/>"+"L'herbe brille, l'onde révèle<br/>"+"Des chants nouveaux et des frissons...<br/>"+"Prenons nos luths ! Que notre lyre<br/>"+"Vibre ainsi que les grands bois roux !<br/>"+"Ô frères, dans un saint délire<br/>"+"Chantons les beautés de chez nous !...<br/>"+"La vie en nos champs recommence :<br/>"+"Voyez s'ouvrir la fleur des blés...<br/>"+"Des fruits d'une riche semence<br/>"+"Tous nos greniers seront comblés.<br/>"+"Que <b>cette gloire souveraine</b><br/>"+"Rende nos cœurs fiers et jaloux :<br/>"+"Chantons la terre canadienne,<br/>"+"Chantons les plaines de chez nous !", id: "id_97", check: 0},
			{cat:"met", str: "La nymphe du foyer devient rouge, le thé<br/>"+"par Judith elle-même est bientôt apprêté,<br/>"+"puis dans les flacons d'or le vin de Syracuse<br/>"+"offre aux jeunes amants une charmante excuse<br/>"+"de toutes les pudeurs qu'ils pourraient oublier.<br/>"+"Oh ! Quel désir aigu les vint alors lier !<br/>"+"Qu'ils allaient bien mourir dans ces voluptés sombres<br/>"+"que <b>l'ange de la nuit</b> caresse de ses ombres,<br/>"+"et dont ils connaissaient l'extase jusqu'au fond !<br/>"+"Mais voilà le mari, diplomate profond,<br/>"+"qui revient tout à coup, montrant sous sa paupière<br/>"+"l'impassible regard du convié de pierre.", id: "id_98", check: 0},
			{cat:"met", str: "Céleste fille du poète,<br/>"+"<b>la vie est une hymne</b> à deux voix.<br/>"+"Son front sur le tien se reflète,<br/>"+"Sa lyre chante sous tes doigts.", id: "id_99", check: 0},
			{cat:"met", str: "Plus de voyages et que l'on<br/>"+"Jette ma cuirasse et ma pique !<br/>"+"<b>Mon cœur n'est plus qu'un violon</b><br/>"+"sous un archet mélancolique.", id: "id_100", check: 0},
			{cat:"no-met", str: "Quels yeux ont des regards profonds comme ces ondes<br/>"+"Sur qui le noir sapin s'incline échevelé ?<br/>"+"Quel front si pur de vierge a, sous ses tresses blondes,<br/>"+"De <b>ces sommets neigeux</b> l'éclat immaculé ?", id: "id_101", check: 1},
			{cat:"no-met", str: "Asclépios. Plus d'une fois, en effet, tu m'as parlé de ce voile merveilleux,<br/>"+"que ne souleva jamais la main d'un mortel,<br/>"+"à toutes les fleurs de la terre sont brodées en couleurs éclatantes,<br/>"+"toutes les étoiles du ciel en paillettes d'or.<br/>"+"Mais je n'ai jamais vu ce voile splendide,<br/>"+"ou plutôt, je pense que <b>tes paroles étaient une énigme</b><br/>"+"dont je n'ai pas su pénétrer le sens.", id: "id_102", check: 0},
			{cat:"no-met", str: "Et maintenant, ô dieux ! Écoutez ce mot : L'âme !<br/>"+"&ndash; Sous l'arbre qui bruit, près du monstre qui brame,<br/>"+"&ndash; Quelqu'un parle. C'est l'Ame. Elle sort du chaos.<br/>"+"&ndash; Sans elle, pas de vents, le miasme ; pas de flots,<br/>"+"&ndash; L'étang ; l'âme, en sortant du chaos, le dissipe ;<br/>"+"&ndash; Car il n'est que l'ébauche, et <b>l'âme est le principe</b>.<br/>"+"&ndash; L'Être est d'abord moitié brute et moitié forêt ;<br/>"+"&ndash; Mais l'Air veut devenir l'Esprit, l'homme apparaît.<br/>"+"&ndash; L'homme ? Qu'est-ce que c'est que ce sphinx ? Il commence<br/>"+"&ndash; En sagesse, ô mystère ! Et finit en démence.<br/>"+"&ndash; Ô ciel qu'il a quitté, rends-lui son âge d'or !", id: "id_103", check: 0},
			{cat:"no-met", str: "Ils avancent, coiffés de peaux d'agneaux, les bœufs,<br/>"+"Flanquant <b>des coups de queue</b> à leur croupe écailleuse,<br/>"+"Et sans paraître voir le tournant trop bourbeux,<br/>"+"Ni qu'après le tournant la côte est rocailleuse.", id: "id_104", check: 0},
			{cat:"met", str: "Les fleurs ? Ils en avaient effeuillé les corolles<br/>"+"Pour y lire tout bas mille promesses folles.<br/>"+"Ô souvenirs toujours adorés ! Le soleil ?<br/>"+"Que de fois, éblouis de son éclat vermeil,<br/>"+"Étendus sur la mousse, abrités, seuls au monde,<br/>"+"Ils l'avaient vu mourir dans un baiser de l'onde !<br/>"+"Chaque pas, <b>chaque souffle était un souvenir</b><br/>"+"De ce bonheur enfui pour ne plus revenir :<br/>"+"Mais au fait, je m'arrête à faire de l'églogue,<br/>"+"Tandis que mon héros emplit son catalogue.", id: "id_105", check: 0},
			{cat:"met", str: "Autant que formidable il était généreux :<br/>"+"Tel le dieu qu'adoraient ses plus lointains aïeux,<br/>"+"Le dieu qui d'une main brandissait le tonnerre<br/>"+"Et de l'autre laissait ruisseler les bienfaits.<br/>"+"Ouvrier de la guerre, <b>apôtre de la paix</b>,<br/>"+"Il fut un nouveau Thor éblouissant la terre.", id: "id_106", check: 0},
			{cat:"no-met", str: "Poètes ! sur vos fronts pèse un siècle de fer.<br/>"+"Il est dur en ses chants de voir s'ouvrir l'enfer,<br/>"+"Et d'y plonger vivants, et d'un vers implacable,<br/>"+"Ceux-là qu'à réprouvés la Muse irrévocable.<br/>"+"Même contre le mal <b>la haine est un tourment</b>.<br/>"+"Inflexible est l'esprit, mais le cœur le dément.", id: "id_107", check: 0},
			{cat:"met", str: "La nuit douce à tes souvenirs las<br/>"+"Pose ses pas d’oubli sur la grève.<br/>"+"Dors au pays des fleurs et des glas<br/>"+"Et rêve que <b>la vie est un rêve</b>.", id: "id_108", check: 1},
			{cat:"no-met", str: "Une époque où souvent, gémissante et blessée,<br/>"+"Après avoir du ciel où planait sa pensée<br/>"+"Vu fuir les blanches visions,<br/>"+"L'âme humaine, égarée <b>aux détours de la route</b>,<br/>"+"S'achemine à tâtons dans les sentiers du doute,<br/>"+"Veuve de ses illusions.", id: "id_109", check: 0},
			{cat:"no-met", str: "Déjà le cher sentier, mélancolique et seul,<br/>"+"A des teintes d'hiver. Déjà la bise traîne<br/>"+"Les restes <b>des beaux jours</b>, et leur fait un linceul<br/>"+"Dans les plis de sa longue traîne...<br/>"+"Les champs fanés n'ont plus leurs blonds et lourds cheveux...<br/>"+"Les arbres dépouillés, innombrables squelettes,<br/>"+"Esquissent dans le ciel des gestes douloureux.", id: "id_110", check: 1},
			{cat:"no-met", str: "Enfin, de ce ballot que chaque bond déballe<br/>"+"Jaillit un cuivre étrange, <b>une vieille cymbale</b>,<br/>"+"Une sorte d'astre échancré,<br/>"+"On ne sait quel plateau de balance fantasque,<br/>"+"Luisant, plat comme un plat, martelé comme un casque,<br/>"+"Fourbi comme un vase sacré !", id: "id_111", check: 0},
			{cat:"met", str: "Aux vaincus désarmés dont <b>la foule sanglante</b><br/>"+"Sous le feu se crispe et se tord ;<br/>"+"Le sang ruisselle à flots sur la chair pantelante.<br/>"+"Cris de meurtre et plainte de mort !", id: "id_112", check: 0},
			{cat:"no-met", str: "Ne dites pas : mourir ; dites : naître. Croyez.<br/>"+"On voit ce que je vois et ce que vous voyez ;<br/>"+"On est l'homme mauvais que je suis, que vous êtes ;<br/>"+"On se rue aux plaisirs, aux tourbillons, aux fêtes ;<br/>"+"On tâche d'oublier le bas, la fin, l'écueil,<br/>"+"La sombre égalité du mal et du cercueil ;<br/>"+"Quoique le plus petit vaille le plus prospère ;<br/>"+"Car <b>tous les hommes sont les fils</b> du même père ;<br/>"+"Ils sont la même larme et sortent du même œil.<br/>"+"On vit, usant ses jours à se remplir d'orgueil ;<br/>"+"On marche, on court, on rêve, on souffre, on penche, on tombe,<br/>"+"On monte. Quelle est donc cette aube ? C'est la tombe.", id: "id_113", check: 0},
			{cat:"met", str: "Et quel brusque danger environnant son front,<br/>"+"Quand seul, la nuit, l'oreille à sa fenêtre close,<br/>"+"Les poings serrés, il s'acharnait à écouter<br/>"+"Rugir vers lui, du fond rageur de sa cité,<br/>"+"<b>Les ruts de la folie</b> et de la cruauté.", id: "id_114", check: 0},
			{cat:"no-met", str: "La vieille en pleurs disait : &ndash; La misère en est cause,<br/>"+"Pour mon bon vieux défunt je n'aurai pas grand'chose,<br/>"+"Un seul cierge, un seul prêtre, et deux mots d'oraisons<br/>"+" À la porte. On peut bien entrer dans la maison,<br/>"+"Avoir l'autel, avoir les saints, avoir les châsses,<br/>"+"Tout le clergé chantant des actions de grâces,<br/>"+"Des psaumes, des bedeaux, tout ; mais il faut payer,<br/>"+"Hélas ! et moi qui dois <b>trois termes de loyer</b>,<br/>"+"Je n'ai pas de quoi faire enterrer mon pauvre homme.", id: "id_115", check: 0},
			{cat:"met", str: "Et qu'il me dît : Vois-tu ces splendeurs que j'ai faites<br/>"+"Combleront à ma voix ton cœur ambitieux,<br/>"+"Ton front dominera les plus sublimes têtes,<br/>"+"Sur ta lyre écloront <b>des chants délicieux</b>.", id: "id_116", check: 1},
			{cat:"no-met", str: "Car, lorsque brille au loin dans un horizon sombre<br/>"+"Un éclat vif et beau,<br/>"+"Tous ceux qui sur nos fronts ne règnent que par l'ombre<br/>"+"Éteignent le flambeau.<br/>"+"Toute clarté leur jette, innocente ou hardie,<br/>"+"Un désespoir amer ;<br/>"+"En effet, l'étincelle est tout un incendie,<br/>"+"<b>La source est une mer</b> !<br/>"+"Aussi lorsqu'ils ont vu nos astres sur leur route<br/>"+"Avoir mille rayons,<br/>"+"Ils ont appesanti l'épais brouillard du doute<br/>"+"Sur ce que nous croyons.<br/>"+"Lorsque nous leur disions nos chants, des chants sublimes<br/>"+"Qu'ils ne comprenaient pas,<br/>"+"Ils les examinaient, ces éplucheurs de rimes,<br/>"+"Avec leur froid compas !", id: "id_117", check: 0},
			{cat:"no-met", str: "Du haut de vos balcons, sur les divans des cieux,<br/>"+"Le bras traînant au bord des pompeuses nuées,<br/>"+"Vous regardez,<br/>"+"Sultan d'Asie aux cheveux bleus,<br/>"+"La sombre armée humaine, avide et dénuée.<br/>"+"Vous savez que <b>l'homme est l'esclave</b> révolté,<br/>"+"Celui dont le désir a dépassé vos règles,<br/>"+"Et dont l'esprit, plus haut que la sérénité,<br/>"+"A le frémissement des prunelles de l'aigle.", id: "id_118", check: 0},
			{cat:"no-met", str: "De somptueuses fleurs, toujours fleuries ;<br/>"+"Des paysages qui toujours se renouvellent,<br/>"+"Des couchers de soleil miraculeux, des villes<br/>"+"Pleines de palais blancs, de ponts, de campaniles<br/>"+"Et de lumières scintillantes... Des visages<br/>"+"Très beaux, très gais ; des danses<br/>"+"Comme dans ces ballets auxquels je pense,<br/>"+"Interprétés par Jean Borlin. Je veux des plages<br/>"+"Au décor de féerie,<br/>"+"Avec des étrangers sportifs aux <b>noms de princes</b>,<br/>"+"Des étrangères en souliers de pierreries<br/>"+"Et de splendides chiens neigeux aux jambes minces.", id: "id_119", check: 0},
			{cat:"met", str: "Et moi vive, debout,<br/>"+"Dure, et de mon néant secrètement armée,<br/>"+"Mais, comme par l'amour une joue enflammée,<br/>"+"Et la narine jointe au vent de l'oranger,<br/>"+"Je ne rends plus au jour qu'un regard étranger...<br/>"+"Oh ! combien peut grandir dans ma nuit curieuse<br/>"+"De mon cœur séparé la part mystérieuse,<br/>"+"Et de <b>sombres essais</b> s'approfondir mon art !...<br/>"+"Loin des purs environs, je suis captive, et par<br/>"+"L'évanouissement d'arômes abattue,<br/>"+"Je sens sous les rayons, frissonner ma statue,<br/>"+"Des caprices de l'or, son marbre parcouru.<br/>"+"Mais je sais ce que voit mon regard disparu ;<br/>"+"Mon œil noir est le seuil d'infernales demeures !", id: "id_120", check: 0}]
	} ; 

	var check_obj = {
		list_1: {
			id_7: 	{opt_str: ["Cet extrait parle de l'importance du calme", "Cet extrait parle de jardinage", "Cet extrait concerne un souhait", "Cet extrait évoque le bruit"],
					opt_val: [1, 0, 1, 0]},			
			id_11: {opt_str: ["Cet extrait décrit une personne", "Cet extrait décrit un paysage", "Cet extrait décrit une personne qui semble bien aimer boire", "Cet extrait décrit la mort"],
					opt_val: [1, 0, 1, 0]},
			id_23: {opt_str: ["Cet extrait parle d'une révolte", "Cet extrait évoque une scène de fête", "Cet extrait parle de la saison des récoltes", "Cet extrait évoque une scène de deuil"],
					opt_val: [0, 1, 1, 0]}

		},
		list_2: {
			id_30: 	{opt_str: ["Cet extrait déclare que des invités sont arrivés", "Cet extrait évoque des invités qui sont en retard", "Cet extrait parle d'invités bruyants", "Cet extrait parle d'invités silencieux"],
					opt_val: [1, 0, 0, 1]},
			id_35: {opt_str: ["Cet extrait décrit quelque chose d'attrayant","Cet extrait décrit un personnage effroyable", "Cet extrait décrit un personnage inoffensif", "Cet extrait décrit quelque chose de dégoutant"],
					opt_val: [0, 1, 0, 1]},
			id_43: {opt_str: ["Cet extrait parle d'une personne qui se prépare pour sortir","Cet extrait parle de la perte d'expérience", "Cet extrait décrit un matin après une soirée", "Cet extrait parle de ce qu'on gagne en expérience"],
					opt_val: [0, 0, 1, 1]}
		},
		list_3: {
			id_53: 	{opt_str: ["Cet extrait décrit un grand oiseau", "Cet extrait décrit un petit oiseau", "Cet extrait parle d'un être énigmatique", "Cet extrait parle d'un être connu de tous"],
					opt_val: [1, 0, 1, 0]},
			id_60: {opt_str: ["Cet extrait parle de l'assassinat d'un roi", "Cet extrait parle d'un roi aimé", "Cet extrait parle d'un roi qui voulait imposer sa vision aux autres", "Cet extrait parle de la gloire d'un roi"],
					opt_val: [1, 0, 1, 0]},
			id_66: {opt_str: ["Cet extrait parle de l'importance d'avoir des amis", "Cet extrait parle de l'importance de ne pas avoir d'ennemis", "Cet extrait parle de l'importance d'avoir de bons ennemis", "Cet extrait décrit les liens de famille"],
					opt_val: [0, 0, 1, 0]}
		},
		list_4: {
			id_77: 	{opt_str: ["Cet extrait évoque un jour comme les autres", "Cet extrait évoque un jour particulier", "Cet extrait décrit le physique humain", "Cet extrait parle de nature"],
					opt_val: [0, 1, 0, 0]},
			id_90: {opt_str: ["Cet extrait évoque de nombreuses naissances", "Cet extrait évoque une extinction massive", "Cet extrait s'adresse à un subalterne", "Cet extrait s'adresse à une foule"],
					opt_val: [0, 1, 0, 0]},
			id_93: {opt_str: ["Cet extrait décrit une nature florissante", "Cet extrait décrit une nature en déclin", "Cet extrait évoque l'alcoolisme", "Cet extrait évoque le renouvellement"],
					opt_val: [1, 0, 0, 1]}
		},
		list_5: {
			id_101: {opt_str: ["Cet extrait décrit un paysage de bord de mer", "Cet extrait rapproche un paysage à un visage", "Cet extrait rapproche un corps à une fleur", "Cet extrait décrit une vieille femme"],
					opt_val: [0, 1, 0, 0]},
			id_110: {opt_str: ["Cet extrait décrit un paysage florissant", "Cet extrait décrit des morts", "Cet extrait décrit la guerre", "Cet extrait décrit un paysage fanant"],
					opt_val: [0, 0, 0, 1]},
			id_116: {opt_str: ["Cet extrait décrit une sensation de honte", "Cet extrait décrit une sensation de fierté", "Cet extrait parle d'inspiration musicale", "Cet extrait parle de chant déplaisant"],
					opt_val: [0, 1, 1, 0]}
		}
	};


	// random draw of the list
	var irand = Math.floor(Math.random() * 5) + 1;
	var list = 'list_' + irand;
	
	console.log("liste = " + irand);
	
	// prepare the random stim
	var stim_obj = all_stim[list];
	stim_obj = jsPsych.randomization.repeat(stim_obj, 1, 0);
	var check_obj = check_obj[list];

	// keep the check point stim
	var check_stim = stim_obj.filter(function(x){return x.check===1});
	stim_obj = stim_obj.filter(function(x){return x.check===0});
	// Randomize
	stim_obj = jsPsych.randomization.repeat(stim_obj, 1, 0);	
	check_stim = jsPsych.randomization.repeat(check_stim, 1, 0);

	// insert check 
	function range(a, b){
		var arr = [];		
		for (var i=a; i<b+1; i++){
			arr.push(i);
		}
		return arr;
	}
	
	function randraw(arr){
		return arr[Math.floor(Math.random() * arr.length)]
	}
	
	var posi = [6, 12, 18];
	var delta = range(-3, 3);

	for (var i=0 ; i<posi.length ; i++){
		var ir = posi[i] + randraw(delta);
		console.log("Position check : " + ir);
		stim_obj.splice(ir, 0, check_stim[i]);
	}
	
	var rating_block = {type: 'form-rating',
					stim: stim_obj,
					rating: rating_form,
					check: check_obj,
					check_form: {
						quest: "Par rapport à la phrase que vous venez d'évaluer, cochez la ou les affirmations que vous pensez justes :",
						submit: "Valider",
						feedback: function(istrue){return (istrue)? "Résultat : C'est exact !" : "Résultat : Tout est une question de point de vue...";}
						}
					};
	var ex_block = {
		type: 'form-rating',
		stim: example,
		rating: ex_form,
		check: {},
		check_form:{}
	};
	//console.log(rating_block);
	return {full: rating_block, example: ex_block};
}

function define_art_block(){
	var allart_1 = [{name: "Laurent Abel", id: "id_1", val:0},
		{name: "Alexis Achard", id: "id_2", val:0},
		{name: "Jean Anouilh", id: "id_3", val:1},
		{name: "Aimé Auban", id: "id_4", val:0},
		{name: "Marcel Aymé", id: "id_5", val:1},
		{name: "Antoine Bandin", id: "id_6", val:0},
		{name: "Joseph Barthelme", id: "id_7", val:0},
		{name: "Eugène Barthendier", id: "id_8", val:0},
		{name: "Claire Binoche", id: "id_9", val:0},
		{name: "Yves Bonnefoy", id: "id_10", val:1},
		{name: "Pierre Boulle", id: "id_11", val:1},
		{name: "André Breton", id: "id_12", val:1},
		{name: "Charlotte Calvez", id: "id_13", val:0},
		{name: "Blaise Cendrars", id: "id_14", val:1},
		{name: "Andrée Chedid", id: "id_15", val:1},
		{name: "André Chénier", id: "id_16", val:1},
		{name: "Gilberte Chevallet", id: "id_17", val:0},
		{name: "Charles Cros", id: "id_18", val:1},
		{name: "Frédéric Dard", id: "id_19", val:1},
		{name: "Alphonse Daudet", id: "id_20", val:1},
		{name: "Théodore de Banville", id: "id_21", val:1},
		{name: "Choderlos de Laclos", id: "id_22", val:1},
		{name: "René de Obaldia", id: "id_23", val:1},
		{name: "Auguste Derbay", id: "id_24", val:0},
		{name: "Francisque Desarmeaux", id: "id_25", val:0},
		{name: "Virginie Despentes", id: "id_26", val:1},
		{name: "Paul Eluard", id: "id_27", val:1},
		{name: "Jacques Emery", id: "id_28", val:0},
		{name: "Rodolphe Eynaud", id: "id_29", val:0},
		{name: "Séraphin Ezingeard", id: "id_30", val:0}];
	
	var allart_2 = [{name: "Auguste Gabert", id: "id_31", val:0},
		{name: "Marguerite Galet", id: "id_32", val:0},
		{name: "André Gide", id: "id_33", val:1},
		{name: "Jean Giono", id: "id_34", val:1},
		{name: "Catherine Girard", id: "id_35", val:0},
		{name: "Francis Jammes", id: "id_36", val:1},
		{name: "Alfred Jarry", id: "id_37", val:1},
		{name: "Gisèle Jospa", id: "id_38", val:0},
		{name: "Joseph Kessel", id: "id_39", val:1},
		{name: "Lucie Klein", id: "id_40", val:0},
		{name: "Alice Lindermann", id: "id_41", val:0},
		{name: "Pierre Louÿs", id: "id_42", val:1},
		{name: "Amin Maalouf", id: "id_43", val:1},
		{name: "Maurice Maeterlinck", id: "id_44", val:1},
		{name: "Robert Merle", id: "id_45", val:1},
		{name: "Henri Michaux", id: "id_46", val:1},
		{name: "Jean-François Pellegrin", id: "id_47", val:0},
		{name: "Georges Perec", id: "id_48", val:1},
		{name: "Francis Ponge", id: "id_49", val:1},
		{name: "Claude Roy", id: "id_50", val:1},
		{name: "Suzanne Saunier", id: "id_51", val:0},
		{name: "Eugène Sue", id: "id_52", val:1},
		{name: "Jules Supervielle", id: "id_53", val:1},
		{name: "Samuel Taboul", id: "id_54", val:0},
		{name: "Elsa Triolet", id: "id_55", val:1},
		{name: "Boris Vian", id: "id_56", val:1},
		{name: "Fabrice Woerth", id: "id_57", val:0}];
	return [{type: 'form-author', stim: allart_1}, 
	{type: 'form-author', stim: allart_2}];

}		
/* ------------------------- General overview */
function define_form_blocks(){			// npbar_ini, npbar_tot

    var demographic = [{
            type: "list",
            id: "age",
            quest: "Quel âge avez-vous ?",
            opt_str: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105"],
            opt_id: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105"],
            required: 1
        }, 
		{
            type: "radio",
            id: "gender",
            quest: "Quel est votre genre ?",
            opt_str: ["M", "F", "autre"],
            opt_id: ["m", "f", "o"],
            required: 1
        }, 
		{
            type: "list",
            id: "diplome",
            quest: "Quel est le plus haut diplôme que vous ayez obtenu ?",
            opt_str: ["BEP", "CAP", "BEPC", "Baccalauréat", "BP", "BM", "Licence", "Master", "Doctorat", "Autre"],
            opt_id: ["bep", "cap", "bepc", "bac", "bp", "bm", "lic", "master", "doct", "other"],
            required: 1
        }, 
		{
            type: "text",
            id: "diplome_oth",
            quest: "Si autre, précisez :",
            input_nchar: 20,
            visible_if: ["diplome_other"]
        }, 
		{
            type: "list",
            id: "bac",
            quest: "Si c'est le cas, quel baccalauréat avez-vous obtenu ?",
            opt_str: ["Littéraire", "Scientifique", "Economique", "Technologique", "Autre"],
            opt_id: ["litt", "scien", "eco", "tech", "oth"],
            required: 0
        }, 
		{
            type: "text",
            id: "bac_other",
            quest: "Si autre, précisez :",
            input_nchar: 20,
            visible_if: ["bac_oth"]
        }, 
		{
            type: "text",
            id: "sector",
            quest: "Quelle est votre filière de formation ?",
            input_nchar: 20
        }, 
		{
            type: "list",
            id: "csp",
            quest: "Quelle est votre catégorie socio-professionnelle ?",
            opt_str: ["Agriculteurs exploitants", "Artisans, commerçants et chefs d'entreprise", "Cadres et professions intellectuelles supérieures", "Professions intermédiaires", "Employés", "Ouvriers", "Etudiants", "Retraités", "Sans emplois", "Autre"],
            opt_id: ["agri", "arti", "commerc", "cadre", "interm", "employe", "etud", "retrait", "sans", "autre"],
            required: 1
        }, 
		{
            type: "radio",
            id: "lang_nat",
            quest: "Votre langue maternelle : ",
            opt_str: ["français", "autre"],
            opt_id: ["fr", "ot"],
            required: 1
        }, 
		{
            type: "text",
            id: "lang_natoth",
            quest: "Si autre, précisez :",
            input_nchar: 20,
            visible_if: ["lang_nat_ot"]
        }
    ];

    var reading = [
		{
            type: "list",
            id: "freq_read",
            quest: "Je lis pour le plaisir :",
            opt_str: ["Presque jamais", " Quelques fois par an", "Quelques fois par mois", "Au moins une fois par semaine", "Une ou plusieurs fois par jour"],
            opt_id: ["1", "2", "3", "4", "5"],
            required: 1
        }, 
		{
            type: "list",
            id: "freq_book",
            quest: "A quelle fréquence lisez-vous des livres ?",
            opt_str: ["Jamais", "Entre 1 et 10 par an", "Entre 11 et 30 par an", "Entre 30 et 50 par an", "Plus de 50 par an"],
            opt_id: ["1", "2", "3", "4", "5"],
            required: 1
        }, 
		{
            type: "list",
            id: "freq_poet",
            quest: "A quelle fréquence lisez-vous de la poésie ?",
            opt_str: ["Jamais", "Entre 1 et 10 par an", "Entre 11 et 30 par an", "Entre 30 et 50 par an", "Plus de 50 par an"],
            opt_id: ["1", "2", "3", "4", "5"],
            required: 1
        }, 
		{
            type: "checkbox",
            id: "media_book",
            quest: "Sur quel(s) support(s) lisez-vous des livres ?",
            opt_str: ["Support papier", "Sur tablette/liseuse", "Audio", "Ecran d'ordinateur", "Je ne lis pas de livre"],
            opt_id: ["paper_a", "tablet_b", "audio_c", "pc_d", "no_e"],
            required: 1
        }, 
		{
            type: "checkbox",
            id: "media_poet",
            quest: "Sur quel(s) support(s) lisez-vous des poésies ?",
            opt_str: ["Support papier", "Sur tablette/liseuse", "Audio", "Ecran d'ordinateur", "Je ne lis pas de poésie"],
            opt_id: ["paper_a", "tablet_b", "audio_c", "pc_d", "no_e"],
            required: 1
        }, 
		{
            type: "checkbox",
            id: "get",
            quest: "Quelles sont vos habitudes pour vous procurer des livres (plusieurs réponses possibles) ?",
            opt_str: ["En librairie", "Via les sites marchants sur internet", "A la bibliothèque", "Par prêt", "Les boîtes à livres", "Les offres de livres gratuits disponibles", "Des versions pirates", "Cadeaux", "Je n'ai pas de livres"],
            opt_id: ["store_a", "web_b", "biblio_c", "pret_d", "box_e", "free_f", "pirate_g", "gift_h", "no_i"],
            required: 1
        }, 
		{
            type: "checkbox",
            id: "typlit",
            quest: "Quels sont les genres littéraires que vous lisez habituellement ?",
            opt_str: ["Poésie", "Romans historiques", "Romances", "Récits de voyage", "Classiques", "Littérature contemporaine", "Littérature étrangère", "Biographies", "Policiers, thrillers", "Science-fiction, fantasy", "Horreur", "Nouvelles", "Contes", "Témoignages", "Bien-être", "Essais", "Théatre", "Bandes dessinées"],
            opt_id: ["poesie_a", "histo_b", "romanc_c", "voyage_d", "classic_e", "lit_contemp_f", "lit_etrang_g", "biogr_h", "polic_i", "sc-fi_j", "horr_k", "nouv_l", "cont_m", "temoi_n", "bien_o", "essai_p", "theat_q", "bd_r"],
            required: 1
        }
    ];
	var exp_problem = [
		{
		type: "checkbox",
		id: "already",		
		quest: "Vous rappelez-vous avoir participé à une (ou plusieurs) expérience(s) similaire(s) l’année dernière (cochez la ou les possibilités) ?",
		opt_str: ["aucune ", "la même, avec des extraits de poèmes", "une similaire mais avec des phrases isolées, sans contexte"],
		opt_id : ["no", "ctx", "no_ctx"],
		required: 1
		},
		{
		type: "radio",
		id: "exp_prob",
		quest: "Avez-vous rencontré un problème pendant cette expérience ?",
		opt_str : ["oui", "non"],
		opt_id : ["yes", "no"]
		},
		{
		type: "text",
		id: "exp_prob_which",
		quest: "Lequel ?",
		input_nchar: 50,
		visible_if : ["exp_prob_yes"]
		}
	];

	/* ================= Big form object */	
	//var iniarr = [];
	var hf_form = [
		{
			preamble: "Quelques questions pour finir :",
			elements: demographic	
		},	
		{
			preamble: 'Au sujet de vos habitudes de lecture : <p class="small">' +
					'Sélectionner la réponse qui vous correspond le mieux.</p>',
			elements: reading
		},
		{
			preamble: "Et enfin :",
			elements: exp_problem
		}
	];
		
	/*** Define ALL FORM BLOCKS*/

	var Npages = hf_form.length;
	var form_blocks = new Array(Npages);
	for (var i = 0; i < Npages ; i++) {
		
		form_blocks[i] = {
			type: "form",
			preamble: hf_form[i].preamble,
			progbar: false, //pbar,
			form_struct: hf_form[i].elements,
			submit: "Suivant"
		};
	}	
	form_blocks[Npages-1]["submit"] = "Validation finale !";
	return form_blocks;
};
