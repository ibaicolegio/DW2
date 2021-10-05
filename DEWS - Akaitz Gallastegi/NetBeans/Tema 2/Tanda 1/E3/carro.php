<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
            session_start();
            $prodPrecios=array("Prod1" => 10, "Prod2" => 20, "Prod3" => 10, "Prod4" => 30);
            if(!isset($_SESSION['productos'])){
                $_SESSION['productos']=array();
                foreach ($prodPrecios as $key => $value) {
                    $_SESSION['productos'][$key]=0;
                }
            }
            $formulario="";
            foreach ($prodPrecios as $key => $value) {
                $formulario.="<tr>";
                $formulario.="<td><input type='checkbox' id=$key name=$key></td>";
                $formulario.="<td><label for=$key>$key</label></td>";
                $formulario.="<td>$value €</td>";
                $formulario.="<td><select name='select$key'>";
                for ($i = 0; $i <= 10; $i++) {
                        $formulario.="<option value=$i>$i</option>";
                }
                $formulario.="</select></td>";
                $formulario.="<td>".$_SESSION['productos'][$key]." uds pedidas</td>";
                $formulario.="</tr>";
            }
        ?>
        <form action="#" method="POST" enctype="multipart/form-data">
            <table border="0">
                <thead>
                    <tr>
                        <th></th>
                        <th>PRODUCTO</th>
                        <th>PRECIO</th>
                        <th>ELIJA CANTIDAD</th>
                        <th>PEDIDO ACTUAL</th>
                    </tr>
                </thead>
                <tbody>
                    <?php echo $formulario ?>
                </tbody>
                <tfoot>
                    <td colspan="5">
                        <input type="submit" name="add" value="AÑADIR UNIDADES">
                        <input type="submit" name="fin" value="FORMALIZAR COMPRA">
                        <input type="reset" value="VACIAR CARRO"> 
                    </td>
                </tfoot>
            </table>
        </form>
    </body>
</html>
