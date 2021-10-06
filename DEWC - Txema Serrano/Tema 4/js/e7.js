function validarDNI() {
    var letras = new Array('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 
        'C', 'K', 'E', 'T'); 
    var dni=document.getElementById("dni").value;
    var numeros=dni.substring(0,8);
    var letra=dni.substring(8,9);
    document.getElementById("error").innerHTML="";
    document.getElementById("correcto").innerHTML="";
    if (isNaN(numeros) || numeros.toString().length!=8 || !(/[a-zA-Z]/).test(letra)) {
        document.getElementById("error").innerHTML="No son 8 numeros y 1 letra";
    } else {
        document.getElementById("error").innerHTML="";
        var resto=numeros%23;
        if (letra.toUpperCase()!=letras[resto]) {
            document.getElementById("error").innerHTML="La letra no es correcta";
        } else {
            document.getElementById("correcto").innerHTML="El DNI esta bien";
        }
    }

}