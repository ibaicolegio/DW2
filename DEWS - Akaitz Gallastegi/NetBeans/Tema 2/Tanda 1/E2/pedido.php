<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
            session_start();
            if (!isset($_SESSION['nombre'])) {
                header('Location: entrada.php');
            }
            if(isset($_GET['Primero'])){
                $_SESSION['primero']=$_POST['plato'];
            }
            if(isset($_GET['Segundo'])){
                $_SESSION['segundo']=$_POST['plato'];
            }
            if(isset($_GET['Postre'])){
                $_SESSION['postre']=$_POST['plato'];
            }
            if(isset($_GET['Bebida'])){
                $_SESSION['bebida']=$_POST['plato'];
            }
            $eleccion="<h2>SU ELECCIÓN:</h2>";
            if(isset($_SESSION['primero'])){
                $primero=$_SESSION['primero'];
                $eleccion="Primer plato: $primero<br>";
            }
            if(isset($_SESSION['segundo'])){
                $segundo=$_SESSION['segundo'];
                $eleccion="Segundo plato: $segundo<br>";
            }
            if(isset($_SESSION['postre'])){
                $postre=$_SESSION['postre'];
                $eleccion="Postre: $postre<br>";
            }
            if(isset($_SESSION['bebida'])){
                $bebida=$_SESSION['bebida'];
                $eleccion="Bebida: $bebida<br>";
            }
        ?>
        <a href="pedidoplato.php?plato=Primero">PRIMER PLATO</a><br>
        <a href="pedidoplato.php?plato=Segundo">SEGUNDO PLATO</a><br>
        <a href="pedidoplato.php?plato=Postre">POSTRE</a><br>
        <a href="pedidoplato.php?plato=Bebida">BEBIDA</a>
        <?php $eleccion ?>
    </body>
</html>
