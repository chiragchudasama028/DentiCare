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