ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32737").setExtent([254618.952167, 9856128.877114, 259978.309895, 9860500.621240]);
var wms_layers = [];


        var lyr_Positronnolabelsretina_0 = new ol.layer.Tile({
            'title': 'Positron [no labels] (retina)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_2 = new ol.layer.Tile({
            'title': 'Google Labels',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Positronretina_3 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });

        var lyr_OSMStandard_4 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NairobiKiambuMachakosKajiadoBoundaries_5 = new ol.format.GeoJSON();
var features_NairobiKiambuMachakosKajiadoBoundaries_5 = format_NairobiKiambuMachakosKajiadoBoundaries_5.readFeatures(json_NairobiKiambuMachakosKajiadoBoundaries_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_NairobiKiambuMachakosKajiadoBoundaries_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NairobiKiambuMachakosKajiadoBoundaries_5.addFeatures(features_NairobiKiambuMachakosKajiadoBoundaries_5);
var lyr_NairobiKiambuMachakosKajiadoBoundaries_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NairobiKiambuMachakosKajiadoBoundaries_5, 
                style: style_NairobiKiambuMachakosKajiadoBoundaries_5,
                interactive: true,
                title: '<img src="styles/legend/NairobiKiambuMachakosKajiadoBoundaries_5.png" /> Nairobi, Kiambu, Machakos, Kajiado Boundaries'
            });
var format_Rails_6 = new ol.format.GeoJSON();
var features_Rails_6 = format_Rails_6.readFeatures(json_Rails_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_Rails_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rails_6.addFeatures(features_Rails_6);
var lyr_Rails_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rails_6, 
                style: style_Rails_6,
                interactive: true,
                title: '<img src="styles/legend/Rails_6.png" /> Rails'
            });
var format_Proposed_Network_7 = new ol.format.GeoJSON();
var features_Proposed_Network_7 = format_Proposed_Network_7.readFeatures(json_Proposed_Network_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_Proposed_Network_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proposed_Network_7.addFeatures(features_Proposed_Network_7);
var lyr_Proposed_Network_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Proposed_Network_7, 
                style: style_Proposed_Network_7,
                interactive: true,
                title: '<img src="styles/legend/Proposed_Network_7.png" /> Proposed_Network'
            });
var format_CycleParkingFacilities_8 = new ol.format.GeoJSON();
var features_CycleParkingFacilities_8 = format_CycleParkingFacilities_8.readFeatures(json_CycleParkingFacilities_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_CycleParkingFacilities_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CycleParkingFacilities_8.addFeatures(features_CycleParkingFacilities_8);
var lyr_CycleParkingFacilities_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CycleParkingFacilities_8, 
                style: style_CycleParkingFacilities_8,
                interactive: true,
                title: '<img src="styles/legend/CycleParkingFacilities_8.png" /> Cycle Parking Facilities'
            });
var format_NMTBridges_9 = new ol.format.GeoJSON();
var features_NMTBridges_9 = format_NMTBridges_9.readFeatures(json_NMTBridges_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_NMTBridges_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMTBridges_9.addFeatures(features_NMTBridges_9);cluster_NMTBridges_9 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_NMTBridges_9
});
var lyr_NMTBridges_9 = new ol.layer.Vector({
                declutter: true,
                source:cluster_NMTBridges_9, 
                style: style_NMTBridges_9,
                interactive: true,
                title: '<img src="styles/legend/NMTBridges_9.png" /> NMT Bridges'
            });

lyr_Positronnolabelsretina_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleLabels_2.setVisible(true);lyr_Positronretina_3.setVisible(true);lyr_OSMStandard_4.setVisible(true);lyr_NairobiKiambuMachakosKajiadoBoundaries_5.setVisible(true);lyr_Rails_6.setVisible(true);lyr_Proposed_Network_7.setVisible(true);lyr_CycleParkingFacilities_8.setVisible(true);lyr_NMTBridges_9.setVisible(true);
var layersList = [lyr_Positronnolabelsretina_0,lyr_GoogleSatellite_1,lyr_GoogleLabels_2,lyr_Positronretina_3,lyr_OSMStandard_4,lyr_NairobiKiambuMachakosKajiadoBoundaries_5,lyr_Rails_6,lyr_Proposed_Network_7,lyr_CycleParkingFacilities_8,lyr_NMTBridges_9];
lyr_NairobiKiambuMachakosKajiadoBoundaries_5.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', });
lyr_Rails_6.set('fieldAliases', {'osm_id': 'osm_id', 'surface': 'surface', 'waterway': 'waterway', 'barrier': 'barrier', 'highway': 'highway', 'nameen': 'nameen', 'amenity': 'amenity', 'tunnel': 'tunnel', 'pump': 'pump', 'namefr': 'namefr', 'public_tra': 'public_tra', 'water': 'water', 'man_made': 'man_made', 'natural': 'natural', 'smoothness': 'smoothness', 'depth': 'depth', 'layer': 'layer', 'railway': 'railway', 'width': 'width', 'landuse': 'landuse', 'oneway': 'oneway', 'building': 'building', 'blockage': 'blockage', 'covered': 'covered', 'parking': 'parking', 'bridge': 'bridge', 'name': 'name', 'capacity': 'capacity', 'namesw': 'namesw', 'operator': 'operator', 'aeroway': 'aeroway', 'diameter': 'diameter', });
lyr_Proposed_Network_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', });
lyr_CycleParkingFacilities_8.set('fieldAliases', {'id': 'id', });
lyr_NMTBridges_9.set('fieldAliases', {'id': 'id', });
lyr_NairobiKiambuMachakosKajiadoBoundaries_5.set('fieldImages', {'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', });
lyr_Rails_6.set('fieldImages', {'osm_id': 'TextEdit', 'surface': 'TextEdit', 'waterway': 'TextEdit', 'barrier': 'TextEdit', 'highway': 'TextEdit', 'nameen': 'TextEdit', 'amenity': 'TextEdit', 'tunnel': 'TextEdit', 'pump': 'TextEdit', 'namefr': 'TextEdit', 'public_tra': 'TextEdit', 'water': 'TextEdit', 'man_made': 'TextEdit', 'natural': 'TextEdit', 'smoothness': 'TextEdit', 'depth': 'TextEdit', 'layer': 'TextEdit', 'railway': 'TextEdit', 'width': 'TextEdit', 'landuse': 'TextEdit', 'oneway': 'TextEdit', 'building': 'TextEdit', 'blockage': 'TextEdit', 'covered': 'TextEdit', 'parking': 'TextEdit', 'bridge': 'TextEdit', 'name': 'TextEdit', 'capacity': 'TextEdit', 'namesw': 'TextEdit', 'operator': 'TextEdit', 'aeroway': 'TextEdit', 'diameter': 'TextEdit', });
lyr_Proposed_Network_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', });
lyr_CycleParkingFacilities_8.set('fieldImages', {'id': 'TextEdit', });
lyr_NMTBridges_9.set('fieldImages', {'id': 'TextEdit', });
lyr_NairobiKiambuMachakosKajiadoBoundaries_5.set('fieldLabels', {'GID_0': 'inline label', 'NAME_0': 'inline label', 'GID_1': 'inline label', 'NAME_1': 'inline label', 'VARNAME_1': 'inline label', 'NL_NAME_1': 'inline label', 'TYPE_1': 'inline label', 'ENGTYPE_1': 'inline label', 'CC_1': 'inline label', 'HASC_1': 'inline label', });
lyr_Rails_6.set('fieldLabels', {'osm_id': 'inline label', 'surface': 'inline label', 'waterway': 'inline label', 'barrier': 'inline label', 'highway': 'inline label', 'nameen': 'inline label', 'amenity': 'inline label', 'tunnel': 'inline label', 'pump': 'inline label', 'namefr': 'inline label', 'public_tra': 'inline label', 'water': 'inline label', 'man_made': 'inline label', 'natural': 'inline label', 'smoothness': 'inline label', 'depth': 'inline label', 'layer': 'inline label', 'railway': 'inline label', 'width': 'inline label', 'landuse': 'inline label', 'oneway': 'inline label', 'building': 'inline label', 'blockage': 'inline label', 'covered': 'inline label', 'parking': 'inline label', 'bridge': 'inline label', 'name': 'inline label', 'capacity': 'inline label', 'namesw': 'inline label', 'operator': 'inline label', 'aeroway': 'inline label', 'diameter': 'inline label', });
lyr_Proposed_Network_7.set('fieldLabels', {'full_id': 'header label', 'osm_id': 'inline label', 'osm_type': 'inline label', 'highway': 'inline label', 'name': 'inline label', });
lyr_CycleParkingFacilities_8.set('fieldLabels', {'id': 'inline label', });
lyr_NMTBridges_9.set('fieldLabels', {'id': 'inline label', });
lyr_NMTBridges_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});