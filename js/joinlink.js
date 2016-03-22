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
 

    function sendJoinForm(){
        var join = {
                formkey:"19ItNrd8lmdZQvKXa9wL8rAV3lpjYEq1I0bZnUQnXZPc",
                "entry.39023258": $("#firstname").val(),
                "entry.5671486": $("#lastname").val(),
                "entry.1728660091": $("#email").val(),
            };               
        var joinObject = JSON.stringify(join);
        console.log(joinObject);
    
        $.ajax({
            url: "https://docs.google.com/spreadsheet/formResponse",
            data: joinObject,
            method: "POST",
            dataType: "JSON",
            statusCode: {
                0: function() {
                    console.log("success")
                },
                200: function() {
                    console.log("success!") //Success Message
                }
            }
        });

        $('#submit').click(function(event){
            if ($("#firstname").val().length > 0 && $("#lastname").val().length > 0 && $("#email").val().length > 0) {
                $('#submit').prop('disabled',false)
                sendJoinForm(); 
            } else {
                $('#submit').prop('disabled',false)
                $("span").html("please complete required fields").show().fadeOut(3000);
                event.preventDefault(); 
            }
            
        });
    };
});


 
