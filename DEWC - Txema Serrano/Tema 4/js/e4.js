window.onload=function () {
    do {
        var n1=parseInt(prompt("Numero 1:"));
    } while (isNaN(n1));
    do {
        var n2=parseInt(prompt("Numero 2:"));
    } while (isNaN(n2));
    var resultado=suma(n1, n2);
    document.write("n1= "+n1+"<br>n2= "+n2+"<br>Resultado= "+resultado);
}
function suma(n1, n2) {
    var resultado=n1+n2;
    return resultado;
}