$(document).ready(function(){
    $('.joinlink').click(function(){
        $('.joinform').toggle(); 
        });
    
//create overlay
var $overlay = $('<div id="overlay"></div>');
//Add form to overlay
var $formOverlay = $overlay.append($(".joinform"))
    
//Add overlay to body
    $("body").append($formOverlay);
 
$('.joinlink').click(function(event){
    event.preventDefault();
    $formOverlay.show();
    });

//When overlay is clicked, hide overlay
$overlay.click(function(){
    $formOverlay.hide();
    });
});