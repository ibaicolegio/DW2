var cadena="¡Hola!";
var longitud=cadena.length;
var respuesta=
    `<h1>Manejando cadenas</h1>
    <p>La variable 'cadena' contiene el siguiente texto: ${cadena}</p>
    <p>Su longitud es de ${longitud} caracteres distribuidos segun se indica en la siguiente tabla</p>
    <table border="1">
        <tr>
            <td>Posición</td>
    `;
document.write(respuesta);
for (let index = 0; index < cadena.length; index++) {
    document.write("<td>"+index+"</td>");
}
document.write("</tr><tr><td>Contenido</td>");
for (let index = 0; index < cadena.length; index++) {
    document.write("<td>"+cadena.charAt(index)+"</td>");
}
document.write("</tr></table>");
