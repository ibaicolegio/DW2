<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
            $cantidad=$_POST["cantidad"];
            $directorio= opendir("DIRIMG");
            $cant=0;
            $cantImg=0;
            $agregados=array();
            while ($cant<$cantidad && $nombre=readdir($directorio)) {
                if ($nombre!="." && $nombre!="..") {
                    array_push($agregados,$nombre);
                    $cantImg++;
                }
            }
            $numeros=array();
            while ($cant< $cantImg) {
                do{
                    $numero= random_int(0, $cantImg-1);
                }while(in_array($numero, $numeros));
                array_push($numeros, $numero);
                $cant++;
            }
            $cant=0;
            
        ?>
        <form name="form" action="eval_imag.php" method="POST">
            <table>
                <?php
                while ($cant<$cantidad) {
                    echo "<tr>"
                            . "<td><img src='DIRIMG/".$agregados[$numeros[$cant]]."' width='100px' heigth='100px'></td>"
                            . "<td><input type='checkbox' name='Me gusta' id=".$agregados[$numeros[$cant]]." value=".$agregados[$numeros[$cant]]."/></td>"
                            . "<td><label for=".$agregados[$numeros[$cant]].">Me gusta</label></td>"
                        . "</tr>";
                    $cant++;
                }      
                ?>
            </table>
            <input type='submit' value='ENVIAR VALORACIONES'>
        </form>
    </body>
</html>
