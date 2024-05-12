/*
Desarpar Mireille Tram (tram.mireille@gmail.com)
Permet de dupliquer automatiquement un ensemble de frames sélectionnées
sur la timeline pour les mettre à la suite. À utiliser pour développer des
cycles d'animation.
*/


var doc = fl.getDocumentDOM();
var tl = doc.getTimeline();


//obtenir le nombre de frames sélectionnées (durée du cycle d'anim)
var sel = tl.getSelectedFrames();
var cycleLength = sel[2] - sel[1] | 0;

//demande combien de fois on duplique, puis duplique
var factor = prompt("duplicate how many times ?");
cycleCopy(factor);

		
//Création de la fonction
function cycleCopy(factor) {
	
	//à refaire autant de fois que demandé
	for (var j=1;j<factor;j++) {

		//Duplique une fois calque par calque
		for (var i=0;i<sel.length;i+=3) {
	
			//sélectionne les images du calque en cours de traitement
			tl.setSelectedFrames([sel[i],sel[1],sel[2]]);
	
			//copie les images
			tl.copyFrames();
	
			//sélectionne les images à remplacer par la copie
			tl.setSelectedFrames([sel[i],sel[1]+(cycleLength*j),sel[2]+(cycleLength*j)]);
		
			//colle les images
			tl.pasteFrames();
		}
	}
}