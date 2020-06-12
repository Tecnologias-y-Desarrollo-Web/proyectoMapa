<?php
$nameSearch = $_POST["nameSearch"];
$message = "";
require("connection.php");
$sql = mysqli_query($connection, "SELECT * FROM prueba
                                WHERE nombre LIKE '%$nameSearch%'
                                OR contrasena LIKE '%$nameSearch%'");
while($result = mysqli_fetch_array($sql)){
    $name = $result['nombre'];
    $age = $result['contrasena'];
    $message .='
    <tr>
        <td>' . $name . '</td>
        <td>' . $age . '</td>
    </tr>
    ';
}
echo $message;
?>