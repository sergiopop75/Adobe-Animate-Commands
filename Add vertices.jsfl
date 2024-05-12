/////////////////////////////////////////////////////////////////////////
//
// Add vertices
// By David Johnston
// Last modified Wednesday, March 31, 2010
//
// Subdivides all the edges in the selected shapes, effectively
// doubling the number of vertices.
//
/////////////////////////////////////////////////////////////////////////

doc = fl.getDocumentDOM();
fl.outputPanel.clear();

/////////////////////////////////////////////////////////////////////////
// MAIN
/////////////////////////////////////////////////////////////////////////

if(doc)
{
	var sel = doc.selection;
	for(var n = 0; n < sel.length; n++)
	{
		if(sel[n].elementType == "shape" && !sel[n].isGroup)
		{
			var theEdges = [];
			for(var e = 0; e < sel[n].edges.length; e++)
			{
				var pt0 = sel[n].edges[e].getControl(0);
				var pt1 = sel[n].edges[e].getControl(1);
				var pt2 = sel[n].edges[e].getControl(2);
				theEdges.push({x0: pt0.x, y0:pt0.y, x1: pt1.x, y1: pt1.y, x2: pt2.x, y2: pt2.y});
			}
			
			// This is inefficient but I don't know another way to do it.
			// Check every edge in our saved array against every edge in the shape.
			// That's O(n^2)
			sel[n].beginEdit();
			for(var e = 0; e < theEdges.length; e++)
			{
				for(var se = 0; se < sel[n].edges.length; se++)
				{
					thisEdge = {pt0: sel[n].edges[se].getControl(0), pt1: sel[n].edges[se].getControl(1), pt2: sel[n].edges[se].getControl(2)};
					
					if(theEdges[e].x0 == thisEdge.pt0.x && theEdges[e].y0 == thisEdge.pt0.y &&
					   theEdges[e].x1 == thisEdge.pt1.x && theEdges[e].y1 == thisEdge.pt1.y &&
					   theEdges[e].x2 == thisEdge.pt2.x && theEdges[e].y2 == thisEdge.pt2.y)
					{
						sel[n].edges[se].splitEdge(0.5);
						break;
					}
				}
			}
			sel[n].endEdit();
		}
	}
}
