$(document).ready (function() {
  $("#calculator").on("submit", function(e) {
    e.preventDefault();
    number1 = +$("#num1").val();
    number2 = +$("#num2").val();
    operation = $("#operation").val();
    var result;
    if (operation == "+") {
      result = number1 + number2;
    }
    else if (operation == "-") {
      result = number1 - number2;
    }
    else if (operation == "*") {
      result = number1 * number2;
    }
    else {
      result = number1 / number2;
    }
    $("#answer").text(result + ".");
  })

});