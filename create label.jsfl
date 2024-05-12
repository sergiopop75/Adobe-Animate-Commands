
    var fltl         = fl.getDocumentDOM().getTimeline();
    var LayerArray   = fltl.getSelectedLayers();
    var FrameArray   = fltl.getSelectedFrames();
    var countLA      = LayerArray.length;
    var countFA      = FrameArray.length;


    if(countLA == 1 && FrameArray[2]-FrameArray[1] == 1 && countFA == 3)
    {
        var curLayer      = fltl.currentLayer;
        var curFrame      = fltl.currentFrame;
        var curFrameName  = fltl.layers[curLayer].frames[curFrame].name;

        var targetFrame = prompt("label", curFrameName);
        fltl.layers[curLayer].frames[curFrame].name = (targetFrame != null)?targetFrame:"";
    }

    else if(countFA == 0)
    {
        var curLayer      = fltl.currentLayer;
        var curFrame      = fltl.currentFrame;
        var curFrameName  = fltl.layers[curLayer].frames[curFrame].name;

        var targetFrame   = prompt("label", curFrameName);
        fltl.layers[curLayer].frames[curFrame].name = (targetFrame != null)?targetFrame:"";
    }


    else
    {
        var FrameName = prompt("label", "");
        for( var i = 0; i < countFA; i++)
        {
            if(i % 3 != 0) continue;

            var FAhani = FrameArray[i + 2] - FrameArray[i + 1];
            for (var j = 0; j < FAhani; j++)
                fltl.layers[FrameArray[i]].frames[FrameArray[i+1]+j].name = (FrameName != null)?FrameName:"";
        }
    }
