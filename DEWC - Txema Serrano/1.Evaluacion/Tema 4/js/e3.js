window.onload=function () {
    do {
        var numero=parseInt(prompt("Introduce un numero"));
    } while (isNaN(numero));
    window.alert(numeroEntero(numero));
}

function numeroEntero(num) {
    if(num%2==0){
        return "par";
    } else {
        return "impar";
    }
}