let ownMap = L.map('ownMap').setView([-15.856355, -70.015843],15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {	maxZoom: 19,}).addTo(ownMap);

let iconMarker = L.icon({
    iconUrl        : 'maps.png', 
    iconSize       : [30, 30], 
    iconAnchor     : [30, 30] 
});

var latlngs = [
    [-15.856355 , -70.015843],
    [-15.851803, -70.019620],
    [-15.850936, -70.018428],
    [-15.846668, -70.019855],
    [-15.846094, -70.017923],
    [-15.843603, -70.018794],
    [-15.843409, -70.017958],
    [-15.843153, -70.017690],
    [-15.841588, -70.017702],
    [-15.839898, -70.017704],
    [-15.839090, -70.017444],
    [-15.838061, -70.017755],
    [-15.835603, -70.017815],
    [-15.833205, -70.018667],
    [-15.831810, -70.019284],
    [-15.830766, -70.019208],
    [-15.830204, -70.019014],
    [-15.829987, -70.019076],
    [-15.828528, -70.016788],
    [-15.828247, -70.016937],
    [-15.827783, -70.017055],
    [-15.827553, -70.017057],
    [-15.824399, -70.016252],

];


var path = L.polyline(latlngs,{
    "delay":1000,
    "dashArray":[10,20],
    "weight":3,
    "blue":"red",
    "paused":true,
    "reverse":true
}).addTo(ownMap);
   
ownMap.addLayer(path);
ownMap.fitBounds(path.getBounds());



let  micasa= L.marker(
    [-15.856355 , -70.015843], 
    { icon: iconMarker }
).addTo(ownMap);

let uni = L.marker(
    [-15.824399, -70.016252], 
    { icon: iconMarker }
).addTo(ownMap);

micasa.bindPopup(" <div class='card align-content-center bg-dark text-white' style='width: 18rem;'>  <center><img  class='rounded-circle align-content-center'src='fred.jpg' width='40%'></center>  <div class='card-body'><h5 class='card-title'> Fred Torres Cruz </h5>   <p class='card-text'>Viajar, Leer, Cocinar.</p>   <p class='card-text'>Av. Circunvalación Sur N° 1949 </p> </div></div>");

