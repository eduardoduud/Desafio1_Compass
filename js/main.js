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
