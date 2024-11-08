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

burgerMenu.addEventListener("click", () => {
  nav.classList.toggle("mobile");
});
