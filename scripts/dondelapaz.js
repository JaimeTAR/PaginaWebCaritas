document.addEventListener("DOMContentLoaded", function () {
  function randomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  const cello = document.querySelector(".violonchelo");

  const section = document.querySelector(".lapaz__ejemplo__info");

  var fadeDelay = 1000;
  var fadeDuration = 1000;

  cello.addEventListener("click", function (e) {
    // Aparición de nota musical
    var div = document.createElement("div");
    div.className = "image-wrapper";
    div.style.left = e.pageX + "px";
    div.style.top = e.pageY + "px";

    var img = document.createElement("img");
    img.src = `../images/dondelapaz/imgnote${randomInt(1, 3)}.png`;
    img.alt = "myimage";
    img.style.width = randomInt(30, 50) + "px";

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
    var audioSrc = document.createElement("source");
    audioSrc.src = `../audio/notes/Note${randomInt(1, 8)}.mp3`;
    audio.volume = 0.8;
    audio.append(audioSrc);
    section.append(audio);
    audio.play();
    setTimeout(() => {
      audio.remove();
    }, 2000);
  });
});
