document.addEventListener("DOMContentLoaded", () => {
  window.onresize = resizeFirstSection(); // Corrected assignment

  let canvases = document.querySelectorAll("canvas");
  let termometers = document.querySelectorAll(".termometro");

  termometers.forEach((element, index) => {
    console.log(element);
    canvases[index].width = element.offsetWidth;
    canvases[index].height = element.offsetHeight;
  });

  let colors = [
    "rgb(122, 46, 128)",
    "rgb(181, 27, 66)",
    "rgb(227, 96, 2)",
    "rgb(84, 41, 30)",
  ];

  var i = 0;

  canvases.forEach((canvas) => {
    var mouse = { x: 0, y: 0 };
    var last_mouse = { x: 0, y: 0 };
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 10;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = colors[i];

    /* Mouse Capturing Work */
    canvas.addEventListener(
      "mousemove",
      function (e) {
        var rect = canvas.getBoundingClientRect();

        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;

        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      },
      false
    );

    /* Drawing on Paint App */
    canvas.addEventListener(
      "mousedown",
      function () {
        canvas.addEventListener("mousemove", onPaint, false);
      },
      false
    );

    canvas.addEventListener(
      "mouseup",
      function () {
        canvas.removeEventListener("mousemove", onPaint, false);
      },
      false
    );

    var onPaint = function () {
      ctx.beginPath();
      ctx.moveTo(last_mouse.x, last_mouse.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.closePath();
      ctx.stroke();
    };

    i++;
  });
});

function resizeFirstSection() {
  let firstSection = document.querySelector(".first-sect");
  let firstSectionImage = document.querySelector(".first-sect-img");
  firstSection.style.minHeight = firstSectionImage.height + "px";
}
