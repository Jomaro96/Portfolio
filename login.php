<?php
session_start();
include("conexion.php");
$conn = connect();

//Getting post data
if (isset($_POST['e_mail']) && isset($_POST['password'])) {
    // Access the email and password values
    $email = $_POST['e_mail'];
    $pwd = $_POST['password'];

    
} else {
    echo "Nope";
}


$queryselect = "SELECT * FROM users WHERE email = '".$email."'";
$commitselect = mysqli_query($conn,$queryselect);
$fila = mysqli_fetch_assoc($commitselect);
$rows = mysqli_num_rows($commitselect);

if ($rows == 0) {
    echo"<script type='text/javascript'>
    alert('User not registered');

    </script>";
} else
{

if($email == $fila["email"] && $pwd == $fila["pwd"])
{
echo"<script type='text/javascript'>
    alert('Welcome');
    window.location.href='main.php';
    </script>";
    $_SESSION["user_port"] = $fila["username"];
}
else
{
   echo"<script type='text/javascript'>
    alert('User or Password Error');
    window.location.href='Index.php';
    </script>";
}
}

//Implement password hash later

?>