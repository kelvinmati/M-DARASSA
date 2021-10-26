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
// // TYPING EFFECT
// const typingDiv = document.querySelector(".typing");
// const hobies = ["Study", "Be", "Explore"];
// let charIndex = 0;
// let stringIndex = 0;
// let typingText = "";

// function type() {
//   if (charIndex === hobies[stringIndex].length) {
//     setTimeout(erase, 2000);
//   } else {
//     typingText += hobies[stringIndex].charAt(charIndex);
//     charIndex++;
//     setTimeout(type, 600);
//     typingDiv.textContent = typingText;
//     console.log(typingText);
//   }
// }

// function erase() {
//   if (charIndex > 0) {
//     typingText = hobies[stringIndex].slice(0, charIndex - 1);
//     charIndex--;
//     setTimeout(erase, 100);
//     typingDiv.textContent = typingText;
//     console.log(typingText);
//   } else {
//     stringIndex++;
//     if (stringIndex >= hobies.length) stringIndex = 0;

//     setTimeout(type, 600);
//   }
// }

// erase();
// type();
// // =============CAROUSEL==============
// let slidePosition = 0;
// const slides = document.getElementsByClassName("carousel-item");
// const totalSlides = slides.length;
// console.log(totalSlides);
// document.getElementById("next-button").addEventListener("click", () => {
//   moveToNextSlide();
// });
// document.getElementById("previous-button").addEventListener("click", () => {
//   moveToPreviousSlide();
// });

// function updateSlidePosition() {
//   for (let slide of slides) {
//     slide.classList.remove("carousel-item-visible");
//     slide.classList.add("carousel-item-hidden");
//   }
//   slides[slidePosition].classList.add("carousel-item-visible");
// }

// function moveToNextSlide() {
//   if (slidePosition === totalSlides - 1) {
//     slidePosition = 0;
//   } else {
//     slidePosition++;
//   }
//   updateSlidePosition();
// }
// function moveToPreviousSlide() {
//   if (slidePosition === 0) {
//     slidePosition = 0;
//   } else {
//     slidePosition--;
//   }
//   updateSlidePosition();
// }
// // function to loop through the slides in intervals
// let inter = setInterval(() => {
//   moveToNextSlide();
// }, 4000);
