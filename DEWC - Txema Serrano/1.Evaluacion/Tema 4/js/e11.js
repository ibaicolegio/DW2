var num=Math.floor(Math.random()*100)+1;
var intentos=0;
function probarNumero() {
    numProbar=document.getElementById("numero").value;
    intentos++;
    if (!isNaN(numProbar)) {
        if (numProbar==num) {
            document.getElementById("text").style.color="green";
            document.getElementById("text").innerHTML="Has acertado en "+intentos+" intentos!!!";
        } else if (numProbar>num) {
            document.getElementById("text").style.color="orange";
            document.getElementById("text").innerHTML="El numero es menor";
        } else {
            document.getElementById("text").style.color="orange";
            document.getElementById("text").innerHTML="El numero es mayor";
        }
    } else {
        document.getElementById("text").style.color="red";
        document.getElementById("text").innerHTML="Debes introducir un numero";
    }
    
}