<?php
session_start();

session_destroy();
echo "<script>

alert('Logging Out');

window.location.href = 'index.php';

</script>";
?>