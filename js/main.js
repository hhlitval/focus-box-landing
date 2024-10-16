const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".nav-burger");

navBtn.onclick = () => {
  nav.classList.toggle("mobile");
};
