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
    $(".input-btn , .light , .drak").click(function(){
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
var counted = 0;
$(window).scroll(function() {

  var oTop = $('.counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }

        });
    });
    counted = 1;
  }

});
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})
var animationDelay = 3500;
 
animateHeadline($('.cd-headline'));
 
function animateHeadline($headlines) {
	$headlines.each(function(){
		var headline = $(this);
		setTimeout(function(){ hideWord( headline.find('.is-visible') ) }, animationDelay);
	});
}

function hideWord($word) {
	var nextWord = takeNext($word);
	switchWord($word, nextWord);
	setTimeout(function(){ hideWord(nextWord) }, animationDelay);
}
 
function takeNext($word) {
	return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
}
 
function switchWord($oldWord, $newWord) {
	$oldWord.removeClass('is-visible').addClass('is-hidden');
	$newWord.removeClass('is-hidden').addClass('is-visible');
}

singleLetters($('.cd-headline.letters').find('b'));
 
function singleLetters($words) {
	$words.each(function(){
		var word = $(this),
			letters = word.text().split(''),
			selected = word.hasClass('is-visible');
		for (i in letters) {
			letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
		}
	    var newLetters = letters.join('');
	    word.html(newLetters);
	});
}
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  items:1
});
});
// Accordian
var action="click";
var speed="500";

$(document).ready(function() {
    $('li.q').on(action, function() {
        $(this).next().slideToggle(speed).siblings('li.a').slideUp();
    });
});