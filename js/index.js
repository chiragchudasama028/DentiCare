new WOW().init();
$(window).on('load' ,function() {
	$(".loader").delay(900).fadeOut("slow" , function(){
        $("body").removeClass('hide');
    });
    $("#preloader").delay(1000).fadeOut("slow");
});
$(document).ready(function(){
    $('.toggle').bind('click',function(event){
        $('nav').slideToggle();
    });
    $(window).resize(function(){  
        var w = $(window).width();  
        if(w >= 991) {  
            $('nav').removeAttr('style');  
        }  
    });
    $(".backtotop").click(function(){
        $('html, body').animate({scrollTop:0}, '1000'); 
    });
    $(".switcher").click(function(){
        $(".theme-switcher").slideDown();
    });
    $(".input-btn").click(function(){
        $(".theme-switcher").slideUp();
    });
    $(".theme-switcher a").on("click",function(){
        var path = $(this).data("path");
        $("#switcher-link").attr("href" , path);
    });
});    
$(window).scroll(function(){
    if($(this).scrollTop() > 133){
        $(".main-nav").addClass('fixed-header');
    }
    else {
        $(".main-nav").removeClass('fixed-header');
    }
    if($(this).scrollTop() > 800){
        $(".backtotop").fadeIn();
    }
    else {
        $(".backtotop").fadeOut();
    }
});
function changcolor(){
    var color = document.getElementById('bgcolor_').value; 
    document.body.style.backgroundColor = color;
    var color = document.getElementById('maintitale_').value; 
    const maintitale = document.getElementsByTagName("h2");
    for (h2 of maintitale) {
         h2.style.color = color;
    };
    var color = document.getElementById('subtitle_').value; 
    const subtitle = document.getElementsByTagName("h3");
    for (h3 of subtitle) {
         h3.style.color = color;
    };
    var color = document.getElementById('paragraph_').value; 
    const paragraph = document.getElementsByTagName("p");
    for (p of paragraph) {
         p.style.color = color;
    };
    var color = document.getElementById('bg-color_').value; 
    document.getElementById('chanag-color').style.backgroundColor = color;
    document.getElementById('about').style.backgroundColor = color;
};