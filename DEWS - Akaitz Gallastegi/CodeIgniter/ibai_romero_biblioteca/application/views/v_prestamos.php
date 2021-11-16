<?php
if(isset($prestado) and $prestado!=null){
    echo "<h2>LIBROS PRESTADOS</h2>";
    echo "<ul>";
    foreach ($prestado as $value) {
        echo "<li>$value</li>";
    }
    echo "</ul>";
}
if(isset($noPrestado) and $noPrestado!=null){
    echo "<h2>LIBROS NO PRESTADOS</h2>";
    echo "<ul>";
    foreach ($noPrestado as $value2) {
        echo "<li>$value2</li>";
    }
    echo "</ul>";  
    
}

echo $this->calendar->generate();
?>
