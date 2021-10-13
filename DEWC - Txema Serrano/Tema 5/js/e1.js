function enviar() {
    var opciones=document.getElementsByClassName("opcion");
    var mensaje="Ha selecionado las opciones:\n";
    console.log(opciones);
    for (const element of opciones) {
        console.log(element);
        if (element.checked==true) {
            mensaje+="*"+element.value+"\n";
        }
    }
    window.alert(mensaje);
}
function limpiar() {
    var opciones=document.getElementsByClassName("opcion");
    for (const iterator of opciones) {
        iterator.checked="";
    }
}