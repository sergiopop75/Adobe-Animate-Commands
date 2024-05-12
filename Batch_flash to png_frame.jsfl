/**
* Export .png images from fla files in a folder.
* By Wink @ Lynn Studio Documents Network (LSDN).
* Visit www.lynnstudio.net for more information.
*/
var resURI = fl.browseForFolderURL("Select the folder where the FLA files are located");
var outURI = fl.browseForFolderURL("Select the folder where all images should be exported as *.PNG");
var resFiles = FLfile.listFolder(resURI+"/*.fla", "files");
fl.outputPanel.clear();

function convert2png(){
	for(var i = 0;i<resFiles.length;i++) {
		var doc = fl.openDocument(resURI + '/' + resFiles[i]);
		var fileName = document.name.split('.')[0];
		var fileURI = outURI + "/" + fileName + ".png";
		doc.exportPNG(fileURI, true , true);
		doc.close(false);
	}
}
convert2png();
