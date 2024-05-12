

var DOM=fl.getDocumentDOM();
var timeLine = DOM.getTimeline();
var calque;
var lastFrame1 = timeLine.currentFrame;
var selectedFrames = timeLine.getSelectedFrames();
var firstLayer = selectedFrames[0];
var firstFrame = selectedFrames[1];
var lastframe = selectedFrames[2];
var NbLayers = selectedFrames.length/3;
var inde;
lastframe--;

fl.outputPanel.clear();

DOM.getTimeline().convertToKeyframes();
DOM.getTimeline().setFrameProperty('tweenType', 'none');


for(i=firstFrame+1; i<lastframe; i+=2)
{

timeLine.currentFrame = i;
calque=firstLayer;

DOM.selectAll();
DOM.setElementProperty('loop', 'single frame');


for(var y=0; y<NbLayers;y++)
	{	
	timeLine.setSelectedFrames([calque, i, i+1],true);
	DOM.getTimeline().clearKeyframes();
	DOM.selectAll();
	DOM.setElementProperty('loop', 'single frame');
	calque++;
	}


}
