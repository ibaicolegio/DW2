function informacion() {
    var e=window.event;
    var posXPag=e.clientX;
    var posYPag=e.clientY;
    var posXNav=e.pageX;
    var posYNav=e.pageY;
    var caracter=e.key;
    var codigo=e.keyCode;
    if(posXPag!=null){
        var mensaje=new Array("Ratón", "Navegador ["+posXPag+","+posYPag+"]", "Pagina ["+posXNav+","+posYNav+"]");
        document.body.style.backgroundColor="white";
    } else {
        var mensaje=new Array("Teclado", "Carácter ["+caracter+"]", "Código ["+codigo+"]");
        document.body.style.backgroundColor="#CCE6FF";
    }
    muestraInformacion(mensaje);
}