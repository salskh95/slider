const slidesContainer = document.querySelector(".slides-container");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
let slideIndex = 0;
let slides = slidesContainer.querySelectorAll("div");

showSlide(slideIndex);
console.log(slideIndex);

nextButton.addEventListener("click", moveNext);
prevButton.addEventListener("click", movePrevious);

function moveNext() {
  showSlide(slideIndex + 1, "left");
}

function movePrevious() {
  showSlide(slideIndex - 1, "right");
}

function showSlide(index, direction) {
  const currentSlide = slides[slideIndex];
  const slideCount = slides.length;

  // Remove active and transition classes from all slides
  slides.forEach((slide) => {
    slide.classList.remove(
      "active",
      "slidein-left",
      "slidein-right",
      "slideout-left",
      "slideout-right"
    );
  });

  // Update slideIndex based on direction and ensure it loops
  slideIndex = index >= slideCount ? 0 : index < 0 ? slideCount - 1 : index;

  const nextIndex =
    direction === "left"
      ? (slideIndex + 1) % slideCount
      : (slideIndex - 1 + slideCount) % slideCount;

  // Add active and transition classes to current and next slides
  slides[slideIndex].classList.add(
    "active",
    `slideout-${direction === "left" ? "left" : "right"}`
  );
  slides[nextIndex].classList.add(
    "active",
    `slidein-${direction === "left" ? "left" : "right"}`
  );
}
