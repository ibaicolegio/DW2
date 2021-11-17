window.onload=function () {
    cargar();
    document.getElementById("btn-add").addEventListener("click",function () {boton()});
}

function boton() {
    var data=JSON.parse(localStorage.getItem("data")) || [];
    var nombre=document.getElementById("name").value;
    var trabajo=document.getElementById("job").value;
    var edad=document.getElementById("age").value;
    var todo = {
        "name" : nombre,
        "job" : trabajo,
        "age" : edad
    };
    data.push(todo);
    localStorage.setItem("data",JSON.stringify(data));
    cargar();
}

function cargar() {
    if(JSON.parse(localStorage.getItem("data"))!=null){
        document.getElementsByTagName("tbody")[0].innerHTML="";
        var data=JSON.parse(localStorage.getItem("data")) || [];
        var tbody="";
        var cant=0;
        for (const iterator of data) {
            tbody+="<tr>";
                tbody+="<th>"+iterator["name"]+"</th>";
                tbody+="<th>"+iterator["job"]+"</th>";
                tbody+="<th>"+iterator["age"]+"</th>";
                tbody+="<th><button onclick='remove("+cant+")' style='color: white; background-color: red'>Remove</button></th>";
            tbody+="</tr>";
            cant++;
        }
        document.getElementsByTagName("tbody")[0].innerHTML=tbody;
    }
}

function remove(num) {
    if(JSON.parse(localStorage.getItem("data"))!=null){
        var data=JSON.parse(localStorage.getItem("data")) || [];
        data.splice(num,1);
        localStorage.setItem("data",JSON.stringify(data));
        cargar();
    }
}