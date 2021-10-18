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
    var genero=document.getElementById("clave");
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