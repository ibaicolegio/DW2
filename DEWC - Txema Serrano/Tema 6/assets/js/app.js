window.onload=function () {
    document.getElementsByClassName("button")[0].addEventListener("click",mostrar);
}

function mostrar() {
    console.log("click");
}


function enviar() {
    console.log("Hola");
    var tweet=document.getElementById("tweet");
    var tweetValue=tweet.value;
    var listaTweets=document.getElementById("lista-tweets");
    listaTweets.innerHTML+=tweetValue+"<br>";
    console.log(tweetValue);
    tweet.value="";
}
