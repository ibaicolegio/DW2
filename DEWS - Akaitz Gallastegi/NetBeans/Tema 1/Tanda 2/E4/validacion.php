<?php
    $nombre=$_POST['nombre'];
    $pass=$_POST['pass'];
    $gestor=fopen("usuarios.txt", "r");
    while ($linea = fgets($gestor)) {
        $usuario = explode(";", $linea);
        if ($usuario[0]==$nombre && $usuario[1]!=$pass) {
            header("Location: login.php?nombre=".$usuario[0]);
            exit();
        }
    }
?>

