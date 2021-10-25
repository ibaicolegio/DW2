<?php
    require_once 'cabecera.php';
    $err="";
    $cor="";
    $cor=$_POST['usuario'];
?>
<script src="js/registro.js"></script>
<h2>LOGIN</h2>
<p style="color: green"><?php echo $cor;?></p>
<p style="color: red"><?php echo $err;?></p>
<form action="" method="POST" enctype="multipart/form-data">
    <table border="1">
        <tr>
            <td><label for="usuario">Usuario</label></td>
            <td><input type="text" id="usuario" name="usuario"></td>
        </tr>
        <tr>
            <td><label for="pass">Password</label></td>
            <td><input type="text" id="pass" name="pass"></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="submit" name="login" value="Login!"></td>
        </tr>
    </table>
</form>
<p>No tienes una cuenta? <a href="registro.php">Regístrate!</a></p>
<?php
    require_once 'pie.php';
?>