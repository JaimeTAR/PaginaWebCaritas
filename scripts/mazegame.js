document.addEventListener("DOMContentLoaded", (e) => {
  let eraser = document.querySelector(".eraser");

  eraser.addEventListener("click", (e) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  resizeCanvas();

  var canvas = document.querySelector(".drawable");
  var ctx = canvas.getContext("2d");

  const laberinth = document.querySelector(".playable");

  canvas.width = laberinth.width;
  canvas.height = laberinth.height;

  var rect = canvas.getBoundingClientRect();

  window.onresize = resizeCanvas;

  var mouse = {
    x: canvas.width * 0.49,
    y: canvas.height * 0.19,
  };

  var last_mouse = { x: 0, y: 0 };

  function resizeCanvas() {
    setTimeout(() => {
      canvas.width = laberinth.width;
      canvas.height = laberinth.height;
      ctx.lineWidth = 3;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.strokeStyle = "green";
    }, 50);
  }

  ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.strokeStyle = "green";

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
    function (e) {
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

  // Mobile support:
  canvas.addEventListener(
    "touchmove",
    function (e) {
      e.preventDefault();

      var rect = canvas.getBoundingClientRect();
      var touch = e.touches[0];

      last_mouse.x = mouse.x;
      last_mouse.y = mouse.y;

      console.log(last_mouse.x);
      console.log(last_mouse.y);

      mouse.x = touch.clientX - rect.left;
      mouse.y = touch.clientY - rect.top;

      console.log(mouse.x);
      console.log(mouse.y);
    },
    false
  );

  canvas.addEventListener(
    "touchstart",
    function (e) {
      e.preventDefault();
      canvas.addEventListener("touchmove", onPaint, false);
    },
    false
  );

  canvas.addEventListener(
    "touchend",
    function (e) {
      canvas.removeEventListener("touchmove", onPaint, false);
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
});
