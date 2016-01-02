$(function() {


  $("nav a").on("click", function(e) {
    e.preventDefault();
    var $a = $(this);
    var idx = $a.closest("li").index();
    console.log(idx);
    $("#tabs article").hide().eq(idx).show();
    $a.closest("nav").find(".active").removeClass("active");
    $a.addClass("active");
    localStorage.setItem("active_nav", idx);
   });

  $(":radio").on("change", function(e) {
    e.preventDefault();
    $color = $(this).val();
    $(document.body).css("background", $color);
    localStorage.setItem("background_color", $color);
  });

  $(window).unload(function()  {
    console.log("unloading");
    $note = $("textarea").val();
    localStorage.setItem("note", $note);
    console.log($note);
  });

  setActiveNav(localStorage.getItem("active_nav"));
  setBackground(localStorage.getItem("background_color"));
  setNote(localStorage.getItem("note"));

});

function setActiveNav(idx) {
  if (idx === null) return;
  $("nav a").eq(idx).click();
}

function setBackground(color) {
  if (color === null) {return;}
  $("[value=" + color + "]").prop("checked", "true").change();
}

function setNote(comment) {
  $("textarea").val(comment);
}