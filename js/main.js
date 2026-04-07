const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav-link");
const header = document.querySelector(".header");

let lastScroll = 0;

hamburger?.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  document.documentElement.style.overflow = nav.classList.contains("active") ? "hidden" : "auto";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger?.classList.remove("active");
    nav.classList.remove("active");
    document.documentElement.style.overflow = "auto";
  });
});

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove("hidden", "scrolled");
    lastScroll = 0;
    return;
  }

  if (currentScroll > lastScroll && currentScroll > 80) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
    header.classList.add("scrolled");
  }

  if (currentScroll < 80) {
    header.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});