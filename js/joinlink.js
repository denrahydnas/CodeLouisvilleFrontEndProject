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

    
// $('#submit').submit(function(evt) {
function formResults(){
        //evt.preventDefault();
    var fName = $("#firstName").val();
    var lName = $("#lastName").val();
    var email = $("#email").val();
        var info = {
            firstname: fName,
            lastname: lName,
            email_address: email,
            status:"subscribed"
        };
    var infoObject = JSON.stringify(info);
    console.log(infoObject);


    var chimpAPI1 = 'https://us13.api.mailchimp.com/3.0/lists/d535b3bcc2/members/';
        
    //curl --request POST \
    //--url 'https://usX.api.mailchimp.com/3.0/lists/d535b3bcc2/members' \
    //--user:'SandyRotaract:b49c92500ed7f0424318e01b0f607587' \
    //--header 'content-type: application/json' \
    //--data --infoObject \
    //--include
             
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                document.getElementById('join').innerHTML = xhr.responseText;
         } else { 
                alert(xhr.statusText);
            };
        };
    };
    xhr.open('POST', chimpAPI1);
    xhr.send();

} // end click
//}); // end ready    

    
    
//$(document).ready(function() {
// $('form').submit(function(evt) {
//  evt.preventDefault();
//   var searchTerm = $('#search');
// the AJAX part
//  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
//    var animal = searchTerm.val()
//    var flickrOptions = {
//      tags: animal,
//      format: "json"
//    };
//    function displayPhotos(data) {
//      var photoHTML = '<ul>';
//      $.each(data.items,function(i,photo) {
//        photoHTML += '<li class="grid-25 tablet-grid-50">';
//        photoHTML += '<a href="' + photo.link + '" class="image">';
//        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
//      }); // end each
//      photoHTML += '</ul>';
//      $('#photos').html(photoHTML);
//    }
//    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
//  }); // end click
//}); // end ready    
      
    
//$.ajax({
     //   type: "POST",
     //   url: 'https://us13.api.mailchimp.com//3.0/lists/d535b3bcc2/members/',
     //   user:'SandyRotaract:b49c92500ed7f0424318e01b0f607587',
     //   dataType: "json",
     //   success: function (msg) {
     //       if (msg) {
     //        alert("Thanks, " + fName + "! We'll be in touch soon!");
     //         location.reload(true);
     //        } else {
    //          alert("Please try again!");
      //      }
     //  },
    //    data: infoObject
   //  });
//};

