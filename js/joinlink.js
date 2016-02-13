$(document).ready(function(){
    
//variables
var $formOverlay = $('<div id="overlay"></div>').append($(".joinform"));
var firstname = $("#firstname").val();
var lastname = $("#lastname").val();
var email = $("#email").val();
    
//Add overlay to body
    $("body").append($formOverlay);

// show join form
   $('.joinlink').click(function(){
        $('.joinform').toggle(); 
    });
    
$('.joinlink').click(function(event){
        event.preventDefault();
            $formOverlay.show();
  });
    
//When overlay is clicked, hide overlay
$formOverlay.dblclick(function(){
    $formOverlay.hide();
    });
    
//disable submit until required inputs are filled    
    
   if (!(firstname == "" && lastname == "" && email == "")) {
        $('#submit').prop('disabled',false)
    } else {
       $('#submit').prop('disabled',true)
   };
    
});