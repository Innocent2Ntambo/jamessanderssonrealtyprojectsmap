ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32736").setExtent([576681.000000, 8456714.563325, 586725.000000, 8496038.810000]);
var wms_layers = [];

var format_COORDINATESAREA51_0 = new ol.format.GeoJSON();
var features_COORDINATESAREA51_0 = format_COORDINATESAREA51_0.readFeatures(json_COORDINATESAREA51_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_COORDINATESAREA51_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COORDINATESAREA51_0.addFeatures(features_COORDINATESAREA51_0);
var lyr_COORDINATESAREA51_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COORDINATESAREA51_0, 
                style: style_COORDINATESAREA51_0,
                popuplayertitle: 'COORDINATES AREA 51',
                interactive: false,
                title: '<img src="styles/legend/COORDINATESAREA51_0.png" /> COORDINATES AREA 51'
            });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_MPONELAFILLINGSTATIONPROJECT_2 = new ol.format.GeoJSON();
var features_MPONELAFILLINGSTATIONPROJECT_2 = format_MPONELAFILLINGSTATIONPROJECT_2.readFeatures(json_MPONELAFILLINGSTATIONPROJECT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_MPONELAFILLINGSTATIONPROJECT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MPONELAFILLINGSTATIONPROJECT_2.addFeatures(features_MPONELAFILLINGSTATIONPROJECT_2);
var lyr_MPONELAFILLINGSTATIONPROJECT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MPONELAFILLINGSTATIONPROJECT_2, 
                style: style_MPONELAFILLINGSTATIONPROJECT_2,
                popuplayertitle: 'MPONELA FILLING STATION PROJECT',
                interactive: false,
                title: '<img src="styles/legend/MPONELAFILLINGSTATIONPROJECT_2.png" /> MPONELA FILLING STATION PROJECT'
            });
var format_BOUNDARY_3 = new ol.format.GeoJSON();
var features_BOUNDARY_3 = format_BOUNDARY_3.readFeatures(json_BOUNDARY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_BOUNDARY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUNDARY_3.addFeatures(features_BOUNDARY_3);
var lyr_BOUNDARY_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOUNDARY_3, 
                style: style_BOUNDARY_3,
                popuplayertitle: 'BOUNDARY',
                interactive: false,
                title: '<img src="styles/legend/BOUNDARY_3.png" /> BOUNDARY'
            });
var format_PROJECTS_4 = new ol.format.GeoJSON();
var features_PROJECTS_4 = format_PROJECTS_4.readFeatures(json_PROJECTS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_PROJECTS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROJECTS_4.addFeatures(features_PROJECTS_4);
var lyr_PROJECTS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROJECTS_4, 
                style: style_PROJECTS_4,
                popuplayertitle: 'PROJECTS',
                interactive: true,
    title: 'PROJECTS<br />\
    <img src="styles/legend/PROJECTS_4_0.png" /> Completed<br />\
    <img src="styles/legend/PROJECTS_4_1.png" /> Ongoing<br />\
    <img src="styles/legend/PROJECTS_4_2.png" /> Proposed<br />' });
var format_PROJECTS2_5 = new ol.format.GeoJSON();
var features_PROJECTS2_5 = format_PROJECTS2_5.readFeatures(json_PROJECTS2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_PROJECTS2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROJECTS2_5.addFeatures(features_PROJECTS2_5);
var lyr_PROJECTS2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROJECTS2_5, 
                style: style_PROJECTS2_5,
                popuplayertitle: 'PROJECTS2',
                interactive: true,
    title: 'PROJECTS2<br />\
    <img src="styles/legend/PROJECTS2_5_0.png" /> ONGOING<br />' });
var format_Roadreserve_6 = new ol.format.GeoJSON();
var features_Roadreserve_6 = format_Roadreserve_6.readFeatures(json_Roadreserve_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Roadreserve_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadreserve_6.addFeatures(features_Roadreserve_6);
var lyr_Roadreserve_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roadreserve_6, 
                style: style_Roadreserve_6,
                popuplayertitle: 'Road reserve',
                interactive: false,
                title: '<img src="styles/legend/Roadreserve_6.png" /> Road reserve'
            });
var format_AREA43SITE2_7 = new ol.format.GeoJSON();
var features_AREA43SITE2_7 = format_AREA43SITE2_7.readFeatures(json_AREA43SITE2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_AREA43SITE2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA43SITE2_7.addFeatures(features_AREA43SITE2_7);
var lyr_AREA43SITE2_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA43SITE2_7, 
                style: style_AREA43SITE2_7,
                popuplayertitle: 'AREA 43 SITE 2',
                interactive: false,
                title: '<img src="styles/legend/AREA43SITE2_7.png" /> AREA 43 SITE 2'
            });
var format_AREA43SECTOR3SITE1_8 = new ol.format.GeoJSON();
var features_AREA43SECTOR3SITE1_8 = format_AREA43SECTOR3SITE1_8.readFeatures(json_AREA43SECTOR3SITE1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_AREA43SECTOR3SITE1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA43SECTOR3SITE1_8.addFeatures(features_AREA43SECTOR3SITE1_8);
var lyr_AREA43SECTOR3SITE1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA43SECTOR3SITE1_8, 
                style: style_AREA43SECTOR3SITE1_8,
                popuplayertitle: 'AREA 43 SECTOR 3 SITE 1',
                interactive: false,
                title: '<img src="styles/legend/AREA43SECTOR3SITE1_8.png" /> AREA 43 SECTOR 3 SITE 1'
            });
var format_BOUNDARY_9 = new ol.format.GeoJSON();
var features_BOUNDARY_9 = format_BOUNDARY_9.readFeatures(json_BOUNDARY_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_BOUNDARY_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUNDARY_9.addFeatures(features_BOUNDARY_9);
var lyr_BOUNDARY_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOUNDARY_9, 
                style: style_BOUNDARY_9,
                popuplayertitle: 'BOUNDARY',
                interactive: false,
                title: '<img src="styles/legend/BOUNDARY_9.png" /> BOUNDARY'
            });
var format_AREA49GULLIVEER_10 = new ol.format.GeoJSON();
var features_AREA49GULLIVEER_10 = format_AREA49GULLIVEER_10.readFeatures(json_AREA49GULLIVEER_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_AREA49GULLIVEER_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA49GULLIVEER_10.addFeatures(features_AREA49GULLIVEER_10);
var lyr_AREA49GULLIVEER_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA49GULLIVEER_10, 
                style: style_AREA49GULLIVEER_10,
                popuplayertitle: 'AREA 49 GULLIVEER',
                interactive: false,
                title: '<img src="styles/legend/AREA49GULLIVEER_10.png" /> AREA 49 GULLIVEER'
            });

lyr_COORDINATESAREA51_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_MPONELAFILLINGSTATIONPROJECT_2.setVisible(true);lyr_BOUNDARY_3.setVisible(true);lyr_PROJECTS_4.setVisible(true);lyr_PROJECTS2_5.setVisible(true);lyr_Roadreserve_6.setVisible(true);lyr_AREA43SITE2_7.setVisible(true);lyr_AREA43SECTOR3SITE1_8.setVisible(true);lyr_BOUNDARY_9.setVisible(true);lyr_AREA49GULLIVEER_10.setVisible(true);
var layersList = [lyr_COORDINATESAREA51_0,lyr_GoogleSatelliteHybrid_1,lyr_MPONELAFILLINGSTATIONPROJECT_2,lyr_BOUNDARY_3,lyr_PROJECTS_4,lyr_PROJECTS2_5,lyr_Roadreserve_6,lyr_AREA43SITE2_7,lyr_AREA43SECTOR3SITE1_8,lyr_BOUNDARY_9,lyr_AREA49GULLIVEER_10];
lyr_COORDINATESAREA51_0.set('fieldAliases', {'ID': 'ID', 'X': 'X', 'Y': 'Y', 'DESCRIPTION': 'DESCRIPTION', });
lyr_MPONELAFILLINGSTATIONPROJECT_2.set('fieldAliases', {'ID': 'ID', 'X': 'X', 'Y': 'Y', 'DESCRIPTION': 'DESCRIPTION', });
lyr_BOUNDARY_3.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', });
lyr_PROJECTS_4.set('fieldAliases', {'NAME': 'NAME', 'X': 'X', 'Y': 'Y', 'LOCATION': 'LOCATION', 'PROJECT': 'PROJECT', 'STATUS': 'STATUS', });
lyr_PROJECTS2_5.set('fieldAliases', {'NAME': 'NAME', 'X': 'X', 'Y': 'Y', 'PROJECT': 'PROJECT', 'LOCATION': 'LOCATION', 'STATUS': 'STATUS', });
lyr_Roadreserve_6.set('fieldAliases', {'id': 'id', });
lyr_AREA43SITE2_7.set('fieldAliases', {'ID': 'ID', 'X': 'X', 'Y': 'Y', 'DESCRIPTION': 'DESCRIPTION', });
lyr_AREA43SECTOR3SITE1_8.set('fieldAliases', {'ID': 'ID', 'X': 'X', 'Y': 'Y', 'DESCRIPTION': 'DESCRIPTION', });
lyr_BOUNDARY_9.set('fieldAliases', {'POINT': 'POINT', 'X': 'X', 'Y': 'Y', 'DESCRIPTION': 'DESCRIPTION', });
lyr_AREA49GULLIVEER_10.set('fieldAliases', {'POINT': 'POINT', 'X': 'X', 'Y': 'Y', 'DESCRIPTION': 'DESCRIPTION', });
lyr_COORDINATESAREA51_0.set('fieldImages', {'ID': '', 'X': '', 'Y': '', 'DESCRIPTION': '', });
lyr_MPONELAFILLINGSTATIONPROJECT_2.set('fieldImages', {'ID': '', 'X': '', 'Y': '', 'DESCRIPTION': '', });
lyr_BOUNDARY_3.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', });
lyr_PROJECTS_4.set('fieldImages', {'NAME': 'TextEdit', 'X': 'Range', 'Y': 'TextEdit', 'LOCATION': 'TextEdit', 'PROJECT': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_PROJECTS2_5.set('fieldImages', {'NAME': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'PROJECT': 'TextEdit', 'LOCATION': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_Roadreserve_6.set('fieldImages', {'id': 'TextEdit', });
lyr_AREA43SITE2_7.set('fieldImages', {'ID': '', 'X': '', 'Y': '', 'DESCRIPTION': '', });
lyr_AREA43SECTOR3SITE1_8.set('fieldImages', {'ID': '', 'X': '', 'Y': '', 'DESCRIPTION': '', });
lyr_BOUNDARY_9.set('fieldImages', {'POINT': '', 'X': '', 'Y': '', 'DESCRIPTION': '', });
lyr_AREA49GULLIVEER_10.set('fieldImages', {'POINT': '', 'X': '', 'Y': '', 'DESCRIPTION': '', });
lyr_COORDINATESAREA51_0.set('fieldLabels', {'ID': 'no label', 'X': 'no label', 'Y': 'no label', 'DESCRIPTION': 'no label', });
lyr_MPONELAFILLINGSTATIONPROJECT_2.set('fieldLabels', {'ID': 'no label', 'X': 'no label', 'Y': 'no label', 'DESCRIPTION': 'no label', });
lyr_BOUNDARY_3.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', });
lyr_PROJECTS_4.set('fieldLabels', {'NAME': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', 'LOCATION': 'inline label - visible with data', 'PROJECT': 'header label - always visible', 'STATUS': 'inline label - always visible', });
lyr_PROJECTS2_5.set('fieldLabels', {'NAME': 'no label', 'X': 'no label', 'Y': 'no label', 'PROJECT': 'no label', 'LOCATION': 'no label', 'STATUS': 'no label', });
lyr_Roadreserve_6.set('fieldLabels', {'id': 'no label', });
lyr_AREA43SITE2_7.set('fieldLabels', {'ID': 'no label', 'X': 'no label', 'Y': 'no label', 'DESCRIPTION': 'no label', });
lyr_AREA43SECTOR3SITE1_8.set('fieldLabels', {'ID': 'no label', 'X': 'no label', 'Y': 'no label', 'DESCRIPTION': 'no label', });
lyr_BOUNDARY_9.set('fieldLabels', {'POINT': 'no label', 'X': 'no label', 'Y': 'no label', 'DESCRIPTION': 'no label', });
lyr_AREA49GULLIVEER_10.set('fieldLabels', {'POINT': 'no label', 'X': 'no label', 'Y': 'no label', 'DESCRIPTION': 'no label', });
lyr_AREA49GULLIVEER_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});