'use strict'

$(document).ready(function(){
    
//variables
    var $formOverlay = $('<div id="overlay"></div>').append($(".joinform"));
    
//Add overlay to body
    $("body").append($formOverlay);

// show join form
    $('.joinlink').click(function () {
        event.preventDefault();
        $('.joinform').show(); 
    });
    
    $('.joinlink').click(function (event) {
        $formOverlay.show();
    });
    
//When overlay is double clicked, hide overlay
    $formOverlay.dblclick(function () {
        $formOverlay.hide();
    });  

   
});