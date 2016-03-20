'use strict';

$(document).ready(function(){

    function postSuggestions(){
        var info = {
                formkey:"1wjb4ZXftkcEkZk1LaY39kIPOgtVleJ7QBwJSADQ65hQ",
                idea: $("#projectidea").val(),
                email: $("#contactemail").val(),
                name: $("#contactname").val(),
                };               
        var infoObject = JSON.stringify(info);
        console.log(infoObject);
    
    $.ajax({
        url: "https://docs.google.com/spreadsheet/formResponse",
        data: infoObject,
        method: "POST",
        dataType: "JSON",
        statusCode: {
            0: function() {
                console.log("try again!")
            },
            200: function() {
                console.log("success!") //Success Message
            }
        }
    });

    $('#ideasubmit').click(function (event){
        event.preventDefault();
        postSuggestions();
        return false;
    });
    };
});
