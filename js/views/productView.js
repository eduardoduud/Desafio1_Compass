import { ProductController } from "../controllers/productController.js";

export class ProductView {
  controller;
  productsPerPage = 4;
  currentTopSellingPage = 1;
  currentNewArrivalsPage = 1;
  topSellingProducts;
  newArrivalsProducts;
  constructor() {
    this.controller = new ProductController();
    Promise.all([
      this.controller.fetchTopSellingProducts(
        this.currentTopSellingPage,
        this.productsPerPage
      ),
      this.controller.fetchNewArrivalsProducts(
        this.currentNewArrivalsPage,
        this.productsPerPage
      ),
    ])
      .then(([topSellingProducts, newArrivalsProducts]) => {
        this.topSellingProducts = topSellingProducts;
        this.newArrivalsProducts = newArrivalsProducts;
        this.displayProducts();

        this.bindShowMoreButtons(
          () => this.showMoreTopSelling(),
          () => this.showMoreNewArrivals()
        );
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }

  paginateTopSelling() {
    this.currentTopSellingPage++;
    this.controller
      .fetchTopSellingProducts(this.currentTopSellingPage, this.productsPerPage)
      .then((products) => {
        this.topSellingProducts = products;
        console.log(this.topSellingProducts);
        this.displayProducts();
      })
      .catch((error) => {
        console.error("Error fetching top selling products:", error);
      });
  }

  paginateNewArrivals() {
    this.currentNewArrivalsPage++;
    this.controller
      .fetchNewArrivalsProducts(
        this.currentNewArrivalsPage,
        this.productsPerPage
      )
      .then((products) => {
        this.newArrivalsProducts = products;
        console.log(this.newArrivalsProducts);
        this.displayProducts();
      })
      .catch((error) => {
        console.error("Error fetching new arrivals products:", error);
      });
  }

  displayProducts() {
    const topSellingSection = document.querySelector(".top-selling");
    const newArrivalsSection = document.querySelector(".new-arrivals");
    topSellingSection.querySelector(".flex").innerHTML = this.createProductCard(
      this.topSellingProducts
    );
    newArrivalsSection.querySelector(".flex").innerHTML =
      this.createProductCard(this.newArrivalsProducts);
  }

  createProductCard(products) {
    return products
      .map(
        (product) => `
      <div class="product-card">
        <img src="${product.image}" alt="${product.title}">
        <div class="product-info">
          <h3>${product.title}</h3>
          <p>${generateStars(product.rate)} <span class="rate-span">${
          product.rate
        }/5</span></p>
          <p class="flex">$${formatPrice(product.price)}
            ${
              typeof product.fullPrice === "number"
                ? `<span class="discount">$${product.fullPrice}</span>
                    <span class="discount-percentage">${calculateDiscountPercentage(
                      product.price,
                      product.fullPrice
                    )}%</span>`
                : ""
            }</p>
        </div>
      </div>
    `
      )
      .join("");
  }

  bindShowMoreButtons() {
    document
      .querySelector(".top-selling .view-all")
      .addEventListener("click", () => this.paginateTopSelling());
    document
      .querySelector(".new-arrivals .view-all")
      .addEventListener("click", () => this.paginateNewArrivals());
  }
}

function generateStars(rate) {
  const fullStars = Math.floor(rate);
  const halfStars = rate % 1 === 0 ? 0 : 1;

  let starsHTML = "";

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<span class="star full"></span>';
  }

  if (halfStars === 1) {
    starsHTML += '<span class="star half"></span>';
  }

  return starsHTML;
}

function formatPrice(price) {
  return price % 1 !== 0 ? price.toFixed(2) : price.toFixed(0);
}

function calculateDiscountPercentage(price, fullPrice) {
  if (price > 0 && fullPrice > 0) {
    const discountAmount = price - fullPrice;
    const discountPercentage = (discountAmount / price) * 100;
    return discountPercentage.toFixed(2);
  }
  return 0;
}
