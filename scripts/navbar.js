// Inicio creacion de la navbar con js

const dictionarySelected = {
  "": "Inicio",
  index: "Inicio",
  sopadeletras: "Sopa de la caridad",
  reyoreina: "Rey y reina",
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
  accionesdecambio: "Acciones de cambio",
  antivalores: "Anti-valores",
  circulosdelvalor: "Círculos del valor",
  dibujaamor: "Dibuja amor",
  enlacedevalor: "Enlace de valor",
  laberinto: "Laberinto de la solidaridad",
  solidaridad: "Solidaridad",
  termometro: "Termómetro familiar",
};

const currentPage = location.href.split("/").pop().split("?").shift().split(".").shift();

const header = document.createElement("header");
header.className = "header--grid";

const logoDiv = document.createElement("div");
logoDiv.className = "logo";

const logoLink = document.createElement("a");
logoLink.href = currentPage === "index" ? "#" : "../index.html";

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
  { text: "Inicio", href: currentPage === "index" ? "#" : "../index.html" },
  {
    text: "Juegos interactivos",
    href: "#",
    dropdown: true,
  },
  {
    text: "Don de la paz",
    href: currentPage === "dondelapaz" ? "#" : "/pages/dondelapaz.html",
  },
  {
    text: "El árbol",
    href: currentPage === "elarbol" ? "#" : "/pages/elarbol.html",
  },
  { text: "La oración y el cultivo", href: "#", dropdown: true },
  { text: "Materiales", href: "#", dropdown: true },
];

var nthDropdown = 0;

const dropdownItemsList = [
  [
    {
      text: "Sopa de la caridad",
      href: currentPage === "sopadeletras" ? "#" : "/pages/sopadeletras.html",
    },
    {
      text: "Rey y reina",
      href: currentPage === "reyoreina" ? "#" : "/pages/reyoreina.html",
    },
    {
      text: "Laberinto de la solidaridad",
      href: currentPage === "laberinto" ? "#" : "/pages/laberinto.html",
    },
    {
      text: "Termómetro familiar",
      href: currentPage === "termometro" ? "#" : "/pages/termometro.html",
    },
    // {
    //   text: "Anti-valores",
    //   href: currentPage === "antivalores" ? "#" : "/pages/antivalores.html",
    // },
    // {
    //   text: "Enlace de valor",
    //   href: currentPage === "enlacedevalor" ? "#" : "/pages/enlacedevalor.html",
    // },
    // {
    //   text: "Círculos del valor",
    //   href: currentPage === "circulosdelvalor" ? "#" : "/pages/circulosdelvalor.html",
    // },
    // {
    //   text: "Dibuja amor",
    //   href: currentPage === "dibujaamor" ? "#" : "/pages/dibujaamor.html",
    // },
    // {
    //   text: "Solidaridad",
    //   href: currentPage === "solidaridad" ? "#" : "/pages/solidaridad.html",
    // },
    // {
    //   text: "Acciones de cambio",
    //   href: currentPage === "accionesdecambio" ? "#" : "/pages/accionesdecambio.html",
    // },
  ],
  [
    {
      text: "Meditación con dios",
      href: currentPage === "meditacioncondios" ? "#" : "/pages/meditacioncondios.html",
    },
    {
      text: "La oración",
      href: currentPage === "laoracion" ? "#" : "/pages/laoracion.html",
    },
    {
      text: "Carta a dios",
      href: currentPage === "cartaadios" ? "#" : "/pages/cartaadios.html",
    },
    {
      text: "El cultivo",
      href: currentPage === "elcultivo" ? "#" : "/pages/elcultivo.html",
    },
  ],
  [
    {
      text: "Infografía",
      href: currentPage === "infografia" ? "#" : "/pages/infografia.html",
    },
    {
      text: "Historieta",
      href: currentPage === "historieta" ? "#" : "/pages/historieta.html",
    },
    {
      text: "Buzón y bote",
      href: currentPage === "buzonybote" ? "#" : "/pages/buzonybote.html",
    },
    {
      text: "Planilla",
      href: currentPage === "planilla" ? "#" : "/pages/planilla.html",
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
    dropdownToggle.className = `navbar__link dropdown__toggle`;
    dropdownToggle.draggable = false;
    dropdownToggle.href = element.href;
    dropdownToggle.innerHTML = `${element.text} <b>▼</b>`;

    const dropdownMenu = document.createElement("div");
    dropdownMenu.className = `dropdown__menu`;
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

// Final creacion de la navbar con js

document.addEventListener("DOMContentLoaded", function () {
  // Append de la navbar
  document.body.insertBefore(header, document.body.firstChild);

  // Inicio Dropdown menu

  const dropdownToggles = document.querySelectorAll(".dropdown__toggle");
  const dropdownMenus = document.querySelectorAll(".dropdown__menu");

  dropdownToggles.forEach((toggle, index) => {
    toggle.addEventListener("click", function () {
      const targetMenu = dropdownMenus[index];
      const otherMenus = Array.from(dropdownMenus).filter((menu) => menu !== targetMenu);

      if (targetMenu.style.maxHeight === "0px") {
        targetMenu.style.maxHeight = "500px";
      } else {
        targetMenu.style.maxHeight = "0px";
      }

      otherMenus.forEach((menu) => {
        menu.style.maxHeight = "0px";
      });
    });
  });

  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");

  hamburger.addEventListener("click", function () {
    if (navbar.style.maxHeight === "1000px") {
      navbar.style.maxHeight = "0px";
    } else {
      navbar.style.maxHeight = "1000px";
    }
  });

  // Fin Dropdown Menu
});
