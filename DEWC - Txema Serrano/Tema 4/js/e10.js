function tipoLetras(texto) {
    var ventana = window.open("", "ventana", "width=1, height=1");
    if(!(/^[a-zA-Z()]+$/.test(texto.replaceAll(" ",""))))
        ventana.document.write("No es texto");
    else if(texto==texto.toUpperCase())
        ventana.document.write("Texto en mayúsculas");
    else if(texto==texto.toLowerCase())
        ventana.document.write("Texto en minúsculas");
    else
        ventana.document.write("Texto en mayúsculas y minúsculas");
    ventana.document.write("<br><br><br><button style='position: absolute; right: 0; bottom=0;' onclick='window.close()'>Cerrar</button>")
}