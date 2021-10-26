// =============CAROUSEL==============
let slidePosition = 0;
const slides = document.getElementsByClassName("carousel-item");
const totalSlides = slides.length;
console.log(totalSlides);
document.getElementById("next-button").addEventListener("click", () => {
  moveToNextSlide();
});
document.getElementById("previous-button").addEventListener("click", () => {
  moveToPreviousSlide();
});

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
  slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}
function moveToPreviousSlide() {
  if (slidePosition === 0) {
    slidePosition = 0;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}
// function to loop through the slides in intervals
let inter = setInterval(() => {
  moveToNextSlide();
}, 4000);
