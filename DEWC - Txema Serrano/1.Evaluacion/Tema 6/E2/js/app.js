window.onload=function (){
    carrito();
    var itemsAgregar=document.getElementsByClassName("agregar-carrito");
    for (const iterator of itemsAgregar) {
        iterator.addEventListener("click", function() {
            agregar(iterator);
        });
    }
    document.getElementById("vaciar-carrito").addEventListener("click", function () {
        localStorage.removeItem("items");
    carrito();
    });
}

function agregar(item){
    lclStr(item);
    carrito();
}

function carrito() {
    var items=JSON.parse(localStorage.getItem("items")) || [];
    var item="";
    for (let i = 0; i < items.length; i++) {
        if (items[i]!=null) {
            item+=`
            <tr>
                <td>`+items[i].imagen+`</td>
                <td>`+items[i].nombre+`</td>
                <td>`+items[i].precio+`</td>
                <td>`+items[i].cantidad+`</td>
                <td></td>
            </tr>`;
        }
    }
    document.getElementsByTagName("tbody")[0].innerHTML=item;
}

function lclStr(item) {
    var items=JSON.parse(localStorage.getItem("items")) || [];
    items = [...items];
    var num=item.getAttribute("data-id");
    var img=item.parentElement.parentElement.getElementsByTagName("img")[0];
    var nombre=item.parentElement.getElementsByTagName("h4")[0];
    var precio=item.parentElement.getElementsByClassName("u-pull-right")[0];
    if(items[num]==null){
        var cantidad=1;
    } else {
        var cantidad=items[num].cantidad+1;
    }
    var todo = {
        "imagen" : "<img src="+img.src+" width='100' heigth='100'>",
        "nombre" : nombre.innerHTML,
        "precio" : precio.innerHTML,
        "cantidad" : cantidad
    };
    
    items[num]=todo;
    localStorage.setItem("items",JSON.stringify(items));
}