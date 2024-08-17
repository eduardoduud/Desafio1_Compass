import { ProductModel } from "./models/productModel.js";
import { ProductView } from "./views/productView.js";
import { ProductController } from "./controllers/productController.js";

const model = new ProductModel();
const view = new ProductView();
const controller = new ProductController(model, view);

controller.fetchProducts();

const headerTop = document.querySelector(".header-top");
const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
  headerTop.classList.toggle("hide");
});

let scrollPosition = 0;

const menuIcon = document.querySelector(".menu-icon");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");

menuIcon.addEventListener("click", () => {
  // Save the current scroll position
  scrollPosition = window.pageYOffset;

  // Apply a fixed position to body to lock the scroll and preserve scroll position
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = "100%"; // Prevent body from shrinking on fixed position

  modal.style.display = "block";
  modal.offsetHeight; // Trigger reflow to apply CSS changes
  modal.classList.add("show");
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("show");
  modal.addEventListener(
    "transitionend",
    () => {
      modal.style.display = "none";

      // Restore the scroll position and unlock scrolling
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPosition); // Restore the scroll position
    },
    { once: true }
  );
});

// Close the modal when clicking outside of the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal && !modalContent.contains(event.target)) {
    modal.classList.remove("show");
    modal.addEventListener(
      "transitionend",
      () => {
        modal.style.display = "none";

        // Restore the scroll position and unlock scrolling
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollPosition); // Restore the scroll position
      },
      { once: true }
    );
  }
});
