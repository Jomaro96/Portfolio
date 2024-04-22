$(document).ready(function(){
    if(window.location.href.indexOf('index') > -1){
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive:true,
        pager:true
      });
    }

    if(window.location.href.indexOf('index') > -1){
    // Posts json array, titulo fecha y cuerpo
    var posts = [
        {
            title: 'Title test1',
            date: 'Posted on '+ moment().format("MMMM Do YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna fringilla urna porttitor rhoncus dolor purus. Viverra adipiscing at in tellus. Est lorem ipsum dolor sit amet consectetur. Fermentum et sollicitudin ac orci. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Varius duis at consectetur lorem. Massa tempor nec feugiat nisl. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Massa massa ultricies mi quis hendrerit dolor magna eget est. Integer malesuada nunc vel risus. Tellus integer feugiat scelerisque varius morbi enim nunc. Egestas sed tempus urna et pharetra. Felis eget nunc lobortis mattis aliquam faucibus purus. Velit aliquet sagittis id consectetur purus ut. Faucibus interdum posuere lorem ipsum dolor sit.'
        },
        {
            title: 'Title test2',
            date: 'Posted on '+ moment().format("MMMM Do YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna fringilla urna porttitor rhoncus dolor purus. Viverra adipiscing at in tellus. Est lorem ipsum dolor sit amet consectetur. Fermentum et sollicitudin ac orci. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Varius duis at consectetur lorem. Massa tempor nec feugiat nisl. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Massa massa ultricies mi quis hendrerit dolor magna eget est. Integer malesuada nunc vel risus. Tellus integer feugiat scelerisque varius morbi enim nunc. Egestas sed tempus urna et pharetra. Felis eget nunc lobortis mattis aliquam faucibus purus. Velit aliquet sagittis id consectetur purus ut. Faucibus interdum posuere lorem ipsum dolor sit.'
        },
        {
            title: 'Title test3',
            date: 'Posted on '+ moment().format("MMMM Do YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna fringilla urna porttitor rhoncus dolor purus. Viverra adipiscing at in tellus. Est lorem ipsum dolor sit amet consectetur. Fermentum et sollicitudin ac orci. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Varius duis at consectetur lorem. Massa tempor nec feugiat nisl. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Massa massa ultricies mi quis hendrerit dolor magna eget est. Integer malesuada nunc vel risus. Tellus integer feugiat scelerisque varius morbi enim nunc. Egestas sed tempus urna et pharetra. Felis eget nunc lobortis mattis aliquam faucibus purus. Velit aliquet sagittis id consectetur purus ut. Faucibus interdum posuere lorem ipsum dolor sit.'
        },
        {
            title: 'Title test4',
            date: 'Posted on '+ moment().format("MMMM Do YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna fringilla urna porttitor rhoncus dolor purus. Viverra adipiscing at in tellus. Est lorem ipsum dolor sit amet consectetur. Fermentum et sollicitudin ac orci. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Varius duis at consectetur lorem. Massa tempor nec feugiat nisl. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Massa massa ultricies mi quis hendrerit dolor magna eget est. Integer malesuada nunc vel risus. Tellus integer feugiat scelerisque varius morbi enim nunc. Egestas sed tempus urna et pharetra. Felis eget nunc lobortis mattis aliquam faucibus purus. Velit aliquet sagittis id consectetur purus ut. Faucibus interdum posuere lorem ipsum dolor sit.'
        },
    ]


    posts.forEach((item,index) => {
        var post = `
        <article class = "post">
         <h2>${item.title}</h2>
         <span class="date">${item.date}</span>
         <p>
         ${item.content}
         </p>
         <a href="#" class="button-more"> Read more </a>
         </article>
        `;
        $("#posts").append(post);
    })
}
    
    //Se puede implementar guardar con local storage para mantener el dato
    
    //Theme selector 
    var theme = $("#theme");

    if (localStorage.getItem("themes") === null) {
        console.log("no theme selected")
      }
    else {
    const themes = localStorage.getItem("themes");
    switch (themes) {
        case "green":  theme.attr("href","css/green.css");
        break;

        case "red": theme.attr("href","css/red.css");
        break;

        case "blue": theme.attr("href","css/blue.css");
        break;

        default: theme.attr("href","css/red.css");
        break;
    }
    }

    $("#to-green").click(function(){
        theme.attr("href","css/green.css");
        localStorage.removeItem("themes");
        localStorage.setItem("themes", "green");
    });   

    $("#to-red").click(function(){
        theme.attr("href","css/red.css");
        localStorage.removeItem("themes");
        localStorage.setItem("themes", "red");
    });   

    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
        localStorage.removeItem("themes");
        localStorage.setItem("themes", "blue");
    });   

    //Scroll
    $(".go-top").click(function(e){
        e.preventDefault();

        $("html, body").animate({
                scrollTop: 0
        }, 500);

        return false;
    });

    //Login falso
    $("#login form").submit(function(e){

            var user = $("#user").val();
            localStorage.setItem("user",user);

            //What should be realistically happening is that the user data is sent to the backend and we get a response and with that response we handle the login
    });

    if (localStorage.getItem("user") === null) {
        console.log("no user");
      }
    else {
    var user = localStorage.getItem("user");
    var about_p = $("#about p");
    about_p.html("<strong> Welcome "+user+"</strong>");
    about_p.append("<br></br><a href= '#' id='logout'> Logout</a>")
    $("#login").hide();
    }
    //Logout
    $("#logout").click(function(e){
        
        localStorage.removeItem("user");
        location.reload();
        
    });

    if(window.location.href.indexOf('about') > -1){
        $("#dropbox").accordion();
    }

    if(window.location.href.indexOf('clock') > -1){

        setInterval(function(){
            var clock = moment().format("hh:mm:ss");
            $("#clock").html(clock);
        },1000);
        
        
    }
    if(window.location.href.indexOf('contact') > -1){
        $("form input[name='date']").datepicker({
            dateFormat: "dd-mm-yy"
        });
    ///Data validation
    $.validate({
    lang:'es'
    });
    }
});