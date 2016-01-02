$(function() {
  var canvas = $("canvas")[0];
  var ctx = canvas.getContext("2d");
  var active_class = "active";
  var method;

  var drawing_methods = {
    square: function(e) {
      var side = 30;
      var x = e.offsetX - side/2;
      var y = e.offsetY - side/2;
      ctx.fillRect(x, y, side, side);
    },

    circle: function(e) {
      var radius = 15;
      var x = e.offsetX - radius/2;
      var y = e.offsetY - radius/2;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2*Math.PI);
      ctx.fill();
      ctx.closePath();
    },

    triangle: function(e) {
      var side = 40;
      var x = e.offsetX - side/2;
      var y = e.offsetY;
      ctx.beginPath();
      ctx.lineTo(x+side/2, y-side/2);
      ctx.lineTo(x+side, y);
      ctx.lineTo(x,y);
      ctx.fill();
      ctx.closePath();
    },

    clear: function(e) {
      ctx.clearRect(0,0,canvas.width, canvas.height);
    }
  }

  $("#clear").on("click", function(e) {
    e.preventDefault();
    drawing_methods["clear"]();
  });

  $("input:text").on("change", function() {
    var color = $(this).val();
    ctx.fillStyle=color;
  });

  $(".drawing_method").on("click", function(e) {
    e.preventDefault();
    var $e = $(this),
        class_name = "active";
    console.log(e);    
    $e.closest("ul").find("." + class_name).removeClass(class_name);
    $e.addClass(class_name);
    method=$e.attr("data-method")
    console.log(method);

  });

  $(".drawing_method").eq(1).click()

  $("canvas").on("click", function(e) {
    console.log(method);
    drawing_methods[method](e);
  });

});