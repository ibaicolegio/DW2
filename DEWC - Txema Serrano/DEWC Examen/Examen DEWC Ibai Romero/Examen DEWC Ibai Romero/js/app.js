var provincias=["","euskadi","nafarroa","iparralde"];
provincias["euskadi"]=["Araba","Bizkaia","Guipuzkoa"];
provincias["nafarroa"]=["Navarra"];
provincias["iparralde"]=["Lapurdi","Behe Nafarroa","Zuberoa"];

var municipios=["","araba","bizkaia","gipuzkoa","navarra","lapurdi","behe nafarroa","zuberoa"];
municipios["araba"]=["Gasteiz","Laguardia","Salvatierra"];
municipios["bizkaia"]=["Bilbo","Barakaldo","Durango"];
municipios["gipuzkoa"]=["Donosti","Arrasate","Bergara"];
municipios["navarra"]=["Iruña","Lizarra","Ujue"];
municipios["lapurdi"]=["Baiona","Biarritz","Hendaya"];
municipios["behe nafarroa"]=["Bidarray","St-Palais"];
municipios["zuberoa"]=["Maule","Etxarri"];

window.onload=function () {
    if(window.location.pathname=="/index.html"){
        cargarIndex();
    } else if (window.location.pathname=="/thankyou.html"){
        cargarThankyour();
    }
}

function cargarIndex() {
    document.getElementById("dni").addEventListener("blur",function () {comprobarDNI()});
    document.getElementById("firstname").addEventListener("blur",function () {comprobarCaracteresNombre()});
    document.getElementById("lastname").addEventListener("blur",function () {comprobarCaracteresApellidos()});
    document.getElementById("address").addEventListener("blur",function () {comprobarCaracteresDireccion()});
    document.getElementById("territorio").addEventListener("change",function () {cargarTerritorio()});
    document.getElementById("provincia").addEventListener("change",function () {cargarProvincia()});
    document.getElementById("birthday").addEventListener("blur",function () {comprobarFecha()});
    document.getElementById("email").addEventListener("blur",function () {comprobarEmail()});
    document.getElementById("phone").addEventListener("blur",function () {comprobarTelefono()});
    document.getElementById("politicas").addEventListener("click",function () {politicas()});
    document.getElementById("enviar").addEventListener("click",function () {enviar()});
}

function cargarThankyour() {
    document.getElementById("volver").addEventListener("click",function () {volver()});
}

function comprobarDNI() {
    var dniElement=document.getElementById("dni");
    var dni=dniElement.value;
    var expresionDNI=/^\d{8}[a-zA-Z]$/;
    dniElement.style.backgroundColor = "white";
 
    if(expresionDNI.test (dni) == true){
        var numero = dni.substr(0,dni.length-1);
        var letraDNI = dni.substr(dni.length-1,1);
        numero = numero % 23;
        var letras='TRWAGMYFPDXBNJZSQVHLCKET';
        letras=letras.substring(numero,numero+1);
        if (letras!=letraDNI.toUpperCase()) {
            alert('Letra del dni no valida');
            dniElement.value="";
            dniElement.style.backgroundColor = "red";
            
            return false;
        } else
            return true;
    } else
        alert('El DNI tiene que tener 8 numeros y 1 letra');
        dniElement.value="";
        dniElement.style.backgroundColor = "red";
        return false;
}

function comprobarCaracteresNombre() {
    comprobarCaracteresNomAp(document.getElementById("firstname"),"nombre");
}

function comprobarCaracteresApellidos() {
    comprobarCaracteresNomAp(document.getElementById("lastname"),"apellidos");
}

function comprobarCaracteresNomAp(element) {
    element.style.backgroundColor = "white";
    for (let i = 0; i < element.value.length; i++) {
        if(!isNaN(parseInt(element.value.substr(i,i+1)))){
            element.value="";
            alert("Contiene numeros");
            element.style.backgroundColor = "red";
            return;
        }
    }
    if(element.value.length>50){
        element.value="";
        element.style.backgroundColor = "red";
        alert("Contiene mas de 50 caracteres"); 
    }
    var expresionNomAp=/^[a-zA-Z\ ]{1,50}$/;
    if(!expresionNomAp.test (element.value)){
        alert("Solo puede contener letras");
        element.style.backgroundColor = "red";
        element.value="";
        return;
    }
}

function comprobarCaracteresDireccion() {
    var element=document.getElementById("address");
    element.style.backgroundColor = "white";
    console.log(element.value.length);
    if(element.value.length>50){
        element.style.backgroundColor = "red";
        element.value="";
        alert("Contiene mas de 50 caracteres");
        element.style.backgroundColor = "red";
        return;
    }
    var expresionDireccion=/^[a-zA-Z\º\ª\,\d\-\/\ ]{1,50}$/;
    if(!expresionDireccion.test (element.value)){
        alert("Solo puede contener letras, numeros,º ,ª ,(,) ,/ ,-");
        element.value="";
        element.style.backgroundColor = "red";
        return;
    }
}

function cargarTerritorio(){
    var element=document.getElementById("territorio");
    if(element.value==0){
        document.getElementById("provincia").innerHTML="";
        document.getElementById("municipio").innerHTML="";
    } else {
        var valor=element.value;
        var texto='<option value="0">Seleccione Provincia</option>';
        for (const iterator of provincias[valor]) {
            texto+="<option value="+iterator.toLowerCase()+">"+iterator+"</option>";
        }
        document.getElementById("provincia").innerHTML=texto;
    }
}

function cargarProvincia() {
    var valor=document.getElementById("provincia").value;
    var texto='<option value="0">Seleccione Municipio</option>';
    for (const iterator of municipios[valor]) {
        texto+="<option value="+iterator.toLowerCase()+">"+iterator+"</option>";
    }
    document.getElementById("municipio").innerHTML=texto;
    if (valor==0){
        document.getElementById("municipio").innerHTML="";
    }
}

function comprobarFecha() {
    var fecha = new Date(document.getElementById("birthday").value);
    var fechaActual = new Date();
    if (fecha > fechaActual) {
        alert("La fecha es mayor a la actual");
        document.getElementById("birthday").value = "";
    }
    if(!(fecha instanceof Date && !isNaN(fecha))){
        alert("Fecha incorrecta");
        document.getElementById("birthday").value = "";
    }
}

function comprobarEmail() {
    var element=document.getElementById("email");
    var expresionEmail=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(!expresionEmail.test(element.value)){
        alert("Email no valido");
        element.value="";
    }
}

function comprobarTelefono() {
    var element=document.getElementById("phone");
    var expresionTelefono1=/^[6-9]{1}\d{8}$/;
    var expresionTelefono2=/^\+34[6-9]{1}\d{8}$/;
    if(!expresionTelefono1.test(element.value) && !expresionTelefono2.test(element.value)){
        alert("Telefono no valido");
        element.value="";
    }
}

function politicas(){
    var politicas=document.getElementById("politicas");
    var dni=document.getElementById("dni");
    var nombre=document.getElementById("firstname");
    var apellidos=document.getElementById("lastname");
    var direccion=document.getElementById("address");
    var territorio=document.getElementById("territorio")
    var municipio=document.getElementById("municipio");
    var provincia=document.getElementById("provincia");
    var fechaNacimiento=document.getElementById("birthday");
    var email=document.getElementById("email");
    var telefono=document.getElementById("phone");
    if(dni.value==""){
        alert("Completa el dni");
        politicas.checked = false;
    } else if(nombre.value==""){
        alert("Completa el nombre");
        politicas.checked = false;
    } else if(apellidos.value==""){
        alert("Completa los apellidos");
        politicas.checked = false;
    } else if(direccion.value==""){
        alert("Completa la direccion");
        politicas.checked = false;
    } else if(territorio.value==0){
        alert("Completa el territorio");
        politicas.checked = false;
    } else if(provincia.value==0){
        alert("Completa la provincia");
        politicas.checked = false;
    } else if(municipio.value==0){
        alert("Completa el municipio");
        politicas.checked = false;
    } else if(fechaNacimiento.value==""){
        alert("Completa la fecha de nacimiento");
        politicas.checked = false;
    } else if(email.value==""){
        alert("Completa el email");
        politicas.checked = false;
    } else if(telefono.value==""){
        alert("Completa el telefono");
        politicas.checked = false;
    } else {
        document.getElementById("enviar").disabled=false;
        return true;
    }
}

function enviar() {
    if (!politicas()){
        alert("Rellena todos los campos");
        return;
    }
    var dni=document.getElementById("dni");
    var direccion=document.getElementById("address");
    var email=document.getElementById("email");
    var fechaNacimiento=document.getElementById("birthday");
    var nombre=document.getElementById("firstname");
    var apellidos=document.getElementById("lastname");
    var municipio=document.getElementById("municipio");
    var telefono=document.getElementById("phone");
    var provincia=document.getElementById("provincia");
    var anyos=calcularEdad();
    var objeto = {
        address: direccion.value.trim(),
        dni: dni.value.trim(),
        email: email.value.trim(),
        fnaci: fechaNacimiento.value.trim(),
        fname: nombre.value.trim(),
        lname: apellidos.value.trim(),
        municipality: municipio.value.trim(),
        phone: telefono.value.trim(),
        province: provincia.value.trim(),
        years: anyos
    }
    localStorage.setItem(dni.value, JSON.stringify(objeto));
    window.open("thankyou.html", "_self");
}

function calcularEdad() {
    var fecha = new Date(document.getElementById("birthday").value);
    var fechaActual = new Date();
    var anyos=0;
    if (fechaActual.getMonth() > fecha.getMonth()) {
        anyos=fechaActual.getFullYear()-fecha.getFullYear();
    } else if (fechaActual.getMonth() == fecha.getMonth() && fechaActual.getDate() > fecha.getDate()) {
        anyos=fechaActual.getFullYear()-fecha.getFullYear();
    } else {
        anyos=fechaActual.getFullYear()-fecha.getFullYear()-1;
    }
    return anyos;
}

function volver(){
    console.log("hola");
    window.open("index.html", "_self");
}