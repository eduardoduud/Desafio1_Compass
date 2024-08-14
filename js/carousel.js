const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const [prevBtn, nextBtn] = [
  document.getElementById("prevBtn"),
  document.getElementById("nextBtn"),
];
const gap = parseFloat(window.getComputedStyle(carousel).gap) || 0;
const windowWidth = window.innerWidth;

let currentIndex = 2;

nextBtn.addEventListener("click", () => {
  if (currentIndex < items.length - 3) {
    updateIndex(currentIndex + 1);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    updateIndex(currentIndex - 1);
  }
});

function getTotalWidthIncludingMargin(element) {
  const { width, marginLeft, marginRight } = window.getComputedStyle(element);
  return parseFloat(width) + parseFloat(marginLeft) + parseFloat(marginRight);
}

function updateIndex(newIndex) {
  currentIndex = newIndex;
  updateCarousel();
}

function updateCarousel() {
  const cardWidth = getTotalWidthIncludingMargin(items[0]);
  const totalCardWidth = cardWidth + gap;

  carousel.style.transform = `translateX(-${currentIndex * totalCardWidth}px)`;

  nextBtn.disabled = currentIndex >= items.length - 3;
  prevBtn.disabled = currentIndex === 0;

  items.forEach((item, index) => {
    item.classList.toggle(
      "blur",
      !(
        index === currentIndex ||
        (index < currentIndex + 3 && index > currentIndex - 1)
      )
    );
  });
}

updateCarousel();
