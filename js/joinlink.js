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
    
    
    var FName = $("#firstname").val();
    var LName = $("#lastname").val();
    var email = $("#email").val();
    var $successMessage = ("<h5>Thank you for your interest in joining Rotaract, " + FName + "! We'll be in touch soon.</h5>");
    var $tryagain = ("<h5>We're sorry, the form isn't going through. Please refresh the page and try again. Thanks!</h5>");
    var $completeall = ("<h5>Please complete all fields. Thanks!</h5>");
        
      
    function sendJoinForm(){
        var join = {
                formkey:"19ItNrd8lmdZQvKXa9wL8rAV3lpjYEq1I0bZnUQnXZPc",
                "entry.39023258": FName,
                "entry.5671486": LName,
                "entry.1728660091": email,
            };               
        var joinObject = JSON.stringify(join);
    
        $.ajax({
            url: "https://docs.google.com/spreadsheet/formResponse",
            data: joinObject,
            method: "POST",
            dataType: "JSON",
            statusCode: {
                0: function() {
                    $("#jointext").remove();
                    $(".joinform").append($successMessage);
                },
                200: function() {
                    $("#jointext").remove();
                    $(".joinform").append($successMessage);
                },
                404: function() {
                    $("#jointext").remove();
                    $(".joinform").append($tryagain);
                }
            }
        });
        };

        $('#submit').click(function(event){
            if (FName.length > 0 && LName.length > 0 && email.length > 0) {
                $('#submit').removeProp('disabled');
                sendJoinForm(); 
            } else {
                $("button").remove();
                $("#jointext").append($tryagain); 
            }
        });   
    
});


 
