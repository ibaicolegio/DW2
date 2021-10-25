<?php
    require_once 'cabecera.php';
?>
<h2>Items disponibles</h2>
<table border="1">
    <thead>
        <tr>
            <th>IMAGEN</th>
            <th>ITEM</th>
            <th>PUJAS</th>
            <th>PRECIO</th>
            <th>PUJAS HASTA</th>
        </tr>
    </thead>
    <tbody>
        <?php 
            $items= items($con);
            foreach ($items as $idItem) {
                echo "<tr>";
                    if(imagen($con,$idItem)!=null){
                        echo "<td>".imagen($con,$idItem)."</td>";
                    } else {
                        echo "<td>SIN IMAGEN</td>";
                    }
                    echo "<td><a href=itemdetalles.php?item=$idItem>".nombreItem($con, $idItem)."</td>";
                    echo "<td>". cantPuja($con, $idItem)."</td>";
                    if(precioPuja($con, $idItem)!=null){
                        echo "<td>". precioPuja($con, $idItem)."€</td>";
                    } else {
                        echo "<td>". precioPartida($con, $idItem)."€</td>";
                    }
                    echo "<td>". fechaPuja($con,$idItem)."</td>";
                echo "</tr>";
            }
        ?>
    </tbody>
</table>

<?php
    require_once 'pie.php';
?>

