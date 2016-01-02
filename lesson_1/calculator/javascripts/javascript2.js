window.onload = function() {
  alert("loaded");
  document.getElementById("calculator").onsubmit = function(e) {
    e.preventDefault();
    var number1 = +document.getElementById("num1").value,
        number2 = +document.getElementById("num2").value,
        operation = document.getElementById("operation").value,
        result;
    if (operation === "+") {
      result = number1 + number2;
    }
    else if (operation === "-") {
      result = number1 - number2;
    }
    else if (operation === "*") {
      result = number1 * number2;
    }
    else {
      result = number1 / number2;
    }
    document.getElementById("answer").innerHTML = result;
  };

};