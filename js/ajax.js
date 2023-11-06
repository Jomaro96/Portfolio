$(document).ready(function(){

    $("#user_login").submit(function(){
       // e.preventDefault();

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
            data: {
                email: email,
                pwd: pwd
            },
            beforeSend: function(){
                console.log("Enviando usuario");
            },
            success: function(response) {
                console.log(response);
            },
            error: function (){
                console.log("Error");
            },
            
        });
        //return false;
    });

});