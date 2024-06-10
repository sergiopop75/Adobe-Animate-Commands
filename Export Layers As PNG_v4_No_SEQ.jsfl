var doc = fl.getDocumentDOM();
var lyrs = doc.getTimeline().layers;
var len = lyrs.length;
var saveDir = fl.browseForFolderURL("Choose a folder in which to save your exported PNGs:");

if (saveDir) {
    // Crear carpeta con el nombre del archivo
    var docFolderName = doc.name;
    var exportDest = saveDir + "/" + docFolderName + "_PNG";
    FLfile.createFolder(exportDest);
    
    fl.outputPanel.clear();
    
    var originalTypes = new Array(len);

    // Guardar el tipo de capa original y cambiar todas las capas a guía
    for (var i = 0; i < len; i++) {
        var lyr = lyrs[i];
        originalTypes[i] = lyr.layerType;
        lyr.layerType = "guide";
    }

    var count = 0;

    // Establecer el fotograma actual al primer fotograma
    doc.getTimeline().currentFrame = 0;

    // Iterar sobre las capas, exportando solo las capas visibles del primer fotograma
    for (var i = 0; i < len; i++) {
        var lyr = lyrs[i];

        if (originalTypes[i] == "normal" && lyr.visible) {
            lyr.layerType = "normal";

            // Padding 0s
            var padding = count < 10 ? "0" + count : count;

            // Establecer el fotograma actual al primer fotograma nuevamente para asegurar
            doc.getTimeline().currentFrame = 0;

            // Exportar solo el primer fotograma
            doc.exportPNG( exportDest + "/" + padding + "_" + lyr.name + ".png", true, true );

            fl.trace("Exported: " + lyr.name + ".png");

            lyr.layerType = "guide";
            count++;
        }
    }

    // Restaurar los tipos de capa originales
    for (var i = 0; i < len; i++) {
        lyrs[i].layerType = originalTypes[i];
    }
}
