<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
            $dia=date("j");
            $mes=date("F");
            $diaSemana=date("l");
            $anyo=date("Y");
            $diaAnyo=date("z")+1;
            $diasRestantes=365-$diaAnyo;
            echo("$dia  $mes  $anyo,  $diaSemana <br>");
            echo("$diasRestantes <br>");
            
            $p1=["hola "+"que "+"tal"];
            $cadena=$p1[0] + $p1[1] + $p1[2];
            echo("$cadena <br>");


        ?>
    </body>
</html>
