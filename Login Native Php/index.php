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
    <title>Login</title>
</head>
<body>

    <div id="container">
        
    <div id="box1" class="child_container">
        <div class="test-1">
        <h2>Welcome!</h2>
        <span class="span_index">This is a simple log in that i designed on my free time, feel free to check it out.</span>
        </div>
    </div>

    <div id="box2" class="child_container">
    
        <div class="test-1">
        <form id="user_login" action="login.php" method="post">
         <h2>Sign in</h2>
         
         <input class="input_index" type="email" name="e_mail" id="e_mail" placeholder="Your e_mail"/> <br>
         <input class="input_index" type="password" name="password" id="password" placeholder="Your password"> <br> <br>
         <input class="button_index" type= "submit" name="submit" value="Go!"/>
         <form>
        </div>

    </div>
    
    
    </div>

</body>
</html>
