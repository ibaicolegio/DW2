var i=1;

var array1=new Array("Rojo","Verde","Azul");
var array2=new Array("70","9","800");
var array3=new Array(50,10,2,300);
var array4=new Array("70","8","850",30,10,5,400);

mostrarArray(array1);
mostrarArray(array2);
mostrarArray(array3);
mostrarArray(array4);

function mostrarArray(unarray) {
    document.write("Array"+i+": ");
    unarray.forEach(unarray => {
        if (typeof unarray === 'string') {
            document.write('\"'+unarray+'\",');
        } else if (typeof unarray === 'number'){
            document.write(unarray+',');
        }
    });
    document.write("<br>");
    i++;
}
