carpeta="img/";
imgSrc=["ancares.jpg","basel.jpg","cabra.jpg","madridbanco.jpg"];
var pos=0;
window.onload=function () {
    for (let i = 0; i <= 3; i++) {
        var nom="i"+i;
        document.getElementById(nom).addEventListener("click",function () {img(i);})
    }
    document.getElementById("imgCap").addEventListener("click",function () {
        document.getElementById("fig").style.visibility="hidden";
        document.getElementById("img").src="";
    })

}

function img(i) {
    document.getElementById("img").src=carpeta+imgSrc[i];
    document.getElementById("imgCap").innerHTML="[x]Cerrar";
    document.getElementById("fig").style.visibility="visible";
    pos=0;
    setInterval(centrar,1);
}
function centrar() {
    var anchoVentana=window.innerWidth;
    var anchoImg=document.getElementById("img").width;
    var ancho=anchoVentana/2-anchoImg/2;
    if(pos<ancho){
        pos++;
        document.getElementById("fig").style.left=pos+"px";
    }
}