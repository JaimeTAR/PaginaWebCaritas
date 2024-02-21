document.addEventListener("DOMContentLoaded", function () {
  const audio = document.querySelector(".crownSound");
  audio.volume = 0.1;

  const crown = document.querySelector(".crown");

  function crownSound() {
    audio.play();
  }

  crown.addEventListener("mouseenter", crownSound);
  crown.addEventListener("click", crownSound);
});
