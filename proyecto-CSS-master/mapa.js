<!DOCTYPE html>
<html lang="es">
<head>
    
    <title>Direccion</title>
    <meta charset="utf-8">
    <meta name="description" content="Este es el formulario de Registro">
    <meta name="keywords" content="HTML, CSS, JavaScript, registro">
    <link rel="icon" href="imagenes/icon.png" type="image/png" sizes="16x16">
    <link rel="stylesheet" href="Estilo.css">
    <script src="https://unpkg.com/leaflet@1.0.2/dist/leaflet.js"></script>
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.2/dist/leaflet.css" />
    <style>
        #map { 
        width: 650px;
        height: 450px; 
        }
       </style>
</head>
<body>
    <header>
        <strong>Ingreso del usuario</strong>
    </header>
    <nav>
        <a href="Inicio.html">Inicio</a>
    </nav>
    <main>
        <section>
        <h1>Direccion</h1>
        <form name="formulario" method="set" action="procesar.php">
            
            <p>
                <label>Especifica tu lugar de residencia: </label>
            </p>
            <p>
                <label>Ubicacion</label>
                <div id="map"></div>
                <p><label>Latitud: <input type="text" id="lati" value="" readonly></label></p>
                <p><label>Longitud: <input type="text" id="longi" value="" readonly></label></p>
                <script>
                    var map = L.map('map').setView([15.413083, -66.2136067], 3);
                    var markerActual; 
            
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(map);
                </script>
                <script src="mapaInteractivo.js"></script>
            </p>
            <p>
                <button type="button" onclick=" location.href='Reserva.html'">Iniciar Sesion</button>
            </p>
        </form>
        </section>
    </main>
    <footer>
        &copy; Derechos Reservados 2020
    </footer>
</body>
</html>
