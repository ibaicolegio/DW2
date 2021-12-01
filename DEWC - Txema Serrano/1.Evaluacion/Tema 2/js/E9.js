function ejecutar(){
    var nombre = document.getElementById('fname').value;
    if (nombre=="") {
        alert("Rellena el nombre");
        return;
    }
    abrirVentana(nombre);
    
}
    
function abrirVentana(nombre){
    var left = (screen.width/2)-(300/2);
    var top = (screen.height/2)-(300/2);
    var ventana1=window.open("","ventana1","width=300,height=300,scrollbars=NO, top="+top+", left="+left);
    ventana1.document.write("Bienvenido "+nombre+"<br>");
    var boton=`
    <button onclick="location.href='http://www.google.com';">Empezar a navegar</button>
    `;
    ventana1.document.write(boton);
}