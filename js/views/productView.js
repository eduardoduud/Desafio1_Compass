export class ProductView {
  displayProducts(topSellingProducts, newArrivalsProducts) {
    const topSellingSection = document.querySelector(".top-selling");
    const newArrivalsSection = document.querySelector(".new-arrivals");

    topSellingSection.querySelector(".flex").innerHTML =
      this.createProductCard(topSellingProducts);
    newArrivalsSection.querySelector(".flex").innerHTML =
      this.createProductCard(newArrivalsProducts);

    this.bindShowMoreButtons();
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

  bindShowMoreButtons(showMoreTopSelling, showMoreNewArrivals) {
    document
      .querySelector(".top-selling .view-all")
      .addEventListener("click", showMoreTopSelling);
    document
      .querySelector(".new-arrivals .view-all")
      .addEventListener("click", showMoreNewArrivals);
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
