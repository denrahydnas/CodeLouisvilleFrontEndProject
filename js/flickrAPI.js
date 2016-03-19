'use strict';

$(document).ready(function () {
    
  $('button').click(function () {
    $("button").removeClass("selected");
    $(this).addClass("selected");
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var activity = $(this).text();
    var flickrOptions = {
      tags: "rotaract," + activity,
      format: "json"      
    };
      
      
    function displayPhotos(data){  
      var photoHTML = '<div class="row frame">';
        
        $.each(data.items, function(i, photo) {
        photoHTML += '<div class="col-sm-3 thumbs">';
        photoHTML += '<a href = "' + photo.link + '" class="image">';
        photoHTML += '<img src ="' + photo.media.m + '"></a></div>';
            
      });
      photoHTML += '</div>';
      $('#photos').html(photoHTML);
    };
      
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  }); //end click
}); // end ready