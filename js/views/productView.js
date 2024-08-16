export class ProductView {
  displayProducts(topSellingProducts, newArrivalsProducts) {
    const topSellingSection = document.querySelector(".top-selling");
    const newArrivalsSection = document.querySelector(".new-arrivals");

    topSellingSection.querySelector(".flex").innerHTML = "";
    newArrivalsSection.querySelector(".flex").innerHTML = "";

    topSellingProducts.forEach((product) => {
      const productCard = this.createProductCard(product);
      topSellingSection.querySelector(".flex").appendChild(productCard);
    });

    newArrivalsProducts.forEach((product) => {
      const productCard = this.createProductCard(product);
      newArrivalsSection.querySelector(".flex").appendChild(productCard);
    });
  }

  createProductCard(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.title;
    productCard.appendChild(productImage);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productTitle = document.createElement("h3");
    productTitle.textContent = product.title;
    productInfo.appendChild(productTitle);

    const productRate = document.createElement("p");
    productRate.innerHTML = generateStars(product.rate);

    const rateSpan = document.createElement("span");
    rateSpan.textContent = `${product.rate}/5`;
    rateSpan.classList.add("rate-span");
    productRate.appendChild(rateSpan);

    productInfo.appendChild(productRate);

    if (product.discountedPrice) {
      const discountedPrice = document.createElement("p");
      const discountSpan = document.createElement("span");
      discountSpan.classList.add("discount");
      discountSpan.textContent = product.discountedPrice;
      discountedPrice.textContent = `${product.price} `;
      discountedPrice.appendChild(discountSpan);
      productInfo.appendChild(discountedPrice);
    } else {
      const price = document.createElement("p");
      price.textContent = product.price;
      productInfo.appendChild(price);
    }

    productCard.appendChild(productInfo);

    return productCard;
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
