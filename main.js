$(function() {

  $('#new_artifact').submit(function(e) {
   e.preventDefault();
      /*$.post('https://serene-retreat-3166.herokuapp.com/artifacts.json', {"artifact": { "link": "http://www.businessinsider.com/hillary-clinton-will-announce-her-campaign-this-weekend-2015-4", "user_id": 2}});
       */

    var url = "http://www.businessinsider.com/hillary-clinton-will-announce-her-campaign-this-weekend-2015-4";

    var givenTags = $('.theform').find('input[name="tag_list"]').val();

      var artifacts_url = "http://joinfellow.com/artifacts.json";
      $.ajax({
        type: "POST",
        url: artifacts_url,
        data: {"artifact": {
         "link": url,
         "user_id": 2,
         "tag_list": givenTags
        }},
         success: function(resp){
          console.log(resp);
        },
        error: function(resp){
          console.log(resp + "f");
        }
      });

    this.reset();
    $('#fellow-button').css('background-color', '#1ABC9C');
    $('#fellow-button').css('border-color', '#1ABC9C');
    });
});
