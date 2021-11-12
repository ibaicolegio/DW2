<?php 
    $hojaestilos=base_url()."css/stylesheet.css";
?>
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="<?= $hojaestilos ?>"  type="text/css" />
    </head>
    <body>
        <div id="header">
            <h1>PRESTAMOS</h1>
        </div>
        <div id="menu">

        </div>
        <div id="container">
            <div id="bar">
                <ul>
                    <?php
                        foreach ($generos as $value) {
                                $genero=$value->genero;
                                echo "<li><a href=".site_url()."/C_genero/genero/$genero>".$genero."</a></li>";
                        }
                    ?>
                </ul>
            </div>
            <div id="main">
