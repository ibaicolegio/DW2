<?php  
    include_once "config.php";
    function conexion(){
        $con = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);
        if (mysqli_connect_errno()) {  
            echo "Imposible conectarse a la base de datos: " . mysqli_connect_error();  
        } else {
            mysqli_set_charset  ($con, "UTF8");
            return $con;
        }
    }
    
    function items($con){
        $catsql = "SELECT id FROM item";
        $catresult = mysqli_query($con,$catsql);
        $items=array();
        while($catrow = mysqli_fetch_assoc($catresult)) {
            array_push($items, $catrow['id']);
        }
        if(mysqli_errno($con)) die(mysqli_error($con));
        return $items;
    }

    function imagen($con,$idItem) {
        $catsql = "SELECT imagen FROM imagen where id_item=$idItem";
        $catresult = mysqli_query($con,$catsql);
        $catrow=mysqli_fetch_assoc($catresult);
        if(mysqli_errno($con)) die(mysqli_error($con));
        return $catrow['imagen'];
    }
    
    function nombreItem($con,$idItem) {
        $catsql = "SELECT nombre FROM item where id=$idItem;";
        $catresult = mysqli_query($con,$catsql);
        $catrow=mysqli_fetch_assoc($catresult);
        if(mysqli_errno($con)) die(mysqli_error($con));
        return $catrow['nombre'];
    }
    
    function cantPuja($con,$idItem) {
        $catsql = "SELECT COUNT(id) AS cant FROM puja where id_item=$idItem";
        $catresult = mysqli_query($con,$catsql);
        $catrow=mysqli_fetch_assoc($catresult);
        if(mysqli_errno($con)) die(mysqli_error($con));
        return $catrow['cant'];
    }
    
    function precioPuja($con,$idItem) {
        $catsql = "SELECT cantidad FROM puja where id_item=$idItem";
        $catresult = mysqli_query($con,$catsql);
        $catrow=mysqli_fetch_assoc($catresult);
        if(mysqli_errno($con)) die(mysqli_error($con));
        return $catrow['cantidad'];
    }
    
    function precioPartida($con,$idItem) {
        $catsql = "SELECT preciopartida FROM item where id=$idItem";
        $catresult = mysqli_query($con,$catsql);
        $catrow=mysqli_fetch_assoc($catresult);
        if(mysqli_errno($con)) die(mysqli_error($con));
        return $catrow['preciopartida'];
    }
    
    function fechaPuja($con,$idItem) {
        $catsql = "SELECT fechafin FROM item where id=$idItem";
        $catresult = mysqli_query($con,$catsql);
        $catrow=mysqli_fetch_assoc($catresult);
        if(mysqli_errno($con)) die(mysqli_error($con));
        return $catrow['fechafin'];
    }
    
    function nombre($con,$nombre) {
        $catsql = "SELECT count(username) as cont FROM usuario where username='$nombre';";
        $catresult = mysqli_query($con,$catsql);
        $catrow=mysqli_fetch_assoc($catresult);
        if(mysqli_errno($con)) die(mysqli_error($con));
        return $catrow['cont'];
    }
    
    function crearUsuario($con, $username, $nombre, $password, $cadenaverificacion, $email=""){
        $catsql = "INSERT INTO usuario(username, nombre, password, email, cadenaverificacion, activo, falso) values ('$username', '$nombre', '$password', '$email', '$cadenaverificacion', 1, 0)";
        $catresult = mysqli_query($con,$catsql);
        if(mysqli_errno($con)) die(mysqli_error($con));
        return mysqli_insert_id($con);
    }
    
    function iniciarSesion($con, $usuario, $contraseña) {
        $catsql = "SELECT count(username) as cont FROM usuario where username='$usuario' and password='$contraseña';";
        $catresult = mysqli_query($con,$catsql);
        $catrow=mysqli_fetch_assoc($catresult);
        if(mysqli_errno($con)) die(mysqli_error($con));
        return $catrow['cont'];
    }
?>

