<?php

$user = $_POST['usuario'];
$contra = $_POST['contrasena'];

if(empty($user) && empty($contra)){
    echo 'No hay datos';
}else{
    echo 'Hay datos';
}

?>