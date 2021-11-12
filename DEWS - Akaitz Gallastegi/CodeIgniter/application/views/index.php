<?=form_open("C_prestado/prestado/$genero");?>
    <table border="1">
        <thead>
            <tr>
                <th></th>
                <th>LIBRO</th>
                <th>AUTOR</th>
            </tr>
        </thead>
        <tbody>
            <?php 
                foreach ($libros as $value) {
                    echo "<tr>";
                        echo "<td>".form_checkbox("prestado", $value['idlibro'])."</td>";
                        echo "<td>".$value['titulo']."</td>";
                        echo "<td>".$value['nombre']."</td>";
                    echo "</tr>";
                } 
            ?>
            <tr>
                <td colspan="3"><?= form_submit("enviar", "PRESTAR LIBROS") ?></td>
            </tr>
        </tbody>
    </table>
<?=form_close();?>

