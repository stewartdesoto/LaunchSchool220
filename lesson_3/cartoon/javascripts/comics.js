
$(function() {

  var $blinds = $("[id^=blind]"),
                delay=3000,
                speed=500;

  function startAnimation() {
    $blinds.each(function(i) {
      var $blind = $blinds.eq(i);
      $blind.delay(delay*i+delay).animate({
        top: "+=" +$blind.height(),
        height: 0
      }, speed);
    });
  }

  function resetAnimation() {
    $blinds.each(function(i) {
      var $blind = $blinds.eq(i);
      $blind.clearQueue();
      $blind.stop();
      $blind.removeAttr("style");
    });
  }

  $("#redo").on("click", function(e) {
    e.preventDefault();
    resetAnimation();
    startAnimation();
  });

  startAnimation();

});