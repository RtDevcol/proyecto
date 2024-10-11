<?php
include('../config/conexion.php');

$query = "SELECT * FROM usuarios";
$resultado = @mysqli_query($conexion, $query);

echo $resultado;

?>