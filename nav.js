// slider

const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".navbar .nav__lists");
  const navLinks = document.querySelectorAll(".nav__lists .nav__list");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navFade 0.5s ease forwards ${index / 7}s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};

navSlide();
