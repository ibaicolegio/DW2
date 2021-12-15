<?php

    $servidor = "mysql:dbname=apuestas;host=localhost;";
    $user = "dw2";
    $pass = "dw2";
    try {
        $pdo = new PDO($servidor, $user, $pass,
            array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    } catch (PDOException $e){
        echo "conexion fallida" .$e->getMessage();
    }