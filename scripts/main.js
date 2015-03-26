


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