$(function() {

  var url = "http://callmenick.com/post/various-css-input-text-styles";

  $('#new_artifact').submit(function(e) {

   e.preventDefault();
      /*$.post('https://serene-retreat-3166.herokuapp.com/artifacts.json', {"artifact": { "link": "http://www.businessinsider.com/hillary-clinton-will-announce-her-campaign-this-weekend-2015-4", "user_id": 2}});
       */

      var artifacts_url = "https://serene-retreat-3166.herokuapp.com/artifacts.json"
      $.ajax({
        type: "POST",
        url: artifacts_url,
        data: {"artifact": {
         "link": url,
         "user_id": 2,
        }},
         success: function(resp){
          console.log(resp);
        },
        error: function(resp){
          console.log(resp + "f");
        }
      });

    this.reset();
    });
});