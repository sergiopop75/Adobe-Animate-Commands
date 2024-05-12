//
// Toggle Outline version 1.0
// copyright © 2006 David Wolfe dave@ironwagon.com
//
var tl = fl.getDocumentDOM().getTimeline();
var selFrames = tl.getSelectedFrames();
for (n=0; n<selFrames.length; n+=3)
{
	layerNum=selFrames[n];
	if(tl.layers[layerNum].outline == true)
	{
		tl.layers[layerNum].outline = false;
	}
	else
	{
		tl.layers[layerNum].outline = true;
	}
}
