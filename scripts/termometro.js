document.addEventListener("DOMContentLoaded", () => {
  let canvases = document.querySelectorAll("canvas");
  let termometers = document.querySelectorAll(".termo-thing");

  let colors = [
    "rgb(122, 46, 128)",
    "rgb(181, 27, 66)",
    "rgb(227, 96, 2)",
    "rgb(84, 41, 30)",
  ];

  // Assigning event handlers correctly
  window.onresize = () => {
    console.log("Window resized");
    resizeCanvases();
    resizeFirstSection();
  };

  function resizeCanvases() {
    console.log("Resizing canvases");
    termometers.forEach((element, index) => {
      canvases[index].width = element.offsetWidth;
      canvases[index].height = element.offsetHeight;
      var ctx = canvases[index].getContext("2d");
      ctx.lineWidth = 5;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.strokeStyle = colors[index];
    });
  }

  function resizeFirstSection() {
    console.log("Resizing first section");
    let firstSection = document.querySelector(".first-sect");
    let firstSectionImage = document.querySelector(".first-sect-img");
    firstSection.style.minHeight = firstSectionImage.offsetHeight + "px";
  }

  // Initial resize on page load
  resizeCanvases();
  resizeFirstSection();

  var i = 0;

  canvases.forEach((canvas) => {
    var mouse = { x: 0, y: 0 };
    var last_mouse = { x: 0, y: 0 };
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 5;
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
