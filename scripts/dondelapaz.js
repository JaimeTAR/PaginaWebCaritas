document.addEventListener("DOMContentLoaded", function () {
  const cello = document.querySelector(".violonchelo");

  const section = document.querySelector(".lapaz__ejemplo__info");

  var fadeDelay = 1000;
  var fadeDuration = 1000;

  // filter: invert(26%) sepia(77%) saturate(7099%) hue-rotate(357deg) brightness(102%) contrast(133%); RED
  // filter: invert(100%) sepia(45%) saturate(4157%) hue-rotate(360deg) brightness(108%) contrast(108%); YELLOW
  // filter: invert(92%) sepia(93%) saturate(2218%) hue-rotate(49deg) brightness(95%) contrast(112%); GREEN
  // filter: invert(80%) sepia(92%) saturate(660%) hue-rotate(106deg) brightness(102%) contrast(107%); BABY BLUE
  // filter: invert(11%) sepia(100%) saturate(3880%) hue-rotate(241deg) brightness(109%) contrast(153%); BLUE
  // filter: invert(11%) sepia(91%) saturate(6726%) hue-rotate(272deg) brightness(95%) contrast(123%); PURPLE
  // filter: invert(35%) sepia(40%) saturate(5174%) hue-rotate(280deg) brightness(107%) contrast(113%); PINK
  // filter: invert(48%) sepia(80%) saturate(1150%) hue-rotate(359deg) brightness(99%) contrast(103%); ORANGE

  const colorFilters = [
    "invert(26%) sepia(77%) saturate(7099%) hue-rotate(357deg) brightness(102%) contrast(133%)",
    "invert(100%) sepia(45%) saturate(4157%) hue-rotate(360deg) brightness(108%) contrast(108%)",
    "invert(92%) sepia(93%) saturate(2218%) hue-rotate(49deg) brightness(95%) contrast(112%)",
    "invert(80%) sepia(92%) saturate(660%) hue-rotate(106deg) brightness(102%) contrast(107%)",
    "invert(11%) sepia(100%) saturate(3880%) hue-rotate(241deg) brightness(109%) contrast(153%)",
    "invert(11%) sepia(91%) saturate(6726%) hue-rotate(272deg) brightness(95%) contrast(123%)",
    "invert(35%) sepia(40%) saturate(5174%) hue-rotate(280deg) brightness(107%) contrast(113%)",
    "invert(48%) sepia(80%) saturate(1150%) hue-rotate(359deg) brightness(99%) contrast(103%)",
  ];

  cello.addEventListener("click", function (e) {
    // Aparición de nota musical
    var div = document.createElement("div");
    div.className = "image-wrapper";
    div.style.left = e.pageX + "px";
    div.style.top = e.pageY + "px";

    var img = document.createElement("img");
    img.src = `../images/dondelapaz/imgnote${randomInt(1, 3)}.png`;
    img.alt = "Nota musical";
    img.draggable = false;
    img.style.filter = colorFilters[randomInt(0, 7)];
    img.style.width = randomInt(20, 40) + "px";
    img.style.userSelect = "none";

    div.appendChild(img);
    document.body.appendChild(div);
    setTimeout(() => {
      div.classList.add("hovering");
    }, 10);
    setTimeout(function () {
      div.classList.add("fade-out");
      setTimeout(function () {
        div.remove();
      }, fadeDuration);
    }, fadeDelay);

    // Reproducción del audio
    var audio = document.createElement("audio");
    var audioSrcMp3 = document.createElement("source");
    var audioSrcOgg = document.createElement("source");

    var noteNum = randomInt(1, 8);

    audioSrcMp3.src = `../audio/notes/Note${noteNum}.mp3`;
    audioSrcOgg.src = `../audio/notes/Note${noteNum}.ogg`;
    audio.append(audioSrcMp3);
    audio.append(audioSrcOgg);
    section.append(audio);
    audio.volume = 0.6;
    audio.play();
    setTimeout(() => {
      audio.remove();
    }, 2000);
  });
});

function randomInt(min, max) {
  return Math.floor(Math.random() * max) + min;
}
