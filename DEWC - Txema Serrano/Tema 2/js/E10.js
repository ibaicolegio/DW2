function abrirVentanas(cant) {
    var ventanas=[];
    var left = (screen.width/2)-(200/2);
    var top = (screen.height/2)-(200/2);
    for (let num = 1; num <= cant; num++) {
        var ventana = window.open("","Ventana"+num,"scrollbar=no,width=200,height=200, left="+left+", top="+top);
        ventanas.push(ventana);
        ventanas[num-1].document.write("<button type="+"button"+" onclick="+"javascript:window.close()"+">Cerrar</button>");
    }
    
}