<?php
$name = $_POST["name"];
$age = $_POST["age"];
require("connection.php");
$sql = "INSERT INTO prueba(nombre,contrasena) VALUES('$name','$age')";
mysqli_query($connection,$sql);
echo 1;
?>