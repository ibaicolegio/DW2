<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
            include_once 'libmenu.php';
            session_start();
            if (!isset($_SESSION['nombre'])) {
                header('Location: entrada.php');
            }
            $opciones;
            if (isset($_GET['plato'])){
                $tipo=$_GET['plato'];
                $platos=damePlatos($tipo);
                foreach ($array as $plato) {
                    $pvp= damePrecio($plato);
                    $precio= (100-dameDcto($_SESSION['nombre']))*$pvp;
                    $opciones.="<option value=$value>$value - $precio</option>";
                }
            }
        ?>
        <p>Elija un <?php $tipo?></p><br>
        <form action="pedido.php?<?php $tipo?>" method="POST" enctype="multipart/form-data">
            <select name="plato">
                <?php $opciones ?>
            </select>
            <input type="submit" name="plato" value="ELEGIR <?php $tipo?>">
        </form>
    </body>
</html>
