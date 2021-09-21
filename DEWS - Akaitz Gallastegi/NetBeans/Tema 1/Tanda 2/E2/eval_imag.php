<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
            $cantidad=$_POST["cantidad"];
            $directorio= opendir("DIRIMG");
            
            $agregados=rutas_imag($directorio);
            print_r($agregados);
            //$cantidad=array(array_rands($rutas, $cantidad));
            
            function rutas_imag($carpeta) {
                $cant=0;
                $agregados=array();
                $arrext=array("jpg","png","tiff");
                while ($nombre=readdir($carpeta)) {
                    $separado=explode(".", $nombre);
                    $extension=$separado[1];
                    if (in_array($extension, $arrext)) {
                        array_push($agregados,$nombre);
                    }
                }
                return $agregados;
            }
/*
            function array_rands($array, $cantidad) {
                $arrayNuevo=array();
                $numerosRandom=array();
                for ($i = 0; $i < $cantidad; $i++) {
                    do{
                        $numero= random_int(0,cant($array));
                    }while(in_array($numero, $numeroRandom));
                    array_push($arrayNuevo, $array[$numero]);
                }
                return $arrayNuevo;
            }        */
        ?>
        <form name="form" action="eval_imag.php" method="POST">
            <table>
                <?php
                $cant=0;
                while ($cant<$cantidad) {
                    echo "<tr>"
                            . "<td><img src='DIRIMG/".$agregados[$cant]."' width='100px' heigth='100px'></td>"
                            . "<td><input type='checkbox' name='Me gusta' id=".$agregados[$cant]." value=".$agregados[$cant]."/></td>"
                            . "<td><label for=".$agregados[$cant].">Me gusta</label></td>"
                        . "</tr>";
                    $cant++;
                }      
                ?>
            </table>
            <input type='submit' value='ENVIAR VALORACIONES'>
        </form>
    </body>
</html>
