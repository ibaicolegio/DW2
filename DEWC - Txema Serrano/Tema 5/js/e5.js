function enviar() {
    var dni=document.getElementById("dni");
    var email=document.getElementById("email");
    var cp=document.getElementById("email");
    var fecha=document.getElementById("fecha");

    //DNI
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var dniNumeros=parseInt(dni.value.substring(0,8));
    var dniLetra=dni.value.substring(8,9);
    var letraCorrecta=letras[dniNumeros%23];
    if (dniNumeros== /\d{8}[a-z A-Z]/) {
        alert("DNI incorrecto");
    } else {
        if(dniLetra.toUpperCase() != letraCorrecta){
            alert("DNI incorrecto");
        }
    }
    
    //Email
    

}