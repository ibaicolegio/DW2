var años=new Array();
años["Americano"]=["2001","2002","2003"];
años["Asiatico"]=["2011","2012","2013"];
años["Europeo"]=["1991","1992","1993"];


window.onload=function () {
    var marca=document.getElementById("marca");
    marca.addEventListener("click", function () {seleccionMarca(marca)});
    var cotizar=document.getElementsByClassName("btn")[0];
    cotizar.addEventListener("click", function () {botonCotizar(marca)});
}

function seleccionMarca(marca) {
    for (const iterator of marca.getElementsByTagName("option")) {
        if (iterator.selected && iterator.value!="") {
            seleccionAnyo(iterator);
        } else if (iterator.value==""){
            document.getElementById("anio").innerHTML="";
        }
    }
}

function seleccionAnyo(marca) {
    var selectAnyo=document.getElementById("anio");
    selectAnyo.innerHTML="<option value=''>- Seleccionar -</option>";
    for (let i = 0; i < años[marca.innerHTML].length; i++) {
        selectAnyo.innerHTML+="<option value='"+(i+1)+"'>"+años[marca.innerHTML][i]+"</option>";
    }
}

function botonCotizar(marca) {
    var nomMarca="";
    var anyo="";
    var tipoSeguro="";
    for (const iterator of marca.getElementsByTagName("option")) {
        if (iterator.selected && iterator.value!="") {
            nomMarca=iterator.innerHTML;
        } 
    }
    var selectAnyo=document.getElementById("anio");
    for (const iterator of selectAnyo.getElementsByTagName("option")) {
        if (iterator.selected && iterator.value!="") {
            anyo=iterator.innerHTML;
        }
    }
    var opcionSeguro=document.getElementsByClassName("form-check-input");
    for (const iterator of opcionSeguro) {
        if (iterator.checked) {
            tipoSeguro=iterator.value;
        }
    }
    if (nomMarca!="" && anyo!="" && tipoSeguro!="") {
        cotizacion(nomMarca, anyo, tipoSeguro);
    } else if (nomMarca==""){
        alert("Debes seleccionar la marca");
    } else if (anyo=="") {
        alert("Debes seleccionar el año");
    }
    
}

function cotizacion(nomMarca, anyo, tipoSeguro) {
    const BASE=2000;
    var porcProcedencia=0;
    var porcTipo=0;
    var anyoActual=new Date().getFullYear();
    var difAnyos=anyoActual-anyo;
    var porcAnyo=3*difAnyos;
    var precio=0;
    console.log(anyoActual);
    if(nomMarca=="americano"){
        porcProcedencia=15;
    } else if(nomMarca=="Asiatico"){
        porcProcedencia=5;
    } else if(nomMarca="Europeo"){
        porcProcedencia=35;
    }
    if (tipoSeguro=="basico") {
        porcTipo=30;
    } else if(tipoSeguro=="completo"){
        porcTipo=50;
    }
    console.log(difAnyos);
    precio=2000+(2000*(porcProcedencia/100))+(2000*(porcTipo/100))-(2000*(porcAnyo/100));
    /*if (precio<2000) {
        precio=2000;
    }*/
    alert("Tu cotizacion es de "+precio+"€");
}

