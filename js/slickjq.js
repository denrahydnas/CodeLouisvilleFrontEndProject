$(document).ready(function(){
    
 $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider-nav',
    speed: 600,
    adaptiveHeight:true
});
$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    speed: 800,
    touchMove:true,
});

$('.icon-next').slick('slickNext');
    
$('.icon-prev').slick('slickPrev');
    
});



