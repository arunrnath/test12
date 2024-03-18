ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([75.366548, 7.265348, 83.096286, 11.833969]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Kerala_LS_Roads_1 = new ol.format.GeoJSON();
var features_Kerala_LS_Roads_1 = format_Kerala_LS_Roads_1.readFeatures(json_Kerala_LS_Roads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Kerala_LS_Roads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kerala_LS_Roads_1.addFeatures(features_Kerala_LS_Roads_1);
var lyr_Kerala_LS_Roads_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kerala_LS_Roads_1, 
                style: style_Kerala_LS_Roads_1,
                popuplayertitle: "Kerala_LS_Roads",
                interactive: true,
    title: 'Kerala_LS_Roads<br />\
    <img src="styles/legend/Kerala_LS_Roads_1_0.png" /> Low Hazard Zone<br />\
    <img src="styles/legend/Kerala_LS_Roads_1_1.png" /> Medium Hazard Zone<br />\
    <img src="styles/legend/Kerala_LS_Roads_1_2.png" /> High Hazard Zone<br />\
    <img src="styles/legend/Kerala_LS_Roads_1_3.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_Kerala_LS_Roads_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Kerala_LS_Roads_1];
lyr_Kerala_LS_Roads_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'ID': 'ID', 'CLIMATE_RI': 'CLIMATE_RI', 'VULNERABIL': 'VULNERABIL', 'AADT': 'AADT', 'NON_MOTORI': 'NON_MOTORI', 'AADT_YEAR': 'AADT_YEAR', 'SECTION_WI': 'SECTION_WI', 'WEATHER_PR': 'WEATHER_PR', 'LANDSLIDE_': 'LANDSLIDE_', 'SEA_EROSIO': 'SEA_EROSIO', 'SEA_E_1': 'SEA_E_1', 'FLOOD_RISK': 'FLOOD_RISK', 'LANDS_2': 'LANDS_2', 'FLOOD_3': 'FLOOD_3', 'SECTION_LA': 'SECTION_LA', 'SECTION_DE': 'SECTION_DE', 'LOCATION': 'LOCATION', 'END_DATE': 'END_DATE', 'ROAD_NAME': 'ROAD_NAME', 'ROAD_NUMBE': 'ROAD_NUMBE', 'NO_OF_PERM': 'NO_OF_PERM', 'SINGLE_OR_': 'SINGLE_OR_', 'DIRECTION': 'DIRECTION', 'ROAD_CLASS': 'ROAD_CLASS', 'SPEED_LIMI': 'SPEED_LIMI', 'ORGANISATI': 'ORGANISATI', 'SURFACE_TY': 'SURFACE_TY', 'CONSTRUCTI': 'CONSTRUCTI', 'HIERAR_1': 'HIERAR_1', 'HIERAR_2': 'HIERAR_2', 'MEASURED_S': 'MEASURED_S', 'DIGITISED_': 'DIGITISED_', 'START_CHAI': 'START_CHAI', 'END_CHAINA': 'END_CHAINA', 'START_DATE': 'START_DATE', 'HIERAR_3': 'HIERAR_3', 'HIERAR_4': 'HIERAR_4', 'HIERAR_5': 'HIERAR_5', 'REGION': 'REGION', 'DISTRICT': 'DISTRICT', 'ENVIRONMEN': 'ENVIRONMEN', 'SECTION_FU': 'SECTION_FU', 'OPERATIONA': 'OPERATIONA', 'ROAD_TYPE': 'ROAD_TYPE', 'ROAD_START': 'ROAD_START', 'ROAD_END_J': 'ROAD_END_J', 'ASSET_ID': 'ASSET_ID', 'CONSTITUEN': 'CONSTITUEN', 'ROW_WIDTH': 'ROW_WIDTH', 'TERRAIN': 'TERRAIN', 'EMAIL_SE': 'EMAIL_SE', 'EMAIL_EE': 'EMAIL_EE', 'MOBILE_EE': 'MOBILE_EE', 'EMAIL_AEE': 'EMAIL_AEE', 'MOBILE_AEE': 'MOBILE_AEE', 'EMAIL_AE': 'EMAIL_AE', 'MOBILE_AE': 'MOBILE_AE', 'CIRCLE_COD': 'CIRCLE_COD', 'SECTION_CO': 'SECTION_CO', 'CORE_ROAD_': 'CORE_ROAD_', 'DIVISION_C': 'DIVISION_C', 'SUB_DIVISI': 'SUB_DIVISI', 'ROAD__4': 'ROAD__4', 'ROAD_END_C': 'ROAD_END_C', 'ROAD': 'ROAD', 'DIRECTION_': 'DIRECTION_', 'PERMANENT_': 'PERMANENT_', 'SINGL_5': 'SINGL_5', 'ENVIR_6': 'ENVIR_6', 'LOCAL_AUTH': 'LOCAL_AUTH', 'LOCAL_7': 'LOCAL_7', 'PLAN_REFER': 'PLAN_REFER', 'PLAN__8': 'PLAN__8', 'ROAD_HIERA': 'ROAD_HIERA', 'FOOTWAY_HI': 'FOOTWAY_HI', 'TIED_TO_ST': 'TIED_TO_ST', 'OFF_CARRIA': 'OFF_CARRIA', 'NOMINATED_': 'NOMINATED_', 'FEATURE_CO': 'FEATURE_CO', 'LENGTH_Km_': 'LENGTH_Km_', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', 'layer': 'layer', 'path': 'path', 'Shape_Leng': 'Shape_Leng', });
lyr_Kerala_LS_Roads_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Join_Count': 'TextEdit', 'TARGET_FID': 'TextEdit', 'ID': 'TextEdit', 'CLIMATE_RI': 'TextEdit', 'VULNERABIL': 'TextEdit', 'AADT': 'TextEdit', 'NON_MOTORI': 'TextEdit', 'AADT_YEAR': 'TextEdit', 'SECTION_WI': 'TextEdit', 'WEATHER_PR': 'TextEdit', 'LANDSLIDE_': 'TextEdit', 'SEA_EROSIO': 'TextEdit', 'SEA_E_1': 'TextEdit', 'FLOOD_RISK': 'TextEdit', 'LANDS_2': 'TextEdit', 'FLOOD_3': 'TextEdit', 'SECTION_LA': 'TextEdit', 'SECTION_DE': 'TextEdit', 'LOCATION': 'TextEdit', 'END_DATE': 'TextEdit', 'ROAD_NAME': 'TextEdit', 'ROAD_NUMBE': 'TextEdit', 'NO_OF_PERM': 'TextEdit', 'SINGLE_OR_': 'TextEdit', 'DIRECTION': 'TextEdit', 'ROAD_CLASS': 'TextEdit', 'SPEED_LIMI': 'TextEdit', 'ORGANISATI': 'TextEdit', 'SURFACE_TY': 'TextEdit', 'CONSTRUCTI': 'TextEdit', 'HIERAR_1': 'TextEdit', 'HIERAR_2': 'TextEdit', 'MEASURED_S': 'TextEdit', 'DIGITISED_': 'TextEdit', 'START_CHAI': 'TextEdit', 'END_CHAINA': 'TextEdit', 'START_DATE': 'TextEdit', 'HIERAR_3': 'TextEdit', 'HIERAR_4': 'TextEdit', 'HIERAR_5': 'TextEdit', 'REGION': 'TextEdit', 'DISTRICT': 'TextEdit', 'ENVIRONMEN': 'TextEdit', 'SECTION_FU': 'TextEdit', 'OPERATIONA': 'TextEdit', 'ROAD_TYPE': 'TextEdit', 'ROAD_START': 'TextEdit', 'ROAD_END_J': 'TextEdit', 'ASSET_ID': 'TextEdit', 'CONSTITUEN': 'TextEdit', 'ROW_WIDTH': 'TextEdit', 'TERRAIN': 'TextEdit', 'EMAIL_SE': 'TextEdit', 'EMAIL_EE': 'TextEdit', 'MOBILE_EE': 'TextEdit', 'EMAIL_AEE': 'TextEdit', 'MOBILE_AEE': 'TextEdit', 'EMAIL_AE': 'TextEdit', 'MOBILE_AE': 'TextEdit', 'CIRCLE_COD': 'TextEdit', 'SECTION_CO': 'TextEdit', 'CORE_ROAD_': 'TextEdit', 'DIVISION_C': 'TextEdit', 'SUB_DIVISI': 'TextEdit', 'ROAD__4': 'TextEdit', 'ROAD_END_C': 'TextEdit', 'ROAD': 'TextEdit', 'DIRECTION_': 'TextEdit', 'PERMANENT_': 'TextEdit', 'SINGL_5': 'TextEdit', 'ENVIR_6': 'TextEdit', 'LOCAL_AUTH': 'TextEdit', 'LOCAL_7': 'TextEdit', 'PLAN_REFER': 'TextEdit', 'PLAN__8': 'TextEdit', 'ROAD_HIERA': 'TextEdit', 'FOOTWAY_HI': 'TextEdit', 'TIED_TO_ST': 'TextEdit', 'OFF_CARRIA': 'TextEdit', 'NOMINATED_': 'TextEdit', 'FEATURE_CO': 'TextEdit', 'LENGTH_Km_': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Kerala_LS_Roads_1.set('fieldLabels', {'OBJECTID': 'no label', 'Join_Count': 'no label', 'TARGET_FID': 'no label', 'ID': 'no label', 'CLIMATE_RI': 'no label', 'VULNERABIL': 'no label', 'AADT': 'no label', 'NON_MOTORI': 'no label', 'AADT_YEAR': 'no label', 'SECTION_WI': 'no label', 'WEATHER_PR': 'no label', 'LANDSLIDE_': 'no label', 'SEA_EROSIO': 'no label', 'SEA_E_1': 'no label', 'FLOOD_RISK': 'no label', 'LANDS_2': 'no label', 'FLOOD_3': 'no label', 'SECTION_LA': 'no label', 'SECTION_DE': 'no label', 'LOCATION': 'no label', 'END_DATE': 'no label', 'ROAD_NAME': 'no label', 'ROAD_NUMBE': 'no label', 'NO_OF_PERM': 'no label', 'SINGLE_OR_': 'no label', 'DIRECTION': 'no label', 'ROAD_CLASS': 'no label', 'SPEED_LIMI': 'no label', 'ORGANISATI': 'no label', 'SURFACE_TY': 'no label', 'CONSTRUCTI': 'no label', 'HIERAR_1': 'no label', 'HIERAR_2': 'no label', 'MEASURED_S': 'no label', 'DIGITISED_': 'no label', 'START_CHAI': 'no label', 'END_CHAINA': 'no label', 'START_DATE': 'no label', 'HIERAR_3': 'no label', 'HIERAR_4': 'no label', 'HIERAR_5': 'no label', 'REGION': 'no label', 'DISTRICT': 'no label', 'ENVIRONMEN': 'no label', 'SECTION_FU': 'no label', 'OPERATIONA': 'no label', 'ROAD_TYPE': 'no label', 'ROAD_START': 'no label', 'ROAD_END_J': 'no label', 'ASSET_ID': 'no label', 'CONSTITUEN': 'no label', 'ROW_WIDTH': 'no label', 'TERRAIN': 'no label', 'EMAIL_SE': 'no label', 'EMAIL_EE': 'no label', 'MOBILE_EE': 'no label', 'EMAIL_AEE': 'no label', 'MOBILE_AEE': 'no label', 'EMAIL_AE': 'no label', 'MOBILE_AE': 'no label', 'CIRCLE_COD': 'no label', 'SECTION_CO': 'no label', 'CORE_ROAD_': 'no label', 'DIVISION_C': 'no label', 'SUB_DIVISI': 'no label', 'ROAD__4': 'no label', 'ROAD_END_C': 'no label', 'ROAD': 'no label', 'DIRECTION_': 'no label', 'PERMANENT_': 'no label', 'SINGL_5': 'no label', 'ENVIR_6': 'no label', 'LOCAL_AUTH': 'no label', 'LOCAL_7': 'no label', 'PLAN_REFER': 'no label', 'PLAN__8': 'no label', 'ROAD_HIERA': 'no label', 'FOOTWAY_HI': 'no label', 'TIED_TO_ST': 'no label', 'OFF_CARRIA': 'no label', 'NOMINATED_': 'no label', 'FEATURE_CO': 'no label', 'LENGTH_Km_': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', 'layer': 'no label', 'path': 'no label', 'Shape_Leng': 'no label', });
lyr_Kerala_LS_Roads_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});