$(document).ready(function(){

    $("#user_login").submit(function(e){
         e.preventDefault();

        //Define Values
        /*var usuario = {
            email: $("input[name='e_mail']").val(),
            pwd: $("input[name='password']").val()
        };*/
        email = $("#e_mail").val();
        pwd = $("#password").val();

        //Ajax
        $.ajax({
            type: "POST",
            url: $(this).attr("action"),
            dataType: 'json',
            data: {
                email: email,
                pwd: pwd
            },
            beforeSend: function(){
                console.log("Enviando usuario");
            },
            success: function(response) {
                //console.log(response);
            },
            error: function (){
                console.log("Error");
            },
            
        }).done(function(response){

            console.log(response);
            if(!response.error){
                alert("Welcome");
                window.location.href = "main.php";
            }
            else{
                alert("Error");
            }
        }).fail(function(response){

            console.log(response.responseText);

        }).always(function(){

            console.log("complete");

        });
        //return false;
    })

});