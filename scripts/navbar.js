// Inicio creacion del menu con js

const dictionarySelected = {
  index: "Inicio",
  sopadeletras: "Sopa de letras",
  reyoreina: "Rey o reina",
  dondelapaz: "Don de la paz",
  elarbol: "El árbol",
  meditacioncondios: "Meditación con dios",
  laoracion: "La oración",
  cartaadios: "Carta a dios",
  elcultivo: "El cultivo",
  infografia: "Infografía",
  historieta: "Historieta",
  buzonybote: "Buzón y bote",
  planilla: "Planilla",
};

const currentPage = location.href
  .split("/")
  .pop()
  .split("?")
  .shift()
  .split(".")
  .shift();

const header = document.createElement("header");
header.className = "header--grid";

const logoDiv = document.createElement("div");
logoDiv.className = "logo";

const logoLink = document.createElement("a");
logoLink.href = currentPage === "index" ? "#" : "index.html";

const logoImg = document.createElement("img");
logoImg.src = "../images/logoheader.svg";
logoImg.alt = "Logo Cáritas";

logoLink.appendChild(logoImg);
logoDiv.appendChild(logoLink);
header.appendChild(logoDiv);

const hamburgerButton = document.createElement("button");
hamburgerButton.className = "hamburger";

for (let i = 0; i < 3; i++) {
  const line = document.createElement("div");
  line.className = "hamburger--line";
  hamburgerButton.appendChild(line);
}

header.appendChild(hamburgerButton);

const nav = document.createElement("nav");
nav.className = "navbar";

const ul = document.createElement("ul");
ul.className = "navbar__list";

const menuItems = [
  { text: "Inicio", href: currentPage === "index" ? "#" : "index.html" },
  {
    text: "Sopa de letras",
    href: currentPage === "sopadeletras" ? "#" : "sopadeletras.html",
  },
  {
    text: "Rey o reina",
    href: currentPage === "reyoreina" ? "#" : "reyoreina.html",
  },
  {
    text: "Don de la paz",
    href: currentPage === "dondelapaz" ? "#" : "dondelapaz.html",
  },
  {
    text: "El árbol",
    href: currentPage === "elarbol" ? "#" : "elarbol.html",
  },
  { text: "La oración y el cultivo", href: "#", dropdown: true },
  { text: "Materiales", href: "#", dropdown: true },
];

var nthDropdown = 0;

const dropdownItemsList = [
  [
    {
      text: "Meditación con dios",
      href:
        currentPage === "meditacioncondios" ? "#" : "meditacioncondios.html",
    },
    {
      text: "La oración",
      href: currentPage === "laoracion" ? "#" : "laoracion.html",
    },
    {
      text: "Carta a dios",
      href: currentPage === "cartaadios" ? "#" : "cartaadios.html",
    },
    {
      text: "El cultivo",
      href: currentPage === "elcultivo" ? "#" : "elcultivo.html",
    },
  ],
  [
    {
      text: "Infografía",
      href: currentPage === "infografia" ? "#" : "infografia.html",
    },
    {
      text: "Historieta",
      href: currentPage === "historieta" ? "#" : "historieta.html",
    },
    {
      text: "Buzón y bote",
      href: currentPage === "buzonybote" ? "#" : "buzonybote.html",
    },
    {
      text: "Planilla",
      href: currentPage === "planilla" ? "#" : "planilla.html",
    },
  ],
];

menuItems.forEach((element, idx, array) => {
  const separator = document.createElement("div");
  separator.className = "separator";

  const li = document.createElement("li");
  li.className = "navbar__item";

  if (element.text === dictionarySelected[currentPage]) {
    li.classList.add("selected");
  }

  if (element.dropdown) {
    nthDropdown++;
    const dropdownToggle = document.createElement("a");
    dropdownToggle.className = `navbar__link dropdown__toggle${nthDropdown}`;
    dropdownToggle.draggable = false;
    dropdownToggle.href = element.href;
    dropdownToggle.innerHTML = `${element.text} <b>▼</b>`;

    const dropdownMenu = document.createElement("div");
    dropdownMenu.className = `dropdown__menu--${nthDropdown}`;
    dropdownMenu.classList.add("dropdown__menu");
    dropdownMenu.style.maxHeight = "0px";

    const dropdownItems = dropdownItemsList[nthDropdown - 1];

    dropdownItems.forEach((element, idx, array) => {
      const dropdownItemDiv = document.createElement("div");
      dropdownItemDiv.className = "dropdown__item";

      if (element.text === dictionarySelected[currentPage]) {
        dropdownItemDiv.classList.add("selected--dropdown");
        li.classList.add("selected");
      }

      const separatorDropdown = document.createElement("div");
      separatorDropdown.className = "separator--dropdown";

      const dropdownItemLink = document.createElement("a");
      dropdownItemLink.href = element.href;
      dropdownItemLink.innerHTML = element.text;

      if (!(idx === array.length)) {
        dropdownMenu.appendChild(separatorDropdown);
      }

      dropdownItemDiv.appendChild(dropdownItemLink);
      dropdownMenu.appendChild(dropdownItemDiv);
    });

    li.appendChild(dropdownToggle);
    li.appendChild(dropdownMenu);
  } else {
    const link = document.createElement("a");
    link.className = "navbar__link";
    link.href = element.href;
    link.innerHTML = element.text;

    li.appendChild(link);
  }

  ul.appendChild(li);

  if (!(idx === array.length - 1)) {
    ul.appendChild(separator);
  }
});

nav.appendChild(ul);
header.appendChild(nav);

// Final creacion del menu con js

document.addEventListener("DOMContentLoaded", function () {
  // Append de la navbar
  document.body.insertBefore(header, document.body.firstChild);

  // Inicio Dropdown menu

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

  // Fin Dropdown Menu
});
