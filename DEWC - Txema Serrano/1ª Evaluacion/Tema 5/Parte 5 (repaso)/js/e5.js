var cant=100;
var carga;
window.onload=function () {
    carga=setInterval(cargar,100);
}

function cargar() {
    console.log(cant);
    if(cant>0){
        cant--;
        document.getElementById("div").style.clipPath="inset(0 0 "+cant+"% 0)";
    } else {
        clearInterval(carga);
    }
}