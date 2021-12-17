<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CRUD de terceros con PHP - MySQL - jQuery AJAX </title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="css/custom.css">
    <script src="js/script.js"></script>
</head>

<body>

    <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
                        <h2>Resultados</h2>
                    </div>
                    <div class="col-sm-6">
                        <a href="login.html" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i>
                            <span>Iniciar sesion</span>
                        </a>
                        <a href="#partidos.php" class="btn btn-primary" data-toggle="modal">
                            <span>Partidos</span>
                        </a>
                    </div>
                </div>
            </div>
            <p id="aqui"></p>
            <div class='col-12'>
                <div id="wg-api-football-standings" data-host="v3.football.api-sports.io" data-league="140" data-team="" data-season="2021" data-key="e332e51a7d76ff7aa8307fbc2fd5b413" data-theme="" data-show-errors="false" class="api_football_loader"></div>
            </div>
        </div>
    </div>

    <script type="module" src="https://widgets.api-sports.io/football/1.1.8/widget.js">
    </script>
</body>

</html>