var fecha=new Date(prompt("Introduce año:"));
var fechaActual=new Date(Date.now());
var anyo=fecha.getFullYear();

var msegPorMinuto = 1000 * 60;
var msegPorHora = msegPorMinuto * 60;
var msegPorDia = msegPorHora * 24;

var milisegundos = fechaActual.getTime()-fecha.getTime();

var dias= Math.floor(milisegundos/msegPorDia);
milisegundos-=(dias*msegPorDia);

var horas= Math.floor(milisegundos/msegPorHora);
milisegundos-=(horas*msegPorHora);

var minutos= Math.floor(milisegundos/msegPorMinuto);
milisegundos-=(minutos*msegPorMinuto);

var segundos= Math.floor(milisegundos/1000);

document.write("Desde el 01/01/"+anyo+" han transcurrido "+dias+" dias, "+horas+" horas, "+minutos+" minutos y "+segundos+" segundos .")