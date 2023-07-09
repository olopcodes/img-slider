const slides = document.querySelectorAll("img");
const slidesLength = slides.length - 1;
const sliderControls = document.querySelectorAll("button");
let currentSlide = 0;

sliderControls[1].addEventListener("click", (e) => {
  // move next
  slides[currentSlide].classList.remove("active");

  currentSlide === slidesLength ? (currentSlide = 0) : currentSlide++;

  slides[currentSlide].classList.add("active");
});

sliderControls[0].addEventListener("click", (e) => {
  // move back

  slides[currentSlide].classList.remove("active");

  currentSlide === 0 ? (currentSlide = slidesLength) : currentSlide--;

  slides[currentSlide].classList.add("active");
});
