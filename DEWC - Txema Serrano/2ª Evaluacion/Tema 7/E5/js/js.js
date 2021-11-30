window.onload = function () {
    cargarProvincias();
    document.getElementById("provincia").onchange = cargaMunicipios;
    //document.getElementById("municipio").onchange = mostrarMensaje;
}

function inicializa_xhr() {
    if(window.XMLHttpRequest){
        return new XMLHttpRequest();
    } else if (window.ActiveXObject){
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

function cargarProvincias() {
    console.log("Cargando provicias");

    peticion = inicializa_xhr();
    if(peticion){
        peticion.onreadystatechange = muestraProvincias;
        peticion.open("GET","php/cargaProvinciasJSON.php",true);
        peticion.send(null);
    }
    muestraProvincias;
}

function muestraProvincias() {
    if(peticion.readyState == 4){
        if(peticion.status == 200){
            //console.log(peticion.responseText);
            var lista=document.getElementById("provincia");
            var provincias = eval('(' + peticion.responseText + ')');
            provinciasArray = provincias;

            console.log(provinciasArray);

            lista.options[0] = new Option("- selecciona -");
            var i=1;
            for (var codigo in provincias) {
                lista.options[i] = new Option(provincias[codigo], codigo);
                i++;
            }
        }
    }
}

function cargaMunicipios() {
    console.log("cargando municipios");
    var lista=document.getElementById("provincia");
    var provincia = lista.options[lista.selectedIndex].value;

    console.log(provincia);

    if(!isNaN(provincia)){
        peticion=inicializa_xhr();
        if(peticion){
            peticion.onreadystatechange=muestraProvincias;
            peticion.open("POST","cargaMunicipiosJSON.php?nocache="+Math.random(),true);
            peticion.setRequestedHeader("Content-Type","application/x-www-form-urlencoded");
            peticion.send("provincia="+provincia);
        }
    }
}

function mustraMunicipios() {
    if(peticion.readyState == 4){
        if(peticion.status == 200){
            var lista=document.getElementById("municipio");
            var municipios=eval('('+ peticion.responseText + ')');

            municiosArray = municipios;
            console.log(municiosArray);

            lista.options.length = 0;
            var i=0;
            for (var codigo in municipios) {
                lista.options[i] = new Option(municipios[codigo], codigo);
                i++;
            }
        }
    }
}