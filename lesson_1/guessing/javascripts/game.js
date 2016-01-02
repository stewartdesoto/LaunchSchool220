$(document).ready(function() {

  var answer = Math.floor(Math.random()*100) + 1;
  var number_tries = 0;

  $("#guess_number").on("submit", function(e) {
    e.preventDefault();
    var guess = $("#guess").val();
    var message = "";
    number_tries++;
    if (guess>answer) {
      message = "You guessed too high";
    }
    else if (guess < answer) {
      message = "You guessed too low";
    }
    else {
      message = "You guessed it in " + number_tries + " tries!"
      alert("Game over!")
      window.location.href = "index.html";
    }
    $("p").text(message);

  });

});