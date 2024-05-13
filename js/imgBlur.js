// document.addEventListener("DOMContentLoaded", function() {
//     var img = document.getElementById("headerImage");

//     var canvas = document.createElement("canvas");
//     var ctx = canvas.getContext("2d");

//     canvas.width = img.width;
//     canvas.height = img.height;

//     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

//     var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     var pixels = imageData.data;

//     var r = 0, g = 0, b = 0;
//     for (var i = 0; i < pixels.length; i += 4) {
//       r += pixels[i];
//       g += pixels[i + 1];
//       b += pixels[i + 2];
//     }
//     var numPixels = pixels.length / 4;
//     var avgR = Math.round(r / numPixels);
//     var avgG = Math.round(g / numPixels);
//     var avgB = Math.round(b / numPixels);

//     var gradientColor = "linear-gradient(to top, #111 0%,rgba(" + avgR + ", " + avgG + ", " + avgB + ", 0.5) 100%)";
//     document.querySelector(".blur").style.background = gradientColor;
// });

document.addEventListener("DOMContentLoaded", function() {
    var img = document.getElementById("headerImage");

    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var pixels = imageData.data;

    var r = 0, g = 0, b = 0;
    for (var i = 0; i < pixels.length; i += 4) {
      r += pixels[i];
      g += pixels[i + 1];
      b += pixels[i + 2];
    }
    var numPixels = pixels.length / 4;
    var avgR = Math.round(r / numPixels);
    var avgG = Math.round(g / numPixels);
    var avgB = Math.round(b / numPixels);

    var saturation = 30; 
    var blueSaturation = 50; 
    avgR = Math.max(avgR - saturation, 20);
    avgG = Math.min(avgG + saturation, 250); 
    avgB = Math.min(avgB + saturation + blueSaturation, 200); 

    var gradientColor = "linear-gradient(180deg, rgba(" + avgR + ", " + avgG + ", " + avgB + ", 0.3) 0%, #111 100%)";
    document.querySelector(".blur").style.background = gradientColor;
});


  