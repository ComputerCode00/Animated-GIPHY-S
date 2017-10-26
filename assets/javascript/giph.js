$(document).ready(function() {
                                    
  var cars = ["Ford", "Aston Martin", "BMW", "Civic", "Fiat", "Dodge Charger", "Ferrari"];

  function renderButtons(){

    $("#model-type").empty();

    for (var i = 0; i < cars.length; i++) {

      var a = $("<button>");
      a.addClass("car");
      a.attr("data-search", cars[i]);
      a.text(cars[i]);
      $("#model-type").append(a);
    }
  }

          /*code works with buttons that are in Html*/
  $("#add-car").on("click", function(event){
    console.log("hello");
    event.preventDefault();
    var car = $("#car-input").val().trim();
    cars.push(car);
    renderButtons();
  });

  $("body").on("click", "button", function() {
    var x = $(this).data("search");


    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=saKWARm55UoZUPv4rXQBcRrwxdDnvXmC&limit=10";
    console.log(queryURL);

    $.ajax({url:queryURL, method: "GET"})
    .done(function(response) {
      console.log(response);
      for (var i = 0; i < response.data.length; i++) {

        $("#animate").prepend("<p>Rating: " + response.data[i].rating + "</p>");
        $("#animate").prepend("<img src = '" + response.data[i].images.downsized.url + "'>");

      }
    });

  });

});




/*$("body").on("click", "button")*/

