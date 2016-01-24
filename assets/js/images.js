/**
cheating the fact that I don't know how to do backend yet.
At least not in the time we had available 
#CarryingTheTeam
**/


    /**
click the divs where the pins on the map 
to show what foods are available
**/

    
    
/*$(document).ready(function(){
    $(".one").click(function(){
        $(".fruit", ".vegetables").hide();
    });
    $(".two").click(function(){
        $(".fruit").show();
    });


});*/



/*
click to show navigation to food
*/

$(document).ready(function(){
    $(".one").click();
  //  $('#signIn, #signUp, #crowdBox, #search').css('opacity', '0.0');
    $(window).animate({
        scrollTop: $(".fbh").offset().top
    }, 1000);  
    console.log("done");


$('.one').click(function(){    
            $('.fbh').fadeIn('slow');
        console.log("sign in");
    });
    
});


