<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
            session_start();
            $_SESSION['tipos']=array(
                "GEOGRAFIA" => array(
                    "Actual presodente de EEUU" => array(
                        "Reagan","Obama","Trump"
                    ),
                    "Capital de Francia" => array(
                        "Kiev","Paris","Bruselas","Madrid"
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
                        "Tarantino","Hitchcock","Scorsesse","Allen"
                    )
                ),
                "CIENCIAS" => array(
                    "Formula de la sal" => array(
                        "NaCl","SaL","Co2"
                    )
                ));
        ?>
    </body>
</html>
