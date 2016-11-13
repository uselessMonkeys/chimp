(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });

    new WOW().init();

    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
        $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });
})(jQuery);


/*
    JQUERY.SOCIALFEED - Social Feed
*/
(function($) {
    $('.social-feed-container').socialfeed({
        // FACEBOOK
        facebook: {
            accounts: ['@stmelsbrewing','#StMelsBrewing'],  //Array: Specify a list of accounts from which to pull posts
            limit: 3,
            access_token: '366543177021597|2abcd00558596ff13ac224cef7ffcd43'
        },

        // Twitter
        twitter: {
            accounts: ['@stmelsbrewing','#StMelsBrewing'],
            limit: 3,
            consumer_key: 'qzRXgkI7enflNJH1lWFvujT2P', // make sure to have your app read-only
            consumer_secret: '8e7E7gHuTwyDHw9lGQFO73FcUwz9YozT37lEvZulMq8FXaPl8O', // make sure to have your app read-only
        },



        // GENERAL SETTINGS
        show_media: false,
        length:200,
        // Moderation function - if returns false, template will have class hidden
        moderation: function(content) {
            return (content.text) ? content.text.indexOf('fuck') == -1 : true;
        },
        callback: function() {
            console.log('all posts are collected');
        }
    });
})(jQuery);



/*
    SMTP Cliect - Contact Us Form
*/

    function submit(){
        var clientName = document.getElementById("Name").value;
        var clientEmail = document.getElementById("Email").value;
        var clientPhone = document.getElementById("Phone").value;
        var clientMessage = document.getElementById("Message").value;

        if (validation(clientName, clientEmail)){
            Email.send("from@you.com", //From
                       "to@them.com",  //St Mels
                       "This is a subject", //subjecy
                       "this is the body", //body
                       "smtp.yourisp.com", //SMTP
                       "username",//Username
                       "password");//Password
        }

        else{

        }
    }

    // Name and Email validation Function.
    function validation(name, email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (name === '' || email === '') {
            alert("Please fill all fields...!!!!!!");
            return false;
        } else if (!(email).match(emailReg)) {
            alert("Invalid Email...!!!!!!");
            return false;
        } else {
            return true;
        }
    }