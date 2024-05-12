var doc = fl.getDocumentDOM();
var tl = doc.getTimeline();
var layerCount = tl.layerCount;
var longestLength = 0;
var longestLayer = 0;

for (var l=0; l < layerCount; l++) {
	if (tl.layers[l].frames.length > longestLength) {
		longestLength = tl.layers[l].frames.length;
		longestLayer = l;
	}
}

var dif = 0;

for (var l=0; l<layerCount; l++) {
	if(tl.layers[l].frames.length < longestLength) {
		tl.currentFrame = tl.layers[l].frames.length -1;
		tl.currentLayer = l;
		dif = longestLength - tl.layers[l].frames.length;
		tl.insertFrames(dif, false);
	}
}

doc.selectNone();