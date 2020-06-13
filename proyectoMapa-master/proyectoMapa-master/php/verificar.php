<?php
$usuario = $_POST["buscarUsuario"];
$message = "";
require("conexion.php");
$sql = mysqli_query($connection, "SELECT * FROM clientes
                                WHERE usuario = '$usuario'");
while($result = mysqli_fetch_array($sql)){
    $usu = $result['usuario'];
    $con = $result['contrasena'];
    $nom = $result['nombre'];
    $ape = $result['apellido'];
    $lat = $result['latitud'];
    $lon = $result['longitud'];
    $message .= $usu . '*' . $con . '*' . $nom. '*' . $ape. '*' . $lat. '*' . $lon;
}
echo $message;
?>