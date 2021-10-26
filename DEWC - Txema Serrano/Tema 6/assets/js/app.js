window.onload=function () {
    document.getElementsByClassName("button")[0].addEventListener("click",mostrar);
    tweets=JSON.parse(localStorage.getItem("tweets")) || [];
    cargarTweets();
}
let tweets;

function cargarTweets() {
    var tweetsTexto=JSON.parse(localStorage.getItem("tweets"));
    var listaTweets=document.getElementById("lista-tweets");
    listaTweets.innerHTML="";
    if(tweetsTexto!=null){
        listaTweets.innerHTML+="<ul>";
        var cont=0;
        for (const iterator of tweetsTexto) {
            listaTweets.innerHTML+="<li id="+cont+">"+iterator+"<a class='borrar-tweet' onclick=borrar("+cont+")>X</a></li>";
            cont++;
        }
        listaTweets.innerHTML+="</ul>";
    }
    
}

function borrar(num) {
    var tweets=JSON.parse(localStorage.getItem("tweets"));
    console.log(tweets);
    tweets.splice(num,0);
    console.log(tweets.splice(num,1));
    localStorage.setItem("tweets",JSON.stringify(tweets));
    cargarTweets();
}

function mostrar() {
    tweets=JSON.parse(localStorage.getItem("tweets")) || [];
    var texto=document.getElementById("tweet").value;
    document.getElementById("tweet").value="";
    if(localStorage.getItem("tweets")!=null){
        var num=localStorage.getItem("tweets").length;
    } else {
        var num=0;
    }
    tweets = [...tweets, texto];
    localStorage.setItem("tweets",JSON.stringify(tweets));
    cargarTweets();
}
