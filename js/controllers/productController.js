import { ProductModel } from "../models/productModel.js";

export class ProductController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.productsPerPage = 4;
    this.currentTopSellingPage = 1;
    this.currentNewArrivalsPage = 1;
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
              product.fullPrice,
              product.date
            )
        );
        this.model.setProducts(products);

        this.view.displayProducts(
          this.model.getTopSellingProducts(
            this.currentTopSellingPage,
            this.productsPerPage
          ),
          this.model.getNewArrivalsProducts(
            this.currentNewArrivalsPage,
            this.productsPerPage
          )
        );

        this.view.bindShowMoreButtons(
          () => this.showMoreTopSelling(),
          () => this.showMoreNewArrivals()
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  showMoreTopSelling() {
    this.currentTopSellingPage++;
    this.view.displayProducts(
      this.model.getTopSellingProducts(
        this.currentTopSellingPage,
        this.productsPerPage
      ),
      this.model.getNewArrivalsProducts(
        this.currentNewArrivalsPage,
        this.productsPerPage
      )
    );
  }

  showMoreNewArrivals() {
    this.currentNewArrivalsPage++;
    this.view.displayProducts(
      this.model.getTopSellingProducts(
        this.currentTopSellingPage,
        this.productsPerPage
      ),
      this.model.getNewArrivalsProducts(
        this.currentNewArrivalsPage,
        this.productsPerPage
      )
    );
  }
}
