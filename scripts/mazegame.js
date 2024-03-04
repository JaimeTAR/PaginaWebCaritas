var canvas = document.querySelector(".drawable");
var ctx = canvas.getContext("2d");

const laberinth = document.querySelector(".playable");

canvas.width = laberinth.width;
canvas.height = laberinth.height;

window.onresize = resizeCanvas;

var mouse = { x: 0, y: 0 };
var last_mouse = { x: 0, y: 0 };

function resizeCanvas() {
  canvas.width = laberinth.width;
  canvas.height = laberinth.height;
  ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.strokeStyle = "green";
}

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
ctx.lineWidth = 3;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.strokeStyle = "green";

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

var onPaint = function () {
  ctx.beginPath();
  ctx.moveTo(last_mouse.x, last_mouse.y);
  ctx.lineTo(mouse.x, mouse.y);
  ctx.closePath();
  ctx.stroke();
};
