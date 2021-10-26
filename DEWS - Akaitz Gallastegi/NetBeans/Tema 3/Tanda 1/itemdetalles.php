<?php
    require_once 'cabecera.php';
    if(!isset($_GET['item'])){
        header("Location: index.php");
    }
    $idItem = $_GET['item'];
    $imgs=imagenes($con,$idItem);
?>
<h2><?php echo nombreItem($con, $idItem) ?></h2>
<p>
    <b>Número de pujas:</b> <?php echo cantPuja($con,$idItem); ?> - 
    <b>Precio actual:</b> 
        <?php 
            if(precioPujaMasAlta($con, $idItem)!=null){
                echo  precioPujaMasAlta($con, $idItem);
            } else {
                echo precioPartida($con, $idItem);
            }
        ?>€ - 
    <b>Fecha fin para pujar:</b> <?php echo fechaPuja($con,$idItem); ?>
</p>
<?php
    foreach ($imgs as $value) {
        echo "<img src='".$value."' alt='".$value."' width='100' height='100'>";
    }
?>
<p><?php echo descripcionItem($con,$idItem) ?></p>
<h2>Pujar por este item</h2>
<?php if(!isset($_SESSION['id'])){ ?>
<p>Para pujar, debes autenticarte <a href="registro.php">aquí</a></p>
<?php } else { ?>
<p>Añade tu puja en el cuadro inferior:</p>
    <table border="1">
        <tr>
            <td><input type="text" id="precioPuja"></td>
            <td><input type="submit" value="¡Puja!"></td>
        </tr>
    </table>
<h2>Historial de la puja</h2>
<ul>
    
</ul>
<?php
}
    require_once 'pie.php';
?>



