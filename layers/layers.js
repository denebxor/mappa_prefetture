var wms_layers = [];

var format_ListaProcure_0 = new ol.format.GeoJSON();
var features_ListaProcure_0 = format_ListaProcure_0.readFeatures(json_ListaProcure_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ListaProcure_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ListaProcure_0.addFeatures(features_ListaProcure_0);
var lyr_ListaProcure_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ListaProcure_0, 
                style: style_ListaProcure_0,
                popuplayertitle: "Lista Procure",
                interactive: true,
    title: 'Lista Procure<br />\
    <img src="styles/legend/ListaProcure_0_0.png" /> 1<br />\
    <img src="styles/legend/ListaProcure_0_1.png" /> 2<br />\
    <img src="styles/legend/ListaProcure_0_2.png" /> 3<br />\
    <img src="styles/legend/ListaProcure_0_3.png" /> 4<br />\
    <img src="styles/legend/ListaProcure_0_4.png" /> 5<br />\
    <img src="styles/legend/ListaProcure_0_5.png" /> 6<br />\
    <img src="styles/legend/ListaProcure_0_6.png" /> 7<br />\
    <img src="styles/legend/ListaProcure_0_7.png" /> 8<br />\
    <img src="styles/legend/ListaProcure_0_8.png" /> 9<br />\
    <img src="styles/legend/ListaProcure_0_9.png" /> 10<br />\
    <img src="styles/legend/ListaProcure_0_10.png" /> 11<br />\
    <img src="styles/legend/ListaProcure_0_11.png" /> 12<br />\
    <img src="styles/legend/ListaProcure_0_12.png" /> 13<br />\
    <img src="styles/legend/ListaProcure_0_13.png" /> 14<br />\
    <img src="styles/legend/ListaProcure_0_14.png" /> 15<br />\
    <img src="styles/legend/ListaProcure_0_15.png" /> 16<br />\
    <img src="styles/legend/ListaProcure_0_16.png" /> 17<br />\
    <img src="styles/legend/ListaProcure_0_17.png" /> 18<br />\
    <img src="styles/legend/ListaProcure_0_18.png" /> 19<br />\
    <img src="styles/legend/ListaProcure_0_19.png" /> 20<br />\
    <img src="styles/legend/ListaProcure_0_20.png" /> <br />'
        });

lyr_ListaProcure_0.setVisible(true);
var layersList = [lyr_ListaProcure_0];
lyr_ListaProcure_0.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'DEN_REG': 'Regione:', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Alessandria': 'Alessandria', 'Asti': 'Asti', 'Biella': 'Biella', 'Cuneo': 'Cuneo', 'Ivrea': 'Ivrea', 'Novara': 'Novara', 'Torino': 'Torino', 'Verbania': 'Verbania', 'Vercelli': 'Vercelli', 'Aosta': 'Aosta', 'Bergamo': 'Bergamo', 'Brescia': 'Brescia', 'Busto Arsizio': 'Busto Arsizio', 'Como': 'Como', 'Cremona': 'Cremona', 'Lecco': 'Lecco', 'Lodi': 'Lodi', 'Mantova': 'Mantova', 'Milano': 'Milano', 'Monza': 'Monza', 'Pavia': 'Pavia', 'Sondrio': 'Sondrio', 'Varese': 'Varese', 'Bolzano': 'Bolzano', 'Rovereto': 'Rovereto', 'Trento': 'Trento', 'Belluno': 'Belluno', 'Padova': 'Padova', 'Rovigo': 'Rovigo', 'Treviso': 'Treviso', 'Venezia': 'Venezia', 'Verona': 'Verona', 'Vicenza': 'Vicenza', 'Gorizia': 'Gorizia', 'Pordenone': 'Pordenone', 'Trieste': 'Trieste', 'Udine': 'Udine', 'Genova': 'Genova', 'Imperia': 'Imperia', 'La Spezia': 'La Spezia', 'Savona': 'Savona', 'Bologna': 'Bologna', 'Ferrara': 'Ferrara', 'Forlì': 'Forlì', 'Modena': 'Modena', 'Parma': 'Parma', 'Piacenza': 'Piacenza', 'Ravenna': 'Ravenna', 'Reggio nell\'Emilia': 'Reggio nell\'Emilia', 'Rimini': 'Rimini', 'Arezzo': 'Arezzo', 'Firenze': 'Firenze', 'Grosseto': 'Grosseto', 'Livorno': 'Livorno', 'Lucca': 'Lucca', 'Massa': 'Massa', 'Pisa': 'Pisa', 'Pistoia': 'Pistoia', 'Prato': 'Prato', 'Siena': 'Siena', 'Perugia': 'Perugia', 'Spoleto': 'Spoleto', 'Terni': 'Terni', 'Ancona': 'Ancona', 'Ascoli Piceno': 'Ascoli Piceno', 'Fermo': 'Fermo', 'Macerata': 'Macerata', 'Pesaro': 'Pesaro', 'Urbino': 'Urbino', 'Cassino': 'Cassino', 'Civitavecchia': 'Civitavecchia', 'Frosinone': 'Frosinone', 'Latina': 'Latina', 'Rieti': 'Rieti', 'Roma': 'Roma', 'Tivoli': 'Tivoli', 'Velletri': 'Velletri', 'Viterbo': 'Viterbo', 'Avezzano': 'Avezzano', 'Chieti': 'Chieti', 'L\'Aquila': 'L\'Aquila', 'Lanciano': 'Lanciano', 'Pescara': 'Pescara', 'Sulmona': 'Sulmona', 'Teramo': 'Teramo', 'Vasto': 'Vasto', 'Campobasso': 'Campobasso', 'Isernia': 'Isernia', 'Larino': 'Larino', 'Avellino': 'Avellino', 'Aversa': 'Aversa', 'Benevento': 'Benevento', 'Napoli': 'Napoli', 'Nocera Inferiore': 'Nocera Inferiore', 'Nola': 'Nola', 'Salerno': 'Salerno', 'Santa Maria Capua Vetere': 'Santa Maria Capua Vetere', 'Torre Annunziata': 'Torre Annunziata', 'Vallo della Lucania': 'Vallo della Lucania', 'Bari': 'Bari', 'Brindisi': 'Brindisi', 'Foggia': 'Foggia', 'Lecce': 'Lecce', 'Taranto': 'Taranto', 'Trani': 'Trani', 'Lagonegro': 'Lagonegro', 'Matera': 'Matera', 'Potenza': 'Potenza', 'Castrovillari': 'Castrovillari', 'Catanzaro': 'Catanzaro', 'Cosenza': 'Cosenza', 'Crotone': 'Crotone', 'Lamezia Terme': 'Lamezia Terme', 'Locri': 'Locri', 'Palmi': 'Palmi', 'Paola': 'Paola', 'Reggio di Calabria': 'Reggio di Calabria', 'Vibo Valentia': 'Vibo Valentia', 'Agrigento': 'Agrigento', 'Barcellona Pozzo Di Gotto': 'Barcellona Pozzo Di Gotto', 'Caltagirone': 'Caltagirone', 'Caltanissetta': 'Caltanissetta', 'Catania': 'Catania', 'Enna': 'Enna', 'Gela': 'Gela', 'Marsala': 'Marsala', 'Messina': 'Messina', 'Palermo': 'Palermo', 'Patti': 'Patti', 'Ragusa': 'Ragusa', 'Sciacca': 'Sciacca', 'Siracusa': 'Siracusa', 'Termini Imerese': 'Termini Imerese', 'Trapani': 'Trapani', 'Cagliari': 'Cagliari', 'Lanusei': 'Lanusei', 'Nuoro': 'Nuoro', 'Oristano': 'Oristano', 'Sassari': 'Sassari', 'Tempio Pausania': 'Tempio Pausania', });
lyr_ListaProcure_0.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'DEN_REG': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Alessandria': 'TextEdit', 'Asti': 'TextEdit', 'Biella': 'TextEdit', 'Cuneo': 'TextEdit', 'Ivrea': 'TextEdit', 'Novara': 'TextEdit', 'Torino': 'TextEdit', 'Verbania': 'TextEdit', 'Vercelli': 'TextEdit', 'Aosta': 'TextEdit', 'Bergamo': 'TextEdit', 'Brescia': 'TextEdit', 'Busto Arsizio': 'TextEdit', 'Como': 'TextEdit', 'Cremona': 'TextEdit', 'Lecco': 'TextEdit', 'Lodi': 'TextEdit', 'Mantova': 'TextEdit', 'Milano': 'TextEdit', 'Monza': 'TextEdit', 'Pavia': 'TextEdit', 'Sondrio': 'TextEdit', 'Varese': 'TextEdit', 'Bolzano': 'TextEdit', 'Rovereto': 'TextEdit', 'Trento': 'TextEdit', 'Belluno': 'TextEdit', 'Padova': 'TextEdit', 'Rovigo': 'TextEdit', 'Treviso': 'TextEdit', 'Venezia': 'TextEdit', 'Verona': 'TextEdit', 'Vicenza': 'TextEdit', 'Gorizia': 'TextEdit', 'Pordenone': 'TextEdit', 'Trieste': 'TextEdit', 'Udine': 'TextEdit', 'Genova': 'TextEdit', 'Imperia': 'TextEdit', 'La Spezia': 'TextEdit', 'Savona': 'TextEdit', 'Bologna': 'TextEdit', 'Ferrara': 'TextEdit', 'Forlì': 'TextEdit', 'Modena': 'TextEdit', 'Parma': 'TextEdit', 'Piacenza': 'TextEdit', 'Ravenna': 'TextEdit', 'Reggio nell\'Emilia': 'TextEdit', 'Rimini': 'TextEdit', 'Arezzo': 'TextEdit', 'Firenze': 'TextEdit', 'Grosseto': 'TextEdit', 'Livorno': 'TextEdit', 'Lucca': 'TextEdit', 'Massa': 'TextEdit', 'Pisa': 'TextEdit', 'Pistoia': 'TextEdit', 'Prato': 'TextEdit', 'Siena': 'TextEdit', 'Perugia': 'TextEdit', 'Spoleto': 'TextEdit', 'Terni': 'TextEdit', 'Ancona': 'TextEdit', 'Ascoli Piceno': 'TextEdit', 'Fermo': 'TextEdit', 'Macerata': 'TextEdit', 'Pesaro': 'TextEdit', 'Urbino': 'TextEdit', 'Cassino': 'TextEdit', 'Civitavecchia': 'TextEdit', 'Frosinone': 'TextEdit', 'Latina': 'TextEdit', 'Rieti': 'TextEdit', 'Roma': 'TextEdit', 'Tivoli': 'TextEdit', 'Velletri': 'TextEdit', 'Viterbo': 'TextEdit', 'Avezzano': 'TextEdit', 'Chieti': 'TextEdit', 'L\'Aquila': 'TextEdit', 'Lanciano': 'TextEdit', 'Pescara': 'TextEdit', 'Sulmona': 'TextEdit', 'Teramo': 'TextEdit', 'Vasto': 'TextEdit', 'Campobasso': 'TextEdit', 'Isernia': 'TextEdit', 'Larino': 'TextEdit', 'Avellino': 'TextEdit', 'Aversa': 'TextEdit', 'Benevento': 'TextEdit', 'Napoli': 'TextEdit', 'Nocera Inferiore': 'TextEdit', 'Nola': 'TextEdit', 'Salerno': 'TextEdit', 'Santa Maria Capua Vetere': 'TextEdit', 'Torre Annunziata': 'TextEdit', 'Vallo della Lucania': 'TextEdit', 'Bari': 'TextEdit', 'Brindisi': 'TextEdit', 'Foggia': 'TextEdit', 'Lecce': 'TextEdit', 'Taranto': 'TextEdit', 'Trani': 'TextEdit', 'Lagonegro': 'TextEdit', 'Matera': 'TextEdit', 'Potenza': 'TextEdit', 'Castrovillari': 'TextEdit', 'Catanzaro': 'TextEdit', 'Cosenza': 'TextEdit', 'Crotone': 'TextEdit', 'Lamezia Terme': 'TextEdit', 'Locri': 'TextEdit', 'Palmi': 'TextEdit', 'Paola': 'TextEdit', 'Reggio di Calabria': 'TextEdit', 'Vibo Valentia': 'TextEdit', 'Agrigento': 'TextEdit', 'Barcellona Pozzo Di Gotto': 'TextEdit', 'Caltagirone': 'TextEdit', 'Caltanissetta': 'TextEdit', 'Catania': 'TextEdit', 'Enna': 'TextEdit', 'Gela': 'TextEdit', 'Marsala': 'TextEdit', 'Messina': 'TextEdit', 'Palermo': 'TextEdit', 'Patti': 'TextEdit', 'Ragusa': 'TextEdit', 'Sciacca': 'TextEdit', 'Siracusa': 'TextEdit', 'Termini Imerese': 'TextEdit', 'Trapani': 'TextEdit', 'Cagliari': 'TextEdit', 'Lanusei': 'TextEdit', 'Nuoro': 'TextEdit', 'Oristano': 'TextEdit', 'Sassari': 'TextEdit', 'Tempio Pausania': 'TextEdit', });
lyr_ListaProcure_0.set('fieldLabels', {'COD_RIP': 'hidden field', 'COD_REG': 'hidden field', 'DEN_REG': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Alessandria': 'inline label - visible with data', 'Asti': 'inline label - visible with data', 'Biella': 'inline label - visible with data', 'Cuneo': 'inline label - visible with data', 'Ivrea': 'inline label - visible with data', 'Novara': 'inline label - visible with data', 'Torino': 'inline label - visible with data', 'Verbania': 'inline label - visible with data', 'Vercelli': 'inline label - visible with data', 'Aosta': 'inline label - visible with data', 'Bergamo': 'inline label - visible with data', 'Brescia': 'inline label - visible with data', 'Busto Arsizio': 'inline label - visible with data', 'Como': 'inline label - visible with data', 'Cremona': 'inline label - visible with data', 'Lecco': 'inline label - visible with data', 'Lodi': 'inline label - visible with data', 'Mantova': 'inline label - visible with data', 'Milano': 'inline label - visible with data', 'Monza': 'inline label - visible with data', 'Pavia': 'inline label - visible with data', 'Sondrio': 'inline label - visible with data', 'Varese': 'inline label - visible with data', 'Bolzano': 'inline label - visible with data', 'Rovereto': 'inline label - visible with data', 'Trento': 'inline label - visible with data', 'Belluno': 'inline label - visible with data', 'Padova': 'inline label - visible with data', 'Rovigo': 'inline label - visible with data', 'Treviso': 'inline label - visible with data', 'Venezia': 'inline label - visible with data', 'Verona': 'inline label - visible with data', 'Vicenza': 'inline label - visible with data', 'Gorizia': 'inline label - visible with data', 'Pordenone': 'inline label - visible with data', 'Trieste': 'inline label - visible with data', 'Udine': 'inline label - visible with data', 'Genova': 'inline label - visible with data', 'Imperia': 'inline label - visible with data', 'La Spezia': 'inline label - visible with data', 'Savona': 'inline label - visible with data', 'Bologna': 'inline label - visible with data', 'Ferrara': 'inline label - visible with data', 'Forlì': 'inline label - visible with data', 'Modena': 'inline label - visible with data', 'Parma': 'inline label - visible with data', 'Piacenza': 'inline label - visible with data', 'Ravenna': 'inline label - visible with data', 'Reggio nell\'Emilia': 'inline label - visible with data', 'Rimini': 'inline label - visible with data', 'Arezzo': 'inline label - visible with data', 'Firenze': 'inline label - visible with data', 'Grosseto': 'inline label - visible with data', 'Livorno': 'inline label - visible with data', 'Lucca': 'inline label - visible with data', 'Massa': 'inline label - visible with data', 'Pisa': 'inline label - visible with data', 'Pistoia': 'inline label - visible with data', 'Prato': 'inline label - visible with data', 'Siena': 'inline label - visible with data', 'Perugia': 'inline label - visible with data', 'Spoleto': 'inline label - visible with data', 'Terni': 'inline label - visible with data', 'Ancona': 'inline label - visible with data', 'Ascoli Piceno': 'inline label - visible with data', 'Fermo': 'inline label - visible with data', 'Macerata': 'inline label - visible with data', 'Pesaro': 'inline label - visible with data', 'Urbino': 'inline label - visible with data', 'Cassino': 'inline label - visible with data', 'Civitavecchia': 'inline label - visible with data', 'Frosinone': 'inline label - visible with data', 'Latina': 'inline label - visible with data', 'Rieti': 'inline label - visible with data', 'Roma': 'inline label - visible with data', 'Tivoli': 'inline label - visible with data', 'Velletri': 'inline label - visible with data', 'Viterbo': 'inline label - visible with data', 'Avezzano': 'inline label - visible with data', 'Chieti': 'inline label - visible with data', 'L\'Aquila': 'inline label - visible with data', 'Lanciano': 'inline label - visible with data', 'Pescara': 'inline label - visible with data', 'Sulmona': 'inline label - visible with data', 'Teramo': 'inline label - visible with data', 'Vasto': 'inline label - visible with data', 'Campobasso': 'inline label - visible with data', 'Isernia': 'inline label - visible with data', 'Larino': 'inline label - visible with data', 'Avellino': 'inline label - visible with data', 'Aversa': 'inline label - visible with data', 'Benevento': 'inline label - visible with data', 'Napoli': 'inline label - visible with data', 'Nocera Inferiore': 'inline label - visible with data', 'Nola': 'inline label - visible with data', 'Salerno': 'inline label - visible with data', 'Santa Maria Capua Vetere': 'inline label - visible with data', 'Torre Annunziata': 'inline label - visible with data', 'Vallo della Lucania': 'inline label - visible with data', 'Bari': 'inline label - visible with data', 'Brindisi': 'inline label - visible with data', 'Foggia': 'inline label - visible with data', 'Lecce': 'inline label - visible with data', 'Taranto': 'inline label - visible with data', 'Trani': 'inline label - visible with data', 'Lagonegro': 'inline label - visible with data', 'Matera': 'inline label - visible with data', 'Potenza': 'inline label - visible with data', 'Castrovillari': 'inline label - visible with data', 'Catanzaro': 'inline label - visible with data', 'Cosenza': 'inline label - visible with data', 'Crotone': 'inline label - visible with data', 'Lamezia Terme': 'inline label - visible with data', 'Locri': 'inline label - visible with data', 'Palmi': 'inline label - visible with data', 'Paola': 'inline label - visible with data', 'Reggio di Calabria': 'inline label - visible with data', 'Vibo Valentia': 'inline label - visible with data', 'Agrigento': 'inline label - visible with data', 'Barcellona Pozzo Di Gotto': 'inline label - visible with data', 'Caltagirone': 'inline label - visible with data', 'Caltanissetta': 'inline label - visible with data', 'Catania': 'inline label - visible with data', 'Enna': 'inline label - visible with data', 'Gela': 'inline label - visible with data', 'Marsala': 'inline label - visible with data', 'Messina': 'inline label - visible with data', 'Palermo': 'inline label - visible with data', 'Patti': 'inline label - visible with data', 'Ragusa': 'inline label - visible with data', 'Sciacca': 'inline label - visible with data', 'Siracusa': 'inline label - visible with data', 'Termini Imerese': 'inline label - visible with data', 'Trapani': 'inline label - visible with data', 'Cagliari': 'inline label - visible with data', 'Lanusei': 'inline label - visible with data', 'Nuoro': 'inline label - visible with data', 'Oristano': 'inline label - visible with data', 'Sassari': 'inline label - visible with data', 'Tempio Pausania': 'inline label - visible with data', });
lyr_ListaProcure_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});