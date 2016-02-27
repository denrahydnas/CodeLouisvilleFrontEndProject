$(document).ready(function(){

$('nav ul').hide();

$('nav').mouseenter(function(){
    $('nav').css('background', "#FFF");
    $('nav').css('box-shadow', '-5px 5px 10px #FC3');
});
    
$('nav').mouseleave(function(){
    $('nav').css('background', "rgba(255,255,255,0.9)")
    $('nav').css('box-shadow', '-5px 5px 10px #006')
});
    
$("nav").click(function(){
    $("nav ul").slideToggle();
});  
      
});