<?php
/*

*/
function conectar() {
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "rev";
$conn = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
if (!$conn)
{
	die("No hay conexion: ".mysqli_connect_error);
}
return $conn;
}
?>