<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <table>
            <?php
                $rutasImagenes=array("img/img1.png","img/img2.png","img/img3.png","img/img4.png","img/img5.png","img/img6.png","img/img7.png","img/img8.png");
                $i=1;
                foreach ($rutasImagenes as $key => $value) {
                    while ($i< count($rutasImagenes)) {
                        if (md5($value)== md5($rutasImagenes[$i])) {
                            unset($rutasImagenes[$i]);
                        }
                    }
                    $i++;
                }
                for ($index = 0; $index < count($rutasImagenes); $index++) {
                    echo"<tr>";
                    for ($index1 = 0; $index1 < 3; $index1++) {
                        echo "<td><a href=$rutasImagenes[$index]><img src=$rutasImagenes[$index]/></a></td>";
                    }
                    echo"</tr>";
                }
            ?>
        </table>
    </body>
</html>
