const headerTop = document.querySelector(".header-top");
const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
  headerTop.classList.toggle("hide");
});
