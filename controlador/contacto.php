<?php

$server = 'localhost';
$user = 'root';
$password = '';
$dbase = 'datos';

$conexion = mysqli_connect($server,$user,$password,$dbase);

if(!isset($_POST['telefono'])){
        $_POST['telefono'] = 'NULL';
}

$sql = "INSERT INTO contactos VALUES (NULL,'".
        $_POST['nombre']."','".
        $_POST['apellido']."','".
        $_POST['email']."',".
        $_POST['telefono'].",'".
        $_POST['asunto']."','".
        $_POST['mensaje']."')";

if($conexion->query($sql)){
        $conexion->close();
        echo '200';
} else {
        $conexion->close();
        echo '500';
}


?>