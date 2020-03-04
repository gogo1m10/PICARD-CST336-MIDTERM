$(document).ready(function() {

  $("#search").on("click", function() {
    $("#book").empty();
    var url = "https://openlibrary.org/api/books?bibkeys=ISBN:" + $("#isbn").val() + "&format=json&jscmd=data";

    $.ajax({
      method: "GET",
         url: url,
    dataType: "json",
     success: function(result, status) {
       var data = result["ISBN:" + $("#isbn").val()];
       $("#book").append("<div class=\"col-sm-3 cover\"><img src=\"" + data.cover.large + "\"></div>");
       $("#book").append("<div class=\"col-sm-4 info\"></div>");

       $(".info").append("<p>Title: " + data.title + "</p>");
       $(".info").append("<p>Author: " + data.authors[1] + "</p>");
       $(".info").append("<p>Publish: " + data.publish_date + "</p>");
       $(".info").append("<p>Publisher: " + data.publishers[0].name + "</p>");
       $(".info").append("<p>ISBN: " + $("#isbn").val() + "</p>");
       $(".info").append("<p>Pages: " + data.number_of_pages + "</p>");
     } // function
    }); // Ajax
  }) // Click
}); // Ready
