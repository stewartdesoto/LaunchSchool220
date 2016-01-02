$(function() {
  var $ul = $("#list");

  function addItem(name, quantity) {
    $ul.append("<li>" + quantity + " " + name + "</li>");
  }

  $("form").on("submit", function(e) {
    e.preventDefault();
    var $f = $(this),
        name = $f.find("#name").val(),
        quantity = $f.find("#quantity").val() || 1;

    if (name) {
      addItem(name, quantity);
      $f.get(0).reset();
    }

  });

  $("#clear").on("click", function () {
    $("ul").get(0).empty();

  });
});
