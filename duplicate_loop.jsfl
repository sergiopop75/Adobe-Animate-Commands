/*
Desarpar Mireille Tram (tram.mireille@gmail.com)
Permet de dupliquer automatiquement un ensemble de frames s�lectionn�es
sur la timeline pour les mettre � la suite. � utiliser pour d�velopper des
cycles d'animation.
*/


var doc = fl.getDocumentDOM();
var tl = doc.getTimeline();


//obtenir le nombre de frames s�lectionn�es (dur�e du cycle d'anim)
var sel = tl.getSelectedFrames();
var cycleLength = sel[2] - sel[1] | 0;

//demande combien de fois on duplique, puis duplique
var factor = prompt("duplicate how many times ?");
cycleCopy(factor);

		
//Cr�ation de la fonction
function cycleCopy(factor) {
	
	//� refaire autant de fois que demand�
	for (var j=1;j<factor;j++) {

		//Duplique une fois calque par calque
		for (var i=0;i<sel.length;i+=3) {
	
			//s�lectionne les images du calque en cours de traitement
			tl.setSelectedFrames([sel[i],sel[1],sel[2]]);
	
			//copie les images
			tl.copyFrames();
	
			//s�lectionne les images � remplacer par la copie
			tl.setSelectedFrames([sel[i],sel[1]+(cycleLength*j),sel[2]+(cycleLength*j)]);
		
			//colle les images
			tl.pasteFrames();
		}
	}
}