function comprobarDNI() {
    var dni=document.getElementById("dni");
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    if (dni.value.length!=8) {
        dni.focus();
    } else {
        var posicion = dni.value%23;
        document.getElementById("letra").value=letras[posicion];
        document.getElementById("letra").style.backgroundColor="green";
    }
}