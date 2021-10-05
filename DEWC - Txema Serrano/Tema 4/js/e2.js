window.onload=function () {
    var palabras=new Array();
    do {
        var palabra=prompt("Introduce palabra");
    } while (palabra=="");
    while(palabra!=""){
        palabras.push(palabra);
        palabra=prompt("Introduce palabra");
    }
    var primera=palabras[0];
    var cant=palabras.length;
    var ultima=palabras[cant-1];
    var ordenadas=palabras.sort();
    var mensaje="Primera palabra= "+primera+
        "\r\nUltima palabra= "+ultima+
        "\r\nCantidad de palabras= "+cant+
        "\r\nOrdenadas alfabeticamente= "+ordenadas;
    window.alert(mensaje);
}