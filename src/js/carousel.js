const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 1;

nextBtn.addEventListener("click", () => {
  if (currentIndex < items.length - 3) {
    currentIndex++;
    updateCarousel();
  } else {
    nextBtn.disabled = true;
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  } else {
    prevBtn.disabled = true;
  }
});

nextBtn.disabled = false;
prevBtn.disabled = false;

function updateCarousel() {
  const cardWidth = items[0].offsetWidth;
  carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  console.log("cardWidth", cardWidth);

  items.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.remove("blur");
    } else if (index < currentIndex + 3 && index > currentIndex - 1) {
      item.classList.remove("blur");
    } else {
      item.classList.add("blur");
    }
  });

  nextBtn.disabled = currentIndex === items.length - 1;
  prevBtn.disabled = currentIndex === 0;
}

updateCarousel();
