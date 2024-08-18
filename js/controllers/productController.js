import { ProductModel } from "../models/productModel.js";

export class ProductController {
  productModel;
  constructor() {
    this.productModel = new ProductModel();
  }

  async fetchNewArrivalsProducts(currentNewArrivalsPage, productsPerPage) {
    try {
      const newArrivalsProducts =
        await this.productModel.getNewArrivalsProducts(
          currentNewArrivalsPage,
          productsPerPage
        );
      return newArrivalsProducts;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async fetchTopSellingProducts(currentNewArrivalsPage, productsPerPage) {
    try {
      const topSellingProducts = await this.productModel.getTopSellingProducts(
        currentNewArrivalsPage,
        productsPerPage
      );
      return topSellingProducts;
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
