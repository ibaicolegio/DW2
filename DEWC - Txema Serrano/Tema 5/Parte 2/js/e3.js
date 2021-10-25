function informacion() {
    console.log("si");
    var tamanyoVentana=tamanoVentanaNavegador();
    var e=window.event;
    var posXPag=e.clientX;
    var posYPag=e.clientY;
    var mensaje=new Array();
    mensaje[0]="Zona";
    if(posXPag<tamanyoVentana[0]/2 && posYPag<tamanyoVentana[1]/2){
        mensaje[1]="Arriba, Izquierda";
    } else if(posXPag<tamanyoVentana[0]/2 && posYPag>tamanyoVentana[1]/2){
        mensaje[1]="Abajo, Izquierda";
    } else if(posXPag>tamanyoVentana[0]/2 && posYPag<tamanyoVentana[1]/2){
        mensaje[1]="Arriba, Derecha";
    } else if(posXPag>tamanyoVentana[0]/2 && posYPag>tamanyoVentana[1]/2){
        mensaje[1]="Abajo, Derecha";
    } else {
        mensaje[1]="Medio";
    }
    muestraInformacion(mensaje);
}