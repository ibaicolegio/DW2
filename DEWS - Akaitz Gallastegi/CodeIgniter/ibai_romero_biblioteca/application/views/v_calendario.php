<?php
$month = date('m');
$year = date('y');
echo $this->calendar->generate($year,$month,$dias);
if(isset($titulos)){
?>
<table border="1">
<?php  
    echo "<tr><th>Dia: $dia</th></tr>";
    foreach ($titulos as $value) {
        echo "<tr><td>".$value->titulo."</td></tr>";
    }
}
?>
</table>
