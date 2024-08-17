export class ProductModel {
  constructor(title, price, rate, image, fullPrice, date) {
    this.title = title;
    this.price = price;
    this.rate = rate;
    this.image = image;
    this.fullPrice = fullPrice;
    this.date = date;
  }

  setProducts(products) {
    this.products = products;
  }

  getTopSellingProducts() {
    return this.products.sort((a, b) => b.rate - a.rate).slice(0, 4);
  }

  getNewArrivalsProducts() {
    return this.products
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 4);
  }
}
