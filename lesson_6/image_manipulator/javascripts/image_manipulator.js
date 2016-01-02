var canvas = document.createElement("canvas"),
    ctx = canvas.getContext("2d");

var preloader = {
  path: "images/",
  srcs: ["1.jpg", "2.jpg", "3.jpg"],
  createImage: function(i, src) {
      var $img = $("<img />", {src: this.path + src});
      $img.on("load", manipulator.process.bind(manipulator));
  },
  run: function() {
    $.each(this.srcs, this.createImage.bind(this));
  }
};

var manipulator = {
  drawImage: function(img) {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img,0,0);
  },
  getData: function() {
    return ctx.getImageData(0, 0, canvas.width, canvas.height);
  },
  convertToGrayscale: function() {
    var image = this.getData(),
        gray_data;
    for (var i=0, len=image.length; i<len; i += 4) {
      gray_data = image.data[i] * 0.3086 + image.data[i+1]*0.6094 +
        image.data[i+2] * 0.0820;
      image.data[i] = gray_data;
      image.data[i+1] = gray_data;
      image.data[i+2] = gray_data;
    }
    ctx.putImageData(image, 0, 0);
    this.writeImage();
  },
  writeImage: function() {
    var img = document.createElement("img");
    img.src = canvas.toDataURL();
    $(document.body).append(img);
  },
  process: function(e) {
    var img = e.target;
    this.drawImage(img);
    this.convertToGrayscale();
    this.writeImage();
  }
}
$(preloader.run.bind(preloader));