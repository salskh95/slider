const slidesContainer = document.querySelector(".slides-container");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
let slideIndex = 0;
let slides = slidesContainer.querySelectorAll("div");
let activeSlide = slides[slideIndex];
let isTransitioning = false;

activeSlide.classList.add("active");

nextButton.addEventListener("click", moveNext);
prevButton.addEventListener("click", movePrevious);

function moveNext() {
  moveSlide("left");
}

function movePrevious() {
  moveSlide("right");
}

function moveSlide(direction) {
  if (isTransitioning) return;

  isTransitioning = true;
  let nextIndex;

  if (direction === "left") {
    nextIndex = slideIndex + 1;
    if (nextIndex >= slides.length) {
      nextIndex = 0;
    }
  } else {
    nextIndex = slideIndex - 1;
    if (nextIndex < 0) {
      nextIndex = slides.length - 1;
    }
  }

  const currentSlide = slides[slideIndex];
  const nextSlide = slides[nextIndex];
  let slideDirection = direction === "left" ? "left" : "right";

  currentSlide.classList.add(`slideout-${slideDirection}`);

  nextSlide.classList.add("active", `slidein-${slideDirection}`);

  setTimeout(() => {
    currentSlide.classList.remove("active", `slideout-${slideDirection}`);
    isTransitioning = false;
  }, 1000);

  setTimeout(() => {
    nextSlide.classList.remove(`slidein-${slideDirection}`);
    isTransitioning = false;
  }, 1000);

  slideIndex = nextIndex;
}
