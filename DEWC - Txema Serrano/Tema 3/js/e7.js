var provincias = new Array("Araba", "Bizkaia", "Gipuzkoa", "Nafarroa", "Lapurdi", "Zuberoa", "Nafarroa Beherea")

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

function cargar() {
    for (let i = 0; i < provincias.length; i++) {
        var opcion=document.createElement("option");
        opcion.setAttribute("value",i);
        var nodo=document.createTextNode(provincias[i]);
        opcion.appendChild(nodo);
        document.getElementById("provincia").appendChild(opcion);
    }
}

function cambiarProvincia() {
    var provincias=document.getElementById("provincia");
    var provinciaIndice=provincias.selectedIndex;
    var provinciaSelecionada=provincias.options[provinciaIndice].text;
    var municipio=municipios[provinciaIndice];
    document.getElementById("municipio").innerHTML = "";
    if (provinciaIndice!==0) {
        for (let i = 0; i < municipio.length; i++) {
            var opcion=document.createElement("option");
            opcion.setAttribute("value",i);
            var nodo=document.createTextNode(municipio[i]);
            opcion.appendChild(nodo);
            document.getElementById("municipio").appendChild(opcion);
        }
    } else {
        var opcion=document.createElement("option");
        opcion.setAttribute("value","0");
        var nodo=document.createTextNode("Seleccione Municipio");
        opcion.appendChild(nodo);
        document.getElementById("municipio").appendChild(opcion);
    }
    
    
}
function mostrar() {
    var provincias=document.getElementById("provincia");
    var provinciaIndice=provincias.selectedIndex;
    var provinciaSelecionada=provincias.options[provinciaIndice].text;
    var municipios=document.getElementById("municipio");
    var municipioIndice=municipios.selectedIndex;
    var municipioSelecionada=municipios.options[municipioIndice].text;
    document.getElementById("mensaje").innerHTML="Ha selecionado "+municipioSelecionada+" en "+provinciaSelecionada;

}