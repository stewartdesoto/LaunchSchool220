$(function() {
  var $canvas = $("#canvas");

  function getFormObject($f) {
    var o = {};
    console.log($f.serializeArray());
  }

  $("form").on("submit", function(e) {
    e.preventDefault();

    var $f = $(this),
             data;

    getFormObject($f);

  });

});