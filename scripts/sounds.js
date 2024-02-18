document.addEventListener("DOMContentLoaded", function () {
  const audio = document.querySelector(".crownSound");

  const crown = document.querySelector(".crown");

  crown.addEventListener("mouseenter", crownSound);
  crown.addEventListener("click", crownSound);

  function crownSound() {
    audio.volume = 0.1;
    audio.play();
  }
});
