<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
            session_start();
            //Todas las preguntas
            $preguntas=array(
                "GEOGRAFIA" => array(
                    "Actual presodente de EEUU" => array(
                        "Biden","Obama","Reagan","Trump"
                    ),
                    "Capital de Francia" => array(
                        "Paris","Kiev","Bruselas","Madrid"
                    )
                ),
                "CINE" => array(
                    "Director de Pulp Fiction" => array(
                        "Tarantino","Kubrick"
                    ),
                    "Lugar de exilio de Cahrles Champlin" => array(
                        "Suiza", "Canada"
                    ),
                    "Director de Psicosis" => array(
                        "Hitchcock","Scorsesse","Tarantino","Allen"
                    )
                ),
                "CIENCIAS" => array(
                    "Formula de la sal" => array(
                        "NaCl","SaL","Co2"
                    )
                ));
            //Preguntas selecionadas y NPregunta
            if(!isset($_SESSION['preguntas'])){
                $_SESSION['preguntas']=array();
                $_SESSION['nPregunta']=array();
                $_SESSION['aciertos']=array();
                if(isset($_SESSION['tipo'])){
                    $tipos=$_SESSION['tipo'];
                    foreach ($tipos as $key => $value) {
                        if(isset($preguntas[$value])){
                            $_SESSION['preguntas'][$value]=$preguntas[$value];
                            $_SESSION['nPregunta'][$value]=1;
                            $_SESSION['aciertos'][$value]=0;
                        }
                    }
                }
            }
            //Juego
            foreach ($_SESSION['preguntas'] as $key => $value) {
                if(isset($_POST[$key])){
                    print_r($key);
                    foreach ($value as $key2 => $value2) {
                        
                        $_SESSION['nPregunta'][$key]++;
                        foreach ($value2 as $key3 => $value3) {
                            if($key==$value3){
                                $_SESSION['aciertos'][$key]++;
                            }
                            break;
                        }
                    }
                }
                
            }
            //Tabla
            $tabla="<table border='1'><tr>"
                        . "<th>TIPO</th>"
                        . "<th>NºPREGUNTA</th>"
                        . "<th>PREGUNTA</th>"
                        . "<th>RESPUESTAS</th>"
                        . "<th></th>"
                        . "<th></th>"
                    . "</tr>";
            if(isset($_SESSION['preguntas'])){
                foreach ($_SESSION['preguntas'] as $key => $value) {
                    $numPregunta=$_SESSION['nPregunta'][$key];
                    $tabla.="<tr><td>$key</td>";
                    if($numPregunta<=$_SESSION['cantidad'][$key]){
                        $tabla.= "<td>".$numPregunta."</td>";
                        $cont=0;
                        foreach ($value as $key2 => $value2) {
                            if($cont==$numPregunta-1){
                                $tabla.= "<td>$key2</td><td>";
                                foreach ($value2 as $key3 => $value3) {
                                    $tabla.="<input id='$value3' name='$key2' type='radio'>"
                                        . "<label for='$value3'>$value3</label>";
                                }
                                $tabla.="</td>";
                            }
                            $cont++;
                        }
                        $tabla.="<td><input type='submit' name='$key' value='ENVIAR' style='color: white; background-color: dodgerblue;'></td>";
                    } else{
                        $tabla.="<td></td><td></td><td></td><td></td>";
                    }
                    $tabla.="<td>".$_SESSION['aciertos'][$key]." aciertos</td></tr>";
                }
            }
            $tabla.= "</table>";
        ?>
        <form action="jugar.php" method="POST" enctype="multipart/form-data">
            <?php echo $tabla; ?>
        </form>

    </body>
</html>
