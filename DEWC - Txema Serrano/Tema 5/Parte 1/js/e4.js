var anterior="";
function comprobarDNI() {
    var dni=document.getElementById("dni");
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    if (dni.value=="") {
        dni.focus();
    }
    else if (dni.value.length!=8) {
        dni.focus();
        if (anterior!=dni.value) {
            anterior=dni.value
            alert("Deben ser 8 numeros");
        }
        
    } else {
        var posicion = dni.value%23;
        document.getElementById("letra").value=letras[posicion];
        document.getElementById("letra").style.backgroundColor="green";
    }
}

function comprobarNumMaxCaracteres() {
    var maxCaracteres=document.getElementById("maxCaracteres");
    var valor=maxCaracteres.value;
    console.log(isNaN(valor));
    var opcion=document.getElementById("opinion");
    opcion.maxLength=valor;
    if (opcion.maxLength<opcion.value.length) {
        opcion.value=opcion.value.substring(0,opcion.maxLength);
    }
}

function enviar() {
    var nombre=document.getElementById("nombre");
    var dni=document.getElementById("dni");
    var clave=document.getElementById("clave");
    var genero=document.getElementById("genero");
    var sexo=document.getElementsByName("sexo");
    var provincia=document.getElementById("provincia");
    var seleccionado=false;
    if (nombre.value!="") {
        nombre.style.backgroundColor="white";
        if(dni.value!=""){
            dni.style.backgroundColor="white";
            if (clave.value!="") {
                clave.style.backgroundColor="white";
                for (const iterator of sexo) {
                    if (iterator.checked) {
                        genero.style.backgroundColor="white";
                        seleccionado=true;
                        if(provincia.value>0){
                            provincia.style.backgroundColor="white";
                            datosFormulario();
                        } else {
                            alert("No has seleccionado la provincia");
                            provincia.style.backgroundColor="red";
                        }
                    }
                }
                if (!seleccionado) {
                    alert("No has seleccionado el sexo");
                    genero.style.backgroundColor="red";
                }
            } else {
                alert("No has introducido la clave");
                clave.style.backgroundColor="red";
            }
        }else{
            alert("No has introducido el dni");
            dni.style.backgroundColor="red";
        }
    } else {
        alert("No has introducido el nombre");
        nombre.style.backgroundColor="red";
    }
}

function datosFormulario() {
    //document.getElementById("enviar").disabled="disabled";
    var nombre=document.getElementById("nombre");
    var dni=document.getElementById("dni");
    var clave=document.getElementById("clave");
    var provincia=document.getElementById("provincia");
    var sexos=document.getElementsByName("sexo");
    var sexo="";
    for (const iterator of sexos) {
        if (iterator.checked) {
            sexo=iterator;
        }
    }
    //Opcionales
    var opinion=document.getElementById("opinion");
    var longitud=document.getElementById("maxCaracteres");
    var mayorDeEdad=document.getElementById("mayorEdad");
    var sueldos=document.getElementsByName("sueldo");
    var fichero=document.getElementById("fichero");
    var hobbiess=document.getElementById("hobbies");
    var sueldo="";
    var hobbies="";
    for (const iterator of sueldos) {
        if (iterator.checked) {
            sueldo=iterator;
        }
    }
    for (const iterator of hobbiess) {
        if (iterator.selected) {
            hobbies+=iterator.innerHTML+", ";
        }
    }
    hobbies=hobbies.slice(0,-2).replace(/,(?=[^,]*$)/, " y ");
    if (mayorDeEdad.checked) {
        document.getElementById("txtMayorDeEdad").style.display="block";
    } else {
        document.getElementById("txtMenorDeEdad").style.display="block";
    }

    if (opinion.value!="") {
        document.getElementById("txtOpinion").style.display="block";
        document.getElementById("txtOpinion").innerHTML+=opinion.value;
    }
    if (longitud.value!="") {
        document.getElementById("txtLongitud").style.display="block";
        document.getElementById("txtLongitud").innerHTML+=longitud.value;
    }
    if (sueldo!="") {
        document.getElementById("txtSueldo").style.display="block";
        document.getElementById("txtSueldo").innerHTML+=sueldo.value;
    }
    if (fichero.value!="") {
        document.getElementById("txtFichero").style.display="block";
        document.getElementById("txtFichero").innerHTML+=fichero.value;
    }
    if (hobbies!="") {
        document.getElementById("txtHobbies").style.display="block";
        document.getElementById("txtHobbies").innerHTML+=hobbies;
    }

    document.getElementById("datosFormulario").style.visibility="visible";
    document.getElementById("txtNombre").innerHTML+=nombre.value;
    document.getElementById("txtDNI").innerHTML+=dni.value;
    document.getElementById("txtClave").innerHTML+=clave.value;
    document.getElementById("txtProvincia").innerHTML+=provincia.id+"--"+provincia.value;
    document.getElementById("txtSexo").innerHTML+=sexo.id;
}