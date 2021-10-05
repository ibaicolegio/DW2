window.onload=function () {
    var palabras = new Array( 'botella', 'zeta', 'androide', 'minuto')
    palabras.sort();
    mensaje=palabras.join(" - ");
    document.getElementById("mensaje").innerHTML=mensaje;
}