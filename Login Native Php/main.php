<?php
session_start();
if(isset($_SESSION["user_port"]))
{
    echo $_SESSION["user_port"];
?>

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script
  src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/animations.js"></script>
    <script type="text/javascript" src="js/ajax.js"></script>
    <link rel="stylesheet" href="css/style.css">
        <title>Portoflio Main</title>
        
    </head>
    <body>
        <h1> Welcome dudes</h1>
        <a href="closeSession.php">Log Out</a>
    </body>
    </html>

<?php
}
else
{
echo "<script>

alert('No tiene permiso para ver este recurso');

window.location.href='Index.php';

</script>";
}
?>
