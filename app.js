// =============SIDENAV==============
const sidenav = document.querySelector(".sidenav");

const toggleNav = () => {
  sidenav.classList.toggle("new-nav");
};

// =============NAVBAR==============
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", showNav);
function showNav() {
  if (scrollY > 50) {
    navbar.classList.add("scroll-nav");
  } else {
    navbar.classList.remove("scroll-nav");
  }
}
