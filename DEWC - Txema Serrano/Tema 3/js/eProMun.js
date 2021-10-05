var provincias = new Array("Seleccione Provincia", "Araba", "Bizkaia", "Gipuzkoa", "Nafarroa", "Lapurdi", "Zuberoa", "Nafarroa Beherea")

var municipios_1 = new Array("Seleccione Municipio", "Vitoria-Gasteiz", "Amurrio", "El Ciego", "La Guardia");
var municipios_2 = new Array("Seleccione Municipio", "Bilbao", "Barakaldo", "Durango", "Elorrio", "Muzkiz");
var municipios_3 = new Array("Seleccione Municipio", "Donostia-San Sebastián", "Arrasate-Mondragón", "Eibar");
var municipios_4 = new Array("Seleccione Municipio", "Iruña", "Burlada", "Estella-Lizarra", "Tafalla");
var municipios_5 = new Array("Seleccione Municipio", "Baiona", "Bastida", "Hendaya", "Miarritze");
var municipios_6 = new Array("Seleccione Municipio", "Maule", "Barkoxe", "Sohüta");
var municipios_7 = new Array("Seleccione Municipio", "Baigorri", "Garazi", "Oztibarre");

var municipios = [
    [],
    municipios_1,
    municipios_2,
    municipios_3,
    municipios_4,
    municipios_5,
    municipios_6,
    municipios_7,
];

function inicio() {
    for (let i = 0; i < provincias.length; i++) {
        var opcion=document.createElement("option");
        opcion.setAttribute("value",i);
        var nodo=document.createTextNode(provincias[i]);
        opcion.appendChild(nodo);
        document.getElementById("provincias").appendChild(opcion);
    }
    
}

function provinciaSeleccionada() {
    var municipioDoc=document.getElementById("provincias");
    var seleccionado=municipioDoc.selectedIndex;
    var municipio=municipios[seleccionado];
    document.getElementById("municipios").innerHTML="";
    document.getElementById("mensaje").innerHTML="";
    for (let i = 0; i < municipio.length; i++) {
        var opcion=document.createElement("option");
        opcion.setAttribute("value",i);
        var nodo=document.createTextNode(municipio[i]);
        opcion.appendChild(nodo);
        document.getElementById("municipios").appendChild(opcion);
    }
}

function mostrar() {
    var provinciaNum=document.getElementById("provincias").selectedIndex;
    var provinci=document.getElementById("provincias").options[provinciaNum].text;
    var municipioNum=document.getElementById("municipios").selectedIndex;
    var municipi=document.getElementById("municipios").options[municipioNum].text;
    if (municipioNum==0) {
        document.getElementById("mensaje").innerHTML="";
    } else {
        document.getElementById("mensaje").innerHTML="Municipio "+municipi+" de la provincia "+provinci;
    }
}