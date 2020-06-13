var latitud;
var longitud;
navigator.geolocation.watchPosition
navigator.geolocation.getCurrentPosition(function (pos) {
    latitud = pos.coords.latitude;
    longitud = pos.coords.longitude;
    
    markerActual = L.marker([latitud, longitud], {draggable: false}).addTo(map);
    markerActual.bindPopup("Esta es tu ubicacion<br>" + "Latitud: " + latitud + "<br>" + "Longitud: " + longitud).openPopup();
    map.setView([latitud, longitud], 18);
})
var nuevoMarker;
function onMapClick(e) {
    if (nuevoMarker){
        map.removeLayer(nuevoMarker);
    };
    map.removeLayer(markerActual);
    nuevoMarker = L.marker(e.latlng, {draggable: false});
    map.addLayer(nuevoMarker);
    nuevoMarker.bindPopup("Esta es tu ubicacion<br>" + e.latlng).openPopup();
    document.getElementById('lati').value = e.latlng.lat;
    document.getElementById('longi').value = e.latlng.lng;
}
map.on('click', onMapClick);