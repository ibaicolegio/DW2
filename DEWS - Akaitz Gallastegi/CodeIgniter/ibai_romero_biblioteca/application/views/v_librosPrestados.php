<?php
$opciones=array();;
foreach ($libros as $value) {
    $titulo=$value->titulo;
    $idLibro=$value->idlibro;
    $opciones[$idLibro]=$titulo;
}
echo form_open("C_librosPrestados/libro");
if($this->session->has_userdata('idLibro')){
    echo form_dropdown("librosPrestados", $opciones, $this->session->userdata('idLibro'));
} else {
    echo form_dropdown("librosPrestados", $opciones);
}
echo form_submit('enviar', 'VER PRESTAMOS');
echo form_close();