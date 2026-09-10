ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32736").setExtent([576681.000000, 8456706.658616, 586724.604395, 8462806.000000]);
var wms_layers = [];

var format_BOUNDARY_0 = new ol.format.GeoJSON();
var features_BOUNDARY_0 = format_BOUNDARY_0.readFeatures(json_BOUNDARY_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_BOUNDARY_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUNDARY_0.addFeatures(features_BOUNDARY_0);
var lyr_BOUNDARY_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOUNDARY_0, 
                style: style_BOUNDARY_0,
                popuplayertitle: 'BOUNDARY',
                interactive: false,
                title: '<img src="styles/legend/BOUNDARY_0.png" /> BOUNDARY'
            });
var format_PROJECTS_1 = new ol.format.GeoJSON();
var features_PROJECTS_1 = format_PROJECTS_1.readFeatures(json_PROJECTS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_PROJECTS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROJECTS_1.addFeatures(features_PROJECTS_1);
var lyr_PROJECTS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROJECTS_1, 
                style: style_PROJECTS_1,
                popuplayertitle: 'PROJECTS',
                interactive: true,
    title: 'PROJECTS<br />\
    <img src="styles/legend/PROJECTS_1_0.png" /> Completed<br />\
    <img src="styles/legend/PROJECTS_1_1.png" /> Ongoing<br />\
    <img src="styles/legend/PROJECTS_1_2.png" /> Proposed<br />' });
var format_Roadreserve_2 = new ol.format.GeoJSON();
var features_Roadreserve_2 = format_Roadreserve_2.readFeatures(json_Roadreserve_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Roadreserve_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadreserve_2.addFeatures(features_Roadreserve_2);
var lyr_Roadreserve_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roadreserve_2, 
                style: style_Roadreserve_2,
                popuplayertitle: 'Road reserve',
                interactive: false,
                title: '<img src="styles/legend/Roadreserve_2.png" /> Road reserve'
            });

lyr_BOUNDARY_0.setVisible(true);lyr_PROJECTS_1.setVisible(true);lyr_Roadreserve_2.setVisible(true);
var layersList = [lyr_BOUNDARY_0,lyr_PROJECTS_1,lyr_Roadreserve_2];
lyr_BOUNDARY_0.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', });
lyr_PROJECTS_1.set('fieldAliases', {'NAME': 'NAME', 'X': 'X', 'Y': 'Y', 'LOCATION': 'LOCATION', 'PROJECT': 'PROJECT', 'STATUS': 'STATUS', });
lyr_Roadreserve_2.set('fieldAliases', {'id': 'id', });
lyr_BOUNDARY_0.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', });
lyr_PROJECTS_1.set('fieldImages', {'NAME': 'TextEdit', 'X': 'Range', 'Y': 'TextEdit', 'LOCATION': 'TextEdit', 'PROJECT': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_Roadreserve_2.set('fieldImages', {'id': 'TextEdit', });
lyr_BOUNDARY_0.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', });
lyr_PROJECTS_1.set('fieldLabels', {'NAME': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', 'LOCATION': 'inline label - visible with data', 'PROJECT': 'header label - always visible', 'STATUS': 'inline label - always visible', });
lyr_Roadreserve_2.set('fieldLabels', {'id': 'no label', });
lyr_Roadreserve_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});