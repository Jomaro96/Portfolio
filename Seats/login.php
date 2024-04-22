<?php
/*
Copyright © 2022 Index Nuevo Laredo | Todos los derechos reservados |
*/
/*Conexion */
session_start();
include("conexion.php");
$conn = conectar();

/*Getting data*/
$usuario = $_POST["email"];
$contrasena = $_POST["password"];

$queryselect = "SELECT * FROM usuarios WHERE correo = '".$usuario."'";
$commitselect = mysqli_query($conn,$queryselect);
$fila = mysqli_fetch_assoc($commitselect);
$rows = mysqli_num_rows($commitselect);

if ($rows == 0) {
        echo"<script type='text/javascript'>
        alert('Usuario no registrado');
        window.location.href='Index.php';
        </script>";
} else
{

if($usuario == $fila["correo"] && $contrasena == $fila["password"])
  {
	///tipo de usuario para redireccionar a sus paginas correspondientes
	echo"<script type='text/javascript'>
        alert('Bienvenido');
        window.location.href='3a-reservation.php';
        </script>";
        $_SESSION["usuario_seats"] = $usuario;
  }
  else
  {
       echo"<script type='text/javascript'>
        alert('Usuario no registrado');
        window.location.href='Index.php';
        </script>";
  }
}
?>