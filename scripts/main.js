<<<<<<< HEAD



(function($) {

    $.fn.autoComplete = function() {

        $(this).keyup(function(){
            var q = $("#field").val();
        $.getJSON("http://en.wikipedia.org/w/api.php?callback=?",
        {
          srsearch: q,
          action: "query",
          list: "search",
          format: "json"
        },function(data) {
            $("#result").empty();
          $("#result").append("<div class='searchFor'>" +  "Results for <b>" + q + "</b>" + "</div>");
            $.each(data.query.search, function(i,item){
           $("#result").append("<div><a href='http://en.wikipedia.org/wiki/" + encodeURIComponent(item.title) + "'>" + item.title);
        });
        });
            
            
            
            
        });

    }

}(jQuery));
=======
$("#field").autocomplete({
    source: function (request, response) {
        $.ajax({
            url: "http://en.wikipedia.org/w/api.php",
            dataType: "jsonp",
            data: {
                'action': "opensearch",
                'format': "json",
                'search': request.term
            },
            success: function (data) {
                response(data[1]);
                $('ul li').addClass('animated fadeIn');
            }
        });
    }
});
>>>>>>> d6a30f269cc7e7a10ce038e3925e59f422d8c2bb
