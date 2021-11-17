var fechaString;
var fecha;

window.onload=function () {
    const diaSemana=new Array("Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado");
    do {
        fechaString=prompt("Introduce una fecha (dd/mm/aaaa)");
    } while (fechaValida());
    var tabla="<table border=1 style='margin: auto'><tr><td>el año...</td>";
    for (let i = 4; i >= 0; i--) {
        tabla=tabla.concat("<td>"+(fecha.getFullYear()-i)+"</td>");
    }
    tabla=tabla.concat("</tr><tr><td>era un...</td>");
    for (let i = 4; i >= 0; i--) {
        var fechaNueva=new Date(fecha.getFullYear()-i,fecha.getMonth()-1,fecha.getDate());
        tabla=tabla.concat("<td>"+diaSemana[fechaNueva.getDay()]+"</td>");
    }
    tabla=tabla.concat("</tr></table>");
    var contenido="<h1>VALIDANDO FECHAS</h1>"+
        "Fecha introducida: "+fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getFullYear()+"<br>"
        "Ese mismo dia en...<br>";
    contenido=contenido.concat(tabla);
    document.getElementById('body').innerHTML=contenido;
}

function fechaValida() {
    fechaSeparada=fechaString.split("/");
    fecha=new Date(fechaSeparada[2],fechaSeparada[1],fechaSeparada[0]);
    return (!(fecha instanceof Date && !isNaN(fecha)));
}