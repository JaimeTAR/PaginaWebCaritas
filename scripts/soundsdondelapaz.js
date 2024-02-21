document.addEventListener("DOMContentLoaded", function () {
  function randomInt() {
    return Math.ceil(Math.random() * 6);
  }

  const cello = document.querySelector(".violonchelo");

  const section = document.querySelector(".lapaz__ejemplo__info");

  cello.addEventListener("click", function () {
    var audio = document.createElement("audio");
    // audio.className = "prueba";
    var source = document.createElement("source");
    source.src = `../audio/notes/Note${randomInt()}.mp3`;
    audio.volume = 0.8;
    audio.append(source);
    section.append(audio);
    audio.play();
    setTimeout(() => {
      audio.remove();
    }, 2000);
  });
});
