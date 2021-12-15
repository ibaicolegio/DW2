<?php
if (!empty($_POST['user'])) {
    require_once("conexion.php");
    $user = $_POST["user"];
    $pass = $_POST["pass"];

    // INSERT data into database
    $query = $pdo->prepare("INSERT INTO usuarios
        VALUES ('$user', '$pass', '$email');");
    $query->execute();
    header('Location: ../login.html');
} else {
    header('Location: ../registro.html');
}
?>