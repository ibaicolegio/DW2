window.onload=function(){
    fetch("https://livescore-api.com/api-client/scores/history.json?competition_id=3&key=ohH5zsuLaePU9FdN&secret=pphLwyNRGI9rPpyeHgkhIO3S2SNbx0YW")
        .then(partidos=>partidos.json())
        .then(partidos =>console.log(partidos.data.match[2].away_name))
}
