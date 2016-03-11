$(document).ready(function(){
    
//variables
var $formOverlay = $('<div id="overlay"></div>').append($(".joinform"));
    
//Add overlay to body
    $("body").append($formOverlay);

// show join form
   $('.joinlink').click(function(){
       event.preventDefault();
        $('.joinform').show(); 
    });
    
$('.joinlink').click(function(event){
           $formOverlay.show();
 });
    
//When overlay is double clicked, hide overlay
$formOverlay.dblclick(function(){
    $formOverlay.hide();
    });  
});


$("#join").submit(function(event) {
  if ($("#firstname").val().length > 0 && $("#lastname").val().length > 0 && $("#email").val().length > 0) {
    return;
  }else{
  event.preventDefault();
    }

});

