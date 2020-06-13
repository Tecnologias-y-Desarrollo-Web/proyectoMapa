var latitud;
var longitud;
navigator.geolocation.watchPosition
navigator.geolocation.getCurrentPosition(function (pos) {
    latitud = document.getElementById("lati");
    longitud = document.getElementById("longi");
    
    markerActual = L.marker([latitud, longitud], {draggable: false}).addTo(map);
    markerActual.bindPopup("Esta es tu ubicacion<br>" + "Latitud: " + latitud + "<br>" + "Longitud: " + longitud).openPopup();
    map.setView([latitud, longitud], 18);
})