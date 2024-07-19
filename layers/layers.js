ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1028013.605770, 6613065.507315, 1071957.262610, 6641720.859356]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Umfragepunkte_1 = new ol.format.GeoJSON();
var features_Umfragepunkte_1 = format_Umfragepunkte_1.readFeatures(json_Umfragepunkte_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Umfragepunkte_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Umfragepunkte_1.addFeatures(features_Umfragepunkte_1);
var lyr_Umfragepunkte_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Umfragepunkte_1, 
                style: style_Umfragepunkte_1,
                popuplayertitle: "Umfragepunkte",
                interactive: false,
                title: '<img src="styles/legend/Umfragepunkte_1.png" /> Umfragepunkte'
            });
var format_Gesamtumstze_2 = new ol.format.GeoJSON();
var features_Gesamtumstze_2 = format_Gesamtumstze_2.readFeatures(json_Gesamtumstze_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gesamtumstze_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gesamtumstze_2.addFeatures(features_Gesamtumstze_2);
var lyr_Gesamtumstze_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gesamtumstze_2, 
                style: style_Gesamtumstze_2,
                popuplayertitle: "Gesamtumsätze (€)",
                interactive: true,
    title: 'Gesamtumsätze (€)<br />\
    <img src="styles/legend/Gesamtumstze_2_0.png" /> 15.521<br />\
    <img src="styles/legend/Gesamtumstze_2_1.png" /> 5.099<br />\
    <img src="styles/legend/Gesamtumstze_2_2.png" /> 3.783<br />\
    <img src="styles/legend/Gesamtumstze_2_3.png" /> 1.141<br />\
    <img src="styles/legend/Gesamtumstze_2_4.png" /> 44<br />\
    <img src="styles/legend/Gesamtumstze_2_5.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Umfragepunkte_1.setVisible(true);lyr_Gesamtumstze_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Umfragepunkte_1,lyr_Gesamtumstze_2];
lyr_Umfragepunkte_1.set('fieldAliases', {'Vertragsnu': 'Vertragsnu', 'Buchungsar': 'Buchungsar', 'Buchungs-a': 'Buchungs-a', 'Umsatz': 'Umsatz', 'Adresse': 'Adresse', 'PLZ': 'PLZ', 'Ort': 'Ort', 'Country': 'Country', 'field_9': 'field_9', 'field_10': 'field_10', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', 'Umsatz_num': 'Umsatz_num', });
lyr_Gesamtumstze_2.set('fieldAliases', {'id': 'id', 'Umsaetze_s': 'Umsaetze_s', 'id_2': 'id_2', 'Umsatz_num': 'Umsatz_num', 'Umsaetze_1': 'Umsatz (€)', 'Zone': 'Potenzielle Car-Sharing Station', });
lyr_Umfragepunkte_1.set('fieldImages', {'Vertragsnu': 'TextEdit', 'Buchungsar': 'TextEdit', 'Buchungs-a': 'TextEdit', 'Umsatz': 'TextEdit', 'Adresse': 'TextEdit', 'PLZ': 'TextEdit', 'Ort': 'TextEdit', 'Country': 'TextEdit', 'field_9': 'TextEdit', 'field_10': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', 'Umsatz_num': 'TextEdit', });
lyr_Gesamtumstze_2.set('fieldImages', {'id': 'TextEdit', 'Umsaetze_s': 'Hidden', 'id_2': 'Hidden', 'Umsatz_num': 'Hidden', 'Umsaetze_1': 'TextEdit', 'Zone': 'TextEdit', });
lyr_Umfragepunkte_1.set('fieldLabels', {'Vertragsnu': 'no label', 'Buchungsar': 'no label', 'Buchungs-a': 'no label', 'Umsatz': 'no label', 'Adresse': 'no label', 'PLZ': 'no label', 'Ort': 'no label', 'Country': 'no label', 'field_9': 'no label', 'field_10': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', 'Umsatz_num': 'no label', });
lyr_Gesamtumstze_2.set('fieldLabels', {'id': 'inline label - visible with data', 'Umsaetze_1': 'inline label - visible with data', 'Zone': 'inline label - visible with data', });
lyr_Gesamtumstze_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});