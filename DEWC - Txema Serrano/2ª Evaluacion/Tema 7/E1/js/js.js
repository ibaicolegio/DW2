function cargar() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var JSONObject = JSON.parse(xhr.responseText);
            var listado="";
            for (const iterator of JSONObject) {
                listado+="User ID: "+iterator.userId+"<br>";
                listado+="ID: "+iterator.id+"<br>";
                listado+="Title: "+iterator.title+"<br>";
                listado+="Body: "+iterator.body+"<br><br>";
            }
            document.getElementById("listado").innerHTML=listado;
        }
    }
    xhr.open("GET", "http://jsonplaceholder.typicode.com/posts", true);
    xhr.send();
    
}