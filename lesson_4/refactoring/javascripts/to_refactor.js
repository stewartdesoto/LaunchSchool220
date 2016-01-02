$(function() {

 var months = {January: "garnet", February: "amethyst", March: "aquamarine",
                April: "diamond", May: "emerald", June: "pearl"};
       


  $("nav a").on("mouseenter", function() {
    $(this).next("ul").addClass("opened");
  });

  $("nav").on("mouseleave", function() {
    $(this).find("ul ul").removeClass("opened").addClass("accordion");
  });

  $(".button, button").on("click", function(e) {
    e.preventDefault();

    $(this).addClass("clicked");
  });


  $(".toggle").on("click", function(e) {
    e.preventDefault();

    $(this).next(".accordion").toggleClass("opened");
    // if ($(this).next(".accordion").hasClass("opened")) {
    //   $(this).next(".accordion").removeClass("opened");
    // }
    // else {
    //   $(this).next(".accordion").addClass("opened");
    // }
  });

  $("form").on("submit", function(e) {
    e.preventDefault();

    var cc_number = $(this).find("[type=text]").val();
    var is_valid = ccTotal(cc_number) % 10 == 0;
    console.log(is_valid);
    $(this).find(".success").toggle(is_valid);
    $(this).find(".error").toggle(!is_valid);

    // if ((ccTotal(cc_number)) % 10 == 0) {
    //   $(this).find(".success").show();
    //   $(this).find(".error").hide();
    // }
    // else {
    //   $(this).find(".error").show();
    //   $(this).find(".success").hide();
    // }
  });

  $("ul  a").on("click", function(e) {
    e.preventDefault();

    var month = $(this).text();
    var $stone = $("#birthstone");
    console.log($stone);
    $stone.text = "Your birthstone is ";
  }); 
});

function ccTotal(cc_number) {
  var odd_total = 0;
  var even_total = 0;

    cc_number = cc_number.split("").reverse();
    for (var i = 0, len = cc_number.length; i < len; i++) {
      if (i % 2 == 1) {
        cc_number[i] = (+cc_number[i] * 2) + "";
        if (cc_number[i].length > 1) {
          cc_number[i] = +cc_number[i][0] + +cc_number[i][1];
        }
        else {
          cc_number[i] = +cc_number[i];
        }
        odd_total += cc_number[i];
      }
      else {
        even_total += +cc_number[i];
      }
    }
    return odd_total + even_total;
}