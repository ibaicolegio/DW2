function calculadora(pulsado) {
    var resultado=document.getElementById("resultado").value;
    console.log(resultado+pulsado);
    var ultima=resultado.substring(resultado.length-1);
    if (ultima=="/" || ultima=="*" || ultima=="-" || ultima=="+") {
        if (!(pulsado=="/" || pulsado=="*" || pulsado=="-" || pulsado=="+" || pulsado=="=")) {
            document.getElementById("resultado").value=resultado+pulsado;
        }
    } else if(pulsado=="C"){
        document.getElementById("resultado").value="";
    } else if (Number.parseInt(ultima)!=NaN) {
        if (pulsado=="=") {
            document.getElementById("resultado").value=eval(resultado);
            /*var numeros1="";
            var numeros2="";
            var sumar="";
            for (let i = 0; i < resultado.length-1; i++) {
                var posicionContenido=resultado.substring(i,i+1);
                if (!isNaN(posicionContenido)){
                    numeros1+=Number.parseInt(posicionContenido);
                    console.log("1: "+numeros1);
                } else {
                    numeros2=numeros1+posicionContenido+numeros2;
                    console.log("2: "+numeros2);
                    numeros1="";
                }
            }*/
        } else {
            document.getElementById("resultado").value=resultado+pulsado;
        }
    } 
}