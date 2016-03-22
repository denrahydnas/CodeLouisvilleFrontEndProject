'use strict';

$(document).ready(function(){

    function postSuggestions(){
        var info = {
                formkey:"1wjb4ZXftkcEkZk1LaY39kIPOgtVleJ7QBwJSADQ65hQ",
                "entry.1644031193": $("#projectidea").val(),
                "entry.1658064550": $("#contactemail").val(),
                "entry.7375670": $("#contactname").val(),
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
                console.log("nice job")
            },
            200: function() {
                console.log("success!") //Success Message
            }
        }
    });

        $('#ideasubmit').click(function(event){
            event.preventDefault();
            postSuggestions();
            return false;
        });
    };
});
