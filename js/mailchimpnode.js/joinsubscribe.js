'use strict';

$(document).ready(function(){

var Mailchimp = require('mailchimp-api-v3');
var chimp = require('vars.js');

var mailchimp = new Mailchimp(api_key);


var subscriber = function formResults(){
        var fName = $("#firstName").val();
        var lName = $("#lastName").val();
        var email = $("#email").val();
        var info = {
                email_address: email,
                status:"subscribed",
                "merge_fields": {
                    "FNAME": fName, 
                    "LNAME": lName
                }        
            };
        var infoObject = JSON.stringify(info);
        console.log(infoObject);
    };
//    


var call = [
{
  method : 'post',
  path : '/lists/d535b3bcc2/members/',
  body : { subscriber }
}];

$("#submit").submit(function(e){
   e.preventDefault();
    mailchimp.post({call}, callback);
});
    
});    


    
   // function mailChimpPost(data){   
   //     $.ajax({
   //         url: url,
     //       user: apiKey,
       //     method: 'POST',
         //   data: subscriber,
         //   dataType: 'jsonp',
         //   contentType: 'application/json; charset=utf-8',
        //    error: function(res, text){
          //      console.log('Error', res);
        //    },
        //    success: function(res){
        //        console.log('Success', res);
        //    }
      //  });
  //  });