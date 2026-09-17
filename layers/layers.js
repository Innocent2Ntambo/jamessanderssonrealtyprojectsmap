ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32736").setExtent([576681.000000, 8456714.563325, 586724.604395, 8496038.810000]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_MPONELAFILLINGSTATIONPROJECT_1 = new ol.format.GeoJSON();
var features_MPONELAFILLINGSTATIONPROJECT_1 = format_MPONELAFILLINGSTATIONPROJECT_1.readFeatures(json_MPONELAFILLINGSTATIONPROJECT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_MPONELAFILLINGSTATIONPROJECT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MPONELAFILLINGSTATIONPROJECT_1.addFeatures(features_MPONELAFILLINGSTATIONPROJECT_1);
var lyr_MPONELAFILLINGSTATIONPROJECT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MPONELAFILLINGSTATIONPROJECT_1, 
                style: style_MPONELAFILLINGSTATIONPROJECT_1,
                popuplayertitle: 'MPONELA FILLING STATION PROJECT',
                interactive: false,
                title: '<img src="styles/legend/MPONELAFILLINGSTATIONPROJECT_1.png" /> MPONELA FILLING STATION PROJECT'
            });
var format_BOUNDARY_2 = new ol.format.GeoJSON();
var features_BOUNDARY_2 = format_BOUNDARY_2.readFeatures(json_BOUNDARY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_BOUNDARY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUNDARY_2.addFeatures(features_BOUNDARY_2);
var lyr_BOUNDARY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOUNDARY_2, 
                style: style_BOUNDARY_2,
                popuplayertitle: 'BOUNDARY',
                interactive: false,
                title: '<img src="styles/legend/BOUNDARY_2.png" /> BOUNDARY'
            });
var format_PROJECTS_3 = new ol.format.GeoJSON();
var features_PROJECTS_3 = format_PROJECTS_3.readFeatures(json_PROJECTS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_PROJECTS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROJECTS_3.addFeatures(features_PROJECTS_3);
var lyr_PROJECTS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROJECTS_3, 
                style: style_PROJECTS_3,
                popuplayertitle: 'PROJECTS',
                interactive: true,
    title: 'PROJECTS<br />\
    <img src="styles/legend/PROJECTS_3_0.png" /> Completed<br />\
    <img src="styles/legend/PROJECTS_3_1.png" /> Ongoing<br />\
    <img src="styles/legend/PROJECTS_3_2.png" /> Proposed<br />' });
var format_PROJECTS2_4 = new ol.format.GeoJSON();
var features_PROJECTS2_4 = format_PROJECTS2_4.readFeatures(json_PROJECTS2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_PROJECTS2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROJECTS2_4.addFeatures(features_PROJECTS2_4);
var lyr_PROJECTS2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROJECTS2_4, 
                style: style_PROJECTS2_4,
                popuplayertitle: 'PROJECTS2',
                interactive: true,
    title: 'PROJECTS2<br />\
    <img src="styles/legend/PROJECTS2_4_0.png" /> ONGOING<br />' });
var format_Roadreserve_5 = new ol.format.GeoJSON();
var features_Roadreserve_5 = format_Roadreserve_5.readFeatures(json_Roadreserve_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Roadreserve_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadreserve_5.addFeatures(features_Roadreserve_5);
var lyr_Roadreserve_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roadreserve_5, 
                style: style_Roadreserve_5,
                popuplayertitle: 'Road reserve',
                interactive: false,
                title: '<img src="styles/legend/Roadreserve_5.png" /> Road reserve'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_MPONELAFILLINGSTATIONPROJECT_1.setVisible(true);lyr_BOUNDARY_2.setVisible(true);lyr_PROJECTS_3.setVisible(true);lyr_PROJECTS2_4.setVisible(true);lyr_Roadreserve_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_MPONELAFILLINGSTATIONPROJECT_1,lyr_BOUNDARY_2,lyr_PROJECTS_3,lyr_PROJECTS2_4,lyr_Roadreserve_5];
lyr_MPONELAFILLINGSTATIONPROJECT_1.set('fieldAliases', {'ID': 'ID', 'X': 'X', 'Y': 'Y', 'DESCRIPTION': 'DESCRIPTION', });
lyr_BOUNDARY_2.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', });
lyr_PROJECTS_3.set('fieldAliases', {'NAME': 'NAME', 'X': 'X', 'Y': 'Y', 'LOCATION': 'LOCATION', 'PROJECT': 'PROJECT', 'STATUS': 'STATUS', });
lyr_PROJECTS2_4.set('fieldAliases', {'NAME': 'NAME', 'X': 'X', 'Y': 'Y', 'PROJECT': 'PROJECT', 'LOCATION': 'LOCATION', 'STATUS': 'STATUS', });
lyr_Roadreserve_5.set('fieldAliases', {'id': 'id', });
lyr_MPONELAFILLINGSTATIONPROJECT_1.set('fieldImages', {'ID': '', 'X': '', 'Y': '', 'DESCRIPTION': '', });
lyr_BOUNDARY_2.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', });
lyr_PROJECTS_3.set('fieldImages', {'NAME': 'TextEdit', 'X': 'Range', 'Y': 'TextEdit', 'LOCATION': 'TextEdit', 'PROJECT': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_PROJECTS2_4.set('fieldImages', {'NAME': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'PROJECT': 'TextEdit', 'LOCATION': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_Roadreserve_5.set('fieldImages', {'id': 'TextEdit', });
lyr_MPONELAFILLINGSTATIONPROJECT_1.set('fieldLabels', {'ID': 'no label', 'X': 'no label', 'Y': 'no label', 'DESCRIPTION': 'no label', });
lyr_BOUNDARY_2.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', });
lyr_PROJECTS_3.set('fieldLabels', {'NAME': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', 'LOCATION': 'inline label - visible with data', 'PROJECT': 'header label - always visible', 'STATUS': 'inline label - always visible', });
lyr_PROJECTS2_4.set('fieldLabels', {'NAME': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', 'PROJECT': 'header label - always visible', 'LOCATION': 'inline label - visible with data', 'STATUS': 'inline label - always visible', });
lyr_Roadreserve_5.set('fieldLabels', {'id': 'no label', });
lyr_Roadreserve_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});