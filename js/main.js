"use strict";

const burgerMenu = document.querySelector(".nav-burger"),
  nav = document.querySelector(".nav"),
  navList = document.querySelector(".header-nav__list"),
  currentYear = document.querySelector(".year");

currentYear.textContent = new Date().getFullYear();

window.addEventListener("scroll", function () {
  const wrapper = document.querySelector(".wrapper"),
    header = document.querySelector(".header");
  let triggerHeight = wrapper.offsetHeight - 100;

  if (window.scrollY > triggerHeight) {
    header.classList.add("header-sticky");
    wrapper.classList.add("sticky");
  } else {
    header.classList.remove("header-sticky");
    wrapper.classList.remove("sticky");
  }
});

//Mobile menu
burgerMenu.addEventListener("click", () => {
  nav.classList.toggle("mobile");
  if (nav.classList.contains("mobile")) {
    document.documentElement.classList.add("no-scroll");
  } else {
    document.documentElement.classList.remove("no-scroll");
  }
  window.addEventListener("resize", function () {
    // above 978px
    if (window.matchMedia("(min-width: 978px)").matches) {
      if (nav.classList.contains("mobile")) {
        nav.classList.remove("mobile");
        document.documentElement.classList.remove("no-scroll");
      }
    }
  });
});
