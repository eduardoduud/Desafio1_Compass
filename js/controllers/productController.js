import { ProductModel } from "../models/productModel.js";

export class ProductController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  fetchProducts() {
    fetch("json/products.json")
      .then((response) => response.json())
      .then((data) => {
        const products = data.products.map(
          (product) =>
            new ProductModel(
              product.title,
              product.price,
              product.rate,
              product.image,
              product.discountedPrice,
              product.date
            )
        );
        this.model.setProducts(products);
        this.view.displayProducts(
          this.model.getTopSellingProducts(),
          this.model.getNewArrivalsProducts()
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}
