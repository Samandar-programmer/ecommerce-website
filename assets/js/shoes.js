const shoesxhr = new XMLHttpRequest;
shoesxhr.open('GET', '../../products.json', true);

shoesxhr.onload = function () {
  if (this.status == 200) {
    const products = JSON.parse(this.responseText);
    const shoesProducts = products.filter(products => products.type === "Men's Shoes");
    var shoesCategory = ''

    for (i in shoesProducts) {
      var star = '<i class="fi fi-rs-star"></i>'
      shoesCategory += `
          <div class="product-card item">
            <div class="product-img-container shoes-product">
              <a href="#" class="product-img">
                <img src="${shoesProducts[i].image_url}" alt="" class="product-img-front">
                <img src="${shoesProducts[i].second_image_url}" alt="" class="product-img-back">
                <div class="product-img-action">
                  <div class="product-action-container">
                    <a href="#" class="product-action wishlist">
                      <i class="fi fi-rr-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="product-badge-container">
                  <div class="product-badge hot">
                    Hot
                  </div>
                </div>
              </a>
            </div>
            <div class="product-content-wrap">
              <div class="product-name">C${shoesProducts[i].name}</div>
              <div class="product-rating">
                <div class="rating-stars">
                  ${star.repeat(Math.round(shoesProducts[i].rating.rate))}
                </div>
              </div>
              <div class="price">
                <div class="current-price">${shoesProducts[i].price}</div>
                <div class="last-price">${shoesProducts[i].old_price}</div>
              </div>
            </div>
          </div>

          
      `
    }


    document.getElementById('shoes-category').innerHTML = shoesCategory;
  }
}

shoesxhr.send();