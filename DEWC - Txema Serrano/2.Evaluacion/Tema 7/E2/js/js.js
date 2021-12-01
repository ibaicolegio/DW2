function cargar() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var JSONObject = JSON.parse(xhr.responseText);
            var tabla="";
            for (const iterator of JSONObject) {
                tabla+="<tr>";
                    tabla+="<td>"+iterator.city+"</td>";
                    tabla+="<td>"+iterator.description+"</td>";
                    tabla+="<td>"+iterator.ranking+"</td>";
                tabla+="</tr>";
            }
            document.getElementById("contenido").innerHTML=tabla;
        }
    }
    xhr.open("GET", "marcadores.JSON", true);
    xhr.send();
    
}