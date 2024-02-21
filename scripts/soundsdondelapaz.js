document.addEventListener("DOMContentLoaded", function () {
  function randomInt() {
    return Math.floor(Math.random() * 5);
  }

  const cello = document.querySelector(".cello");

  const note1 = document.querySelector(".note1");
  const note2 = document.querySelector(".note2");
  const note3 = document.querySelector(".note3");
  const note4 = document.querySelector(".note4");
  const note5 = document.querySelector(".note5");

  const availableSounds = [note1, note2, note3, note4, note5];

  availableSounds.forEach((audio) => {
    audio.volume = 0.1;
  });

  cello.addEventListener("click", function () {
    let currentNote = availableSounds[randomInt()];
    currentNote.currentTime = 0;
    currentNote.play();
  });
});
