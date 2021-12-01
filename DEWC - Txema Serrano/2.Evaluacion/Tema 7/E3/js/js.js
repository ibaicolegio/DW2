function cargarTXT(){
    document.getElementById("resultado").innerHTML = "";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "datos.txt", true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            var allText = rawFile.responseText;
            var nombres=allText.split(" ");
            var listaHTML="";
            for (const iterator of nombres) {
                listaHTML += "<li>"+iterator+"</li>";
            }
            document.getElementById("resultado").innerHTML += "<ol>"+listaHTML+"</ol>";
        }
    }
    rawFile.send();
}

function cargarJSON(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var JSONObject = JSON.parse(xhr.responseText);
            var listado="";
            for (const iterator of JSONObject) {
                listado+="Nombre: "+iterator.nombre+"<br>";
                listado+="Puesto: "+iterator.puesto+"<br><br>";
            }
            document.getElementById("resultado").innerHTML=listado;
        }
    }
    xhr.open("GET", "empleados.json", true);
    xhr.send();
}

function cargarAPI(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var JSONObject = JSON.parse(xhr.responseText);
            var listado="";
            for (const iterator of JSONObject) {
                listado+="<a href='"+iterator.post_url+"'>"+iterator.author+"</a><br><br>";
            }
            document.getElementById("resultado").innerHTML=listado;
        }
    }
    xhr.open("GET", "https://picsum.photos/list", true);
    xhr.send();
}