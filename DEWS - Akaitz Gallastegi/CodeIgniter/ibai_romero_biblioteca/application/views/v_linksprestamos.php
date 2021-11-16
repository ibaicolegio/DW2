<?php
if(isset($prestamos)){
    foreach ($prestamos as $value) {
        $idprestamo=$value->idprestamo;
        $fecha=$value->fecha;
        echo "Prestamo Nº$idprestamo: $fecha <a href='".site_url()."/C_librosPrestados/devolver/".$idprestamo."'>Devolver</a><br>";
    }   
}
if($this->session->has_userdata('devoluciones')){
    print_r($this->session->userdata('devoluciones'));
    echo "<br><a href='". site_url()."/C_librosPrestados/grabarDevoluciones'>GRABAR DEVOLUCIONES</a>";
}
if(isset($cantidad)){
    echo "Se han realizado $cantidad devoluciones";
}
