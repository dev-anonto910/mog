$(function(){

//counterup

$('.counter').counterUp({
    delay: 10,
    time: 3000
});

// slick slider

$('.feed-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
    prevArrow:'.left',
    nextArrow:'.right',
    fade:true,
    speed:1500,
  });
  
$('.team-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
   
  });
//venobox
$('.venobox').venobox();

});