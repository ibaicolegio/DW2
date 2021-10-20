function limpiar() {
    document.getElementById("so1").checked="checked";
    document.getElementById("procesador1").checked="checked";
}
function enviar() {
    var procesador=document.getElementsByName("procesador");
    var so=document.getElementsByName("so");
    var mensaje="Ha selecionado el procesador ";
    for (const iterator of procesador) {
        if (iterator.checked) {
            mensaje+=iterator.value;
        }
    }
    mensaje+=" con sistema operativo ";
    for (const iterator of so) {
        if (iterator.checked) {
            mensaje+=iterator.value;
        }
    }
    alert(mensaje);
}