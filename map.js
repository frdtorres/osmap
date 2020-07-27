let myMap = L.map('myMap').setView([-15.832238, -70.024426],15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
}).addTo(myMap);


let iconMarker = L.icon({
    iconUrl: 'marcador.png',
    iconSize: [40, 60],
    iconAnchor: [30, 60]
});

var latlngs = [
[-15.842039, -70.031097],
[-15.837601, -70.020939],
[-15.832197, -70.022525],
[-15.828636, -70.017633],
[-15.824647, -70.016367]
];


var path = L.polyline(latlngs,{"delay":800,"dashArray":[10,20],"weight":5,"blue":"red","paused":true,"reverse":false}).addTo(myMap);
   myMap.addLayer(path);
   myMap.fitBounds(path.getBounds());



let micasa = L.marker([-15.842039, -70.031097], { icon: iconMarker }).addTo(myMap);
let uni = L.marker([-15.824638, -70.016370], { icon: iconMarker }).addTo(myMap);

micasa.bindPopup("<div class='card' style='width: 18rem;'>  <img src='fotofb.jpg' width: 5rem class='card-img-top' >  <div class='card-body'>  <h5 class='card-title'>Julio César Tisnado Puma</h5>    <p class='card-text'>Leer, tocar algún instrumento y jugar en el PS4</p>    <a href='https://github.com/jcesargithl/tarearuta'  target ='_blank' class='btn btn-primary btn-block text text-white'>Ir a repositorio</a>  </div> </div>");
//micasa.bindPopup("Julio César Tisnado Puma <h6 class='text-primary font-weight-light'> Leer, tocar algún instrumento y jugar en el PS4 <h6>");
