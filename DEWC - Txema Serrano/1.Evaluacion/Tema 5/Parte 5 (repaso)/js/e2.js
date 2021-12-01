var velocidad=1;
var posicion=0;
var detencion=0.1;
var movimientos;
var deteners;
var decelerars;
var proxVelo;

function arrancar() {
    movimientos=setInterval('movimiento()',100);
    document.getElementById("arrancar").style.display="none";
    document.getElementById("parar").style.visibility="visible";
    document.getElementById("acelerar").style.visibility="visible";
    document.getElementById("detener").style.visibility="visible";
}

function movimiento() {
    posicion+=velocidad;
    document.getElementById("coche").style.left=posicion+"px";
    document.getElementById("velocidad").innerHTML=velocidad.toFixed(2)+"km/h";
}
function acelerar() {
    velocidad+=1;
    document.getElementById("velocidad").innerHTML=velocidad.toFixed(2)+"km/h";
    proxVelo=velocidad;
}

function decelerar() {
    detencion=0.1;
    proxVelo=velocidad-1;
    if(proxVelo<0){
        proxVelo=0;
    }
    decelerars=setInterval('decelerarse()',100);
}

function decelerarse() {
    if(velocidad>proxVelo){
        detencion+=0.33;
        velocidad-=detencion;
        document.getElementById("velocidad").innerHTML=velocidad.toFixed(2)+"km/h";
    }
    if(velocidad<=0) {
        velocidad=0;
        detencion=0;
        clearInterval(decelerars);
    } else if (velocidad<=proxVelo) {
        velocidad=proxVelo;
        document.getElementById("velocidad").innerHTML=velocidad.toFixed(2)+"km/h";
        detencion=0;
        clearInterval(decelerars);
    }
}

function parar() {
    detencion=0.1;
    deteners=setInterval('parars()',100);
    proxVelo=0;
}
function parars(){
    if(velocidad>0){
        velocidad-=detencion;
        detencion+=0.033;
        console.log(velocidad);
        document.getElementById("velocidad").innerHTML=velocidad.toFixed(2)+"km/h";
    }
    if(velocidad<=0){
        velocidad=0;
        detencion=0;
        document.getElementById("velocidad").innerHTML=velocidad.toFixed(2)+"km/h";
        clearInterval(movimientos);
        clearInterval(deteners);
        document.getElementById("arrancar").style.display="inline";
        document.getElementById("parar").style.visibility="hidden";
        document.getElementById("acelerar").style.visibility="hidden";
        document.getElementById("detener").style.visibility="hidden";
    }
}