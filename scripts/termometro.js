document.addEventListener("DOMContentLoaded", (e) => {
  window.onresize = resizeFirstSection();
});

function resizeFirstSection() {
  let firstSection = document.querySelector(".first-sect");
  let firstSectionImage = document.querySelector(".first-sect-img");
  firstSection.style.minHeight = firstSectionImage.height + "px";
}
