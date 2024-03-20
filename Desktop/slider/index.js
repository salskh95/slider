const slidesContainer = document.querySelector(".slides-container");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const slideWidth = slidesContainer.children[0].offsetWidth;
let slideIndex = 0;

//startAutoCarousel();

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

function nextSlide() {
  if (slideIndex < slidesContainer.children.length - 1) {
    slideIndex++;
  } else if (slideIndex === slidesContainer.children.length - 1) {
    const firstSlideClone = slidesContainer.children[0].cloneNode(true);
    slidesContainer.appendChild(firstSlideClone);
    slideIndex = slideIndex + 2;
    slidesContainer.style.transition = "none";
    slidesContainer.style.transform = `translateX(-${
      slideIndex * slideWidth
    }px)`;
  } else {
    slideIndex = 0;
  }
  slidesContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
  } else if (slideIndex === 0) {
    const lastSlideClone =
      slidesContainer.children[slidesContainer.children.length - 1].cloneNode(
        true
      );
    slidesContainer.insertBefore(lastSlideClone, slidesContainer.children[0]);
    slidesContainer.style.transition = "none";
    slidesContainer.style.transform = `translateX(-${slideWidth}px)`;
    slideIndex = slidesContainer.children.length - 2;
  } else {
    slideIndex = slidesContainer.children.length - 1;
  }
  slidesContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// function startAutoCarousel() {
//   autoCarouselInterval = setInterval(nextCarouselSlide, 1000);
// }

// function stopAutoCarousel() {
//   clearInterval(autoCarouselInterval);
// }

// function updateCarouselSlide() {
//   carouselContainer.style.transform = `translateX(-${
//     carouselIndex * carouselWidth
//   }px)`;
//   startAutoCarousel();
// }

// function prevCarouselSlide() {
//   if (carouselIndex > 0) {
//     carouselIndex--;
//   } else {
//     carouselIndex = carouselContainer.children.length - 1;
//   }
//   updateCarouselSlide();
// }
