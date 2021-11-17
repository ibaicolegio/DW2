function enviar() {
    var dni=document.getElementById("dni");
    var email=document.getElementById("email");
    var cp=document.getElementById("cp");
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
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var emailValue=email.value;
    if (emailValue==emailRegex) {
        alert("Email incorrecto");
    }

    //CP
    cpValue=cp.value;
    if(cpValue<1000 || cpValue>99999){
        alert("Codigo Postal incorrecto");
    }

    //Fecha
    var fechaValue=fecha.value;
    fechaActual=new Date();
    fechaSeparada=fechaValue.split("-");
    if (fechaValue=="") {
        alert("Fecha incorrecto");
    } else if (fechaSeparada[0]>fechaActual.getFullYear()) {
        alert("Año incorrecto");
    } else if(fechaSeparada[0]==fechaActual.getFullYear() && fechaSeparada[1]>fechaActual.getMonth()+1){
        alert("Mes incorrecto");
    } else if(fechaSeparada[0]==fechaActual.getFullYear() && fechaSeparada[1]==fechaActual.getMonth()+1 && fechaSeparada[2]>fechaActual.getDate()){
        alert("Dia incorrecto");
    }
   
}