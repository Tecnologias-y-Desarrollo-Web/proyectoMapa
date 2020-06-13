<?php
$usu = $_POST["usu"];
$con = $_POST["con"];
$nom = $_POST["nom"];
$ape = $_POST["ape"];
$lat = $_POST["lat"];
$lon = $_POST["lon"];
require("conexion.php");
$sql = "INSERT INTO clientes(usuario,contrasena,nombre,apellido,latitud,longitud) 
VALUES('$usu','$con','$nom','$ape','$lat','$lon')";
mysqli_query($connection,$sql);
echo 1;
?>