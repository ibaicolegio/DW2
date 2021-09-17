function ejecutar(){
    var nombre = document.getElementById('fname').value;
    if (nombre=="") {
        alert("Rellena el nombre");
        
    }
    abrirVentana();
    
}
    
function abrirVentana(){
    window.open("","ventana","width=120,height=300,scrollbars=NO");
}