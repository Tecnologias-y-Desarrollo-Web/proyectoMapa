function iniciar(){
    var boton = document.getElementById('coords');
    boton.addEventListener('click', obtener, false);
}
function obtener(){
    navigator.geolocation.getCurrentPosition(mostrar, errores);   
}
var coords = {};
function mostrar(posicion) {
    var ubicacion = document.getElementById('ubicacion');
    mapaGoogle = new google.maps.Map(document.getElementById('mapa'), {
	  center: {lat: posicion.coords.latitude, lng: posicion.coords.longitude},
      zoom: 13,
      sensor: false,
    });
    var marker;
    marker = new google.maps.Marker({
      position: {lat: posicion.coords.latitude, lng: posicion.coords.longitude},
      map: mapaGoogle,
      draggable: true,
      animation: google.maps.Animation.DROP
    });
    function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
    marker.addListener('click', toggleBounce);
    marker.addListener('dragend', function (event){
        document.getElementById("coordMark").value = this.getPosition().lat() + ", " + this.getPosition().lng()
    })
    var datosLat = posicion.coords.latitude;
    var datosLong = posicion.coords.longitude;
    document.getElementById('lati').value = datosLat;
    document.getElementById('longi').value = datosLong;
}
function errores(error){   
    alert('Error: '+error.code+' '+error.message); 
} 
window.addEventListener('load', iniciar, false);