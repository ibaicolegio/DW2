window.onload=function () {
    do {
        var fechaString=prompt("Introduce una fecha (dd/mm/aaaa)");
        fechaSeparada=fechaString.split("/");
        fecha=new Date(fechaSeparada[2],fechaSeparada[1],fechaSeparada[0]);
    } while (!(fecha instanceof Date && !isNaN(fecha)));
    var tabla="<table border=1><tr><td>el año...</td>";
    for (let i = 4; i >= 0; i--) {
        tabla.concat("<td>"+fecha.getFullYear()-i+"</td>");
    }
    tabla.concat("</tr><tr><td>era un...</td>");
    for (let i = 4; i >= 0; i--) {
        var fechaNueva=new Date(fecha.getDate()+" "+fecha.getMonth()+" "+fecha.getFullYear()-i);
        tabla.concat("<td>"+fechaNueva.-i+"</td>");
    }
    tabla.concat("</tr></table>");
    var contenido="<h1>VALIDANDO FECHAS</h1>"+
        "Fecha introducida: "+fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getFullYear()+"<br>"
        "Ese mismo dia en...<br>"+
        tabla;
}