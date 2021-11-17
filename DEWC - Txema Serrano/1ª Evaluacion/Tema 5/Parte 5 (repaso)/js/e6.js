const IMGS=["i1.jpg","i2.jpg","i3.jpg"];
const RUTAIMGS="img/";
var cont=0;
var cargador;
var cant=100;
var ant=null;

window.onload=function () {
    cargar();
}

function cargar() {
    if (IMGS.length==cont+1){
        cont=-1;
        ant=IMGS.length-1;
    } else {
        ant=null;
    }
    var i1=document.getElementById("i1");
    if (ant!=null) {
        i1.src=RUTAIMGS+IMGS[ant];
    } else {
        i1.src=RUTAIMGS+IMGS[cont];
    }
    i1.style.width="400px";
    i1.style.height="250px";
    var i2=document.getElementById("i2");
    i2.src=RUTAIMGS+IMGS[cont+1];
    i2.style.width="400px";
    i2.style.height="250px";
    i2.style.clipPath="inset(0 0 100% 0)";
    cant=100;
    cargador=setInterval(cargar2,50);
}

function cargar2() {
    if(cant>0){
        var i2=document.getElementById("i2");
        i2.style.clipPath="inset(0 0 "+cant+"% 0)";
        cant--;
    } else {
        clearInterval(cargador);
        cont++;
        cargar();
    }
}