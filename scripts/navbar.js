document.addEventListener("DOMContentLoaded", function () {
  const dropdown__toggle1 = document.querySelector(".dropdown__toggle1");
  const dropdown__toggle2 = document.querySelector(".dropdown__toggle2");
  const dropdown__menu1 = document.querySelector(".dropdown__menu--1");
  const dropdown__menu2 = document.querySelector(".dropdown__menu--2");

  dropdown__toggle1.addEventListener("click", function () {
    if (dropdown__menu1.style.maxHeight === "0px") {
      dropdown__menu1.style.maxHeight = "400px";
    } else {
      dropdown__menu1.style.maxHeight = "0px";
    }
    if (dropdown__menu2.style.maxHeight === "400px") {
      dropdown__menu2.style.maxHeight = "0px";
    }
  });

  dropdown__toggle2.addEventListener("click", function () {
    if (dropdown__menu2.style.maxHeight === "0px") {
      dropdown__menu2.style.maxHeight = "400px";
    } else {
      dropdown__menu2.style.maxHeight = "0px";
    }
    if (dropdown__menu1.style.maxHeight === "400px") {
      dropdown__menu1.style.maxHeight = "0px";
    }
  });

  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");

  hamburger.addEventListener("click", function () {
    if (navbar.style.maxHeight === "1000px") {
      navbar.style.maxHeight = "0px";
      dropdown__menu1.style.maxHeight = "0px";
      dropdown__menu2.style.maxHeight = "0px";
    } else {
      navbar.style.maxHeight = "1000px";
    }
  });
});