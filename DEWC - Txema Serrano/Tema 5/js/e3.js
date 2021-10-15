function limpiar() {
    document.getElementById("procesador").options[2].selected="true";
    document.getElementById("so").options[1].selected="true";
}
function enviar() {
    var procesador=document.getElementById("procesador");
    var proc=procesador.options[procesador.selectedIndex].value;
    var so=document.getElementById("so").selectedOptions;
    var mensaje="Ha selecionado el procesador "+
    proc+" con sistema operativo ";
    if (so.length>1) {
        for (const iterator of so) {
            mensaje+=iterator.text+", ";
        }
    }
    mensaje=mensaje.slice(0,-2).replace(/,(?=[^,]*$)/, " y ");;
    alert(mensaje);
}