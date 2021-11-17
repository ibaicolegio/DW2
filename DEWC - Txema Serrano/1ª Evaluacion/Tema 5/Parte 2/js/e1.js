window.onload=function() {
    var e1=document.getElementById("enlace_1");
    var e2=document.getElementById("enlace_2");
    var e3=document.getElementById("enlace_3");
    e1.addEventListener("click",ocultarEnlace1);
    e2.addEventListener("click",ocultarEnlace2);
    e3.addEventListener("click",ocultarEnlace3);
}

function ocultarEnlace1() {
    var e1=document.getElementById("enlace_1");
    var c1=document.getElementById("contenidos_1");
    if(c1.style.display!="none"){
        c1.style.display="none";
        e1.innerHTML="Mostrar contenidos";
    } else {
        c1.style.display="block";
        e1.innerHTML="Ocultar contenidos";
    }
}

function ocultarEnlace2() {
    var e2=document.getElementById("enlace_2");
    var c2=document.getElementById("contenidos_2");
    if(c2.style.display!="none"){
        c2.style.display="none";
        e2.innerHTML="Mostrar contenidos";
    } else {
        c2.style.display="block";
        e2.innerHTML="Ocultar contenidos";
    }
}

function ocultarEnlace3() {
    var e3=document.getElementById("enlace_3");
    var c3=document.getElementById("contenidos_3");
    if(c3.style.display!="none"){
        c3.style.display="none";
        e3.innerHTML="Mostrar contenidos";
    } else {
        c3.style.display="block";
        e3.innerHTML="Ocultar contenidos";
    }
}