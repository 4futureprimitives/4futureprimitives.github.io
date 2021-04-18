 

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([104.8455, 14.0086]),
        zoom: 8
    })


});

//preah vihear
 // var p1 = new OpenLayers.Geometry.Point(104.8455, 14.0086);
// //Bangkok
// var p2 = new OpenLayers.Geometry.Point(100.49275, 13.75193);
// //Angkor
// var p3 = new OpenLayers.Geometry.Point(103.86701, 13.41269);
// //sukhothai
// var p4 = new OpenLayers.Geometry.Point(99.71330, 17.06504);
// //Luang Prabang
// var p5 = new OpenLayers.Geometry.Point(102.13231, 19.88774);

// var pnt= [];
// pnt.push(p1,p2,p3,p4,p5);

// var ln = new OpenLayers.Geometry.LinearRing(pnt);
// var pf = new OpenLayers.Feature.Vector(ln, null, style);

// vector.addFeatures([pf]);

