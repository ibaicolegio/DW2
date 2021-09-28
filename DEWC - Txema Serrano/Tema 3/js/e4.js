function copiar() {
    var txtOrigen=document.getElementsByTagName("origen").value;
    var destino=document.getElementsByName("input")[1];
    destino.value=txtOrigen;
}