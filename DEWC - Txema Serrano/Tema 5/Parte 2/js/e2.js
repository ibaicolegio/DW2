function informacion() {
    var e=window.event;
    var posXPag=e.clientX;
    var posYPag=e.clientY;
    var posXNav=e.pageX;
    var posYNav=e.pageY;
    var mensaje=new Array("Ratón", "Navegador ["+posXPag+","+posYPag+"]", "Pagina ["+posXNav+","+posYNav+"]");
    muestraInformacion(mensaje);
}