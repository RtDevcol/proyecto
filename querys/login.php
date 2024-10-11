<?php
include('../config/conexion.php');

$query = "SELECT * FROM usuarios";
$resultado = @mysqli_query($conexion, $query);

// Verifica si la consulta fue exitosa
if ($resultado) {
    // Itera sobre los resultados y muestra cada fila
    while ($fila = mysqli_fetch_assoc($resultado)) {
        // Aquí puedes mostrar los campos que desees. Por ejemplo:
        echo "ID: " . $fila['id'] . "<br>";
        echo "Usuario: " . $fila['usuario'] . "<br>";
        echo "Contraseña: " . $fila['password'] . "<br><br>";
        echo "Nivel: " . $fila['tipo'] . "<br><br>";
    }
    // Libera el resultado
    mysqli_free_result($resultado);
} else {
    // Si hubo un error en la consulta, lo puedes mostrar aquí
    echo "Error en la consulta: " . mysqli_error($conexion);
}

// Cierra la conexión
mysqli_close($conexion);

?>