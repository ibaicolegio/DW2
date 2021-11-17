function imprimeDatos(producto) {
    document.write(producto.codigo+"<br>");
    document.write(producto.nombre+"<br>");
    document.write(producto.precio+"<br><br>");
}

function producto_alimenticio(codigo, nombre, precio) {
    this.codigo=codigo;
    this.nombre=nombre;
    this.precio=precio;
    this.producto_alimenticio=producto_alimenticio;
}

window.onload=function () {
    var productos=new Array();
    productos[0]=new producto_alimenticio("AAA","manzana","1.20");
    productos[1]=new producto_alimenticio("BBB","pera","1.10");
    productos[2]=new producto_alimenticio("CCC","melocoton","1.40");
    for (let i = 0; i < productos.length; i++) {
        imprimeDatos(productos[i]);
    }
}


