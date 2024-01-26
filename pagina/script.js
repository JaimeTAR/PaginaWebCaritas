document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  const navbarDropdown = document.querySelector(".navbar__dropdown");

  const dropdownToggle = document.getElementById("dropdown__toggle");

  dropdownToggle.addEventListener("click", function () {
    if (navbarDropdown.style.maxHeight === "0px") {
      navbarDropdown.style.maxHeight = "1000%";
      navbar.style.overflow = "visible";
    } else {
      navbarDropdown.style.maxHeight = "0px";
      navbar.style.overflow = "hidden";
    }
  });

  navbar.addEventListener("mouseleave", function () {
    navbarDropdown.style.maxHeight = "0px";
    navbar.style.overflow = "hidden";
  });

  const hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", function () {
    if (navbar.style.maxHeight === "1000%") {
      navbar.style.maxHeight = "0px";
    } else {
      navbar.style.maxHeight = "1000%";
    }
  });

  const audio = document.querySelector(".crownSound");

  const crown = document.querySelector(".crown");

  crown.addEventListener("mouseenter", crownSound);
  crown.addEventListener("click", crownSound);

  function crownSound() {
    audio.volume = 0.1;
    audio.play();
  }
});
