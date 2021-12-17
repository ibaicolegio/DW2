window.onload = function(){
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "e332e51a7d76ff7aa8307fbc2fd5b413");
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://v3.football.api-sports.io/odds/bets?id=140", requestOptions)
    .then(response => response.text())
    .then(result => console.log(JSON.parse(result)))
    .catch(error => console.log('error', error));
}