export class ProductModel {
  products = [];
  constructor(title, price, rate, image, fullPrice, date) {
    this.title = title;
    this.price = price;
    this.rate = rate;
    this.image = image;
    this.fullPrice = fullPrice;
    this.date = date;
  }

  async getProducts(page, productsPerPage) {
    try {
      const response = await fetch("json/products.json");
      const data = await response.json();
      this.products = data.products
        .slice(0, page * productsPerPage)
        .map(
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
    } catch (error) {
      console.error("Error:", error);
    }
  }
  async getTopSellingProducts(page, productsPerPage) {
    await this.getProducts(page, productsPerPage);
    const sortedProducts = this.products.sort((a, b) => b.rate - a.rate);
    return sortedProducts;
  }

  async getNewArrivalsProducts(page, productsPerPage) {
    await this.getProducts(page, productsPerPage);
    const sortedProducts = this.products.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    return sortedProducts;
  }
}
