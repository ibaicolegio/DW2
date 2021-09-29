let numeros = ["images/0.jpg", "images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", 
"images/6.jpg", "images/7.jpg", "images/8.jpg", "images/9.jpg"]
function reloj() {
    var fecha = new Date();
    //Dia
    var dia=fecha.getDate();
    var dia1=parseInt(dia/10);
    var dia2=parseInt(dia%10);
    document.getElementById("dia1").src = numeros[dia1];
    document.getElementById('dia2').src = numeros[dia2];
    //Mes
    var mes=fecha.getMonth();
    var mes1=parseInt(mes/10);
    var mes2=parseInt(mes%10);
    document.getElementById("mes1").src = numeros[mes1];
    document.getElementById('mes2').src = numeros[mes2];
    //Año
    var anyo=fecha.getFullYear();
    var anyo1=parseInt(anyo/1000);
    var anyo2=parseInt(anyo/100%10);
    var anyo3=parseInt(anyo/10%10);
    var anyo4=parseInt(anyo%10);
    document.getElementById("anyo1").src = numeros[anyo1];
    document.getElementById('anyo2').src = numeros[anyo2];
    document.getElementById("anyo3").src = numeros[anyo3];
    document.getElementById('anyo4').src = numeros[anyo4];
    //Hora
    var hora=fecha.getHours();
    var hora1=parseInt(hora/10);
    var hora2=parseInt(hora%10);
    document.getElementById("hora1").src = numeros[hora1];
    document.getElementById('hora2').src = numeros[hora2];
    //Minutos
    var min=fecha.getMinutes();
    var min1=parseInt(min/10);
    var min2=parseInt(min%10);
    document.getElementById("min1").src = numeros[min1];
    document.getElementById('min2').src = numeros[min2];
    //Segundos
    var seg=fecha.getSeconds();
    var seg1=parseInt(seg/10);
    var seg2=parseInt(seg%10);
    document.getElementById("seg1").src = numeros[seg1];
    document.getElementById('seg2').src = numeros[seg2];
    //Refrescar
    setTimeout("reloj()",1000);
}