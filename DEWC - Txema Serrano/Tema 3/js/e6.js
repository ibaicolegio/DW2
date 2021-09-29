console.log(document.getElementById("dia2")).src;
var fecha = new Date();
var dia=fecha.getDate();
if (dia>9) {
    dia1=parseInt(dia%10);
    dia2=parseInt(dia/10);
    var dia1="images/"+dia1+".jpg";
    var dia2="images/"+dia2+".jpg";
    
    document.getElementById("dia1").setAttribute("src",dia1);
    document.getElementById('dia2').src = dia2;
}