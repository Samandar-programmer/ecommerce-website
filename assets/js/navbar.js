document.getElementById('nav-all-tab').addEventListener('click', loadAllProducts);

function loadAllProducts() {
  const xhr = new XMLHttpRequest;

  xhr.open('GET', '../../products.json', true);

  xhr.onload = function () {
    if (this.status == 200) {
      const products = JSON.parse(this.responseText);

      const itemsPerPage = 12;
      let currentPage = 1;

      const content = document.querySelector('.tab-content');
      const prevPageButton = document.getElementById('prevPage');
      const nextPageButton = document.getElementById('nextPage');
      const currentPageLabel = document.getElementById('currentPage');

      function displayObjects(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageObjects = products.slice(startIndex, endIndex);

        content.innerHTML = '';

        document.querySelector('.number-of-products').innerHTML = products.length;


        pageObjects.forEach(object => {
          var star = '<i class="fi fi-rs-star"></i>'
          const objectElement = document.createElement('div');
          objectElement.classList.add('col-12');
          objectElement.classList.add('col-md-6');
          objectElement.classList.add('col-lg-4');
          objectElement.classList.add('col-xl-3');
          objectElement.innerHTML = `
            <div class="product-card" id="all-tab">
              <div class="product-img-container">
                <a href = "#" class = "product-img-wrapper ${object.view}" >
                  <img src="${object.image_url}" alt="" class="product-img-front">
                  <img src="${object.second_image_url}" alt="" class="product-img-back">
                  <div class="product-badge-container">
                    <div class="product-badge hot">
                      Hot
                    </div>
                  </div>
                </a>
              </div>
              <div class="product-content-wrap">
                <div class="product-type">${object.type}</div>
                <div class="product-name">${object.name}</div>
                <div class="product-rating">
                  <div class="rating-stars">
                    ${star.repeat(Math.round(object.rating.rate))}
                  </div>
                  <div class="rating-perc">
                    ${object.rating.rate}
                  </div>
                </div>
                <div class="price">
                  <div class="current-price">$${object.price}</div>
                  <div class="product-action-wrapper">
                    <div class="product-action-container">
                        <a href="#" class="product-action wishlist">
                          <i class="fi fi-rr-heart"></i>
                        </a>
                      </div>
                    <div class="product-action-container">
                      <a href="#" class="product-action cart mx-0">
                        <i class="fi fi-rr-shopping-bag-add"></i>
                      </a>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>`;
          content.appendChild(objectElement);
        });





        currentPageLabel.textContent = `Page ${page}`;
      }

      displayObjects(currentPage);

      prevPageButton.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          displayObjects(currentPage);
        }
      });

      nextPageButton.addEventListener('click', () => {
        if (currentPage < Math.ceil(products.length / itemsPerPage)) {
          currentPage++;
          displayObjects(currentPage);
        }
      });
    }
  }

  xhr.send();
}

document.getElementById('nav-new-tab').addEventListener('click', loadNewProducts);

function loadNewProducts() {
  const xhr = new XMLHttpRequest;

  xhr.open('GET', '../../products.json', true);

  xhr.onload = function () {
    if (this.status == 200) {
      const products = JSON.parse(this.responseText);
      products.sort((a, b) => b.id - a.id);
      const itemsPerPage = 12;
      let currentPage = 1;

      const content = document.querySelector('.tab-content');
      const prevPageButton = document.getElementById('prevPage');
      const nextPageButton = document.getElementById('nextPage');
      const currentPageLabel = document.getElementById('currentPage');

      function displayObjects(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageObjects = products.slice(startIndex, endIndex);

        content.innerHTML = '';

        document.querySelector('.number-of-products').innerHTML = products.length;


        
        pageObjects.forEach(object => {
          var star = '<i class="fi fi-rs-star"></i>'
          const objectElement = document.createElement('div');
          objectElement.classList.add('col-12');
          objectElement.classList.add('col-md-6');
          objectElement.classList.add('col-lg-4');
          objectElement.classList.add('col-xl-3');
          objectElement.innerHTML = `
            <div class="product-card" id="all-tab">
              <div class="product-img-container">
                <a href = "#" class = "product-img-wrapper ${object.view}" >
                  <img src="${object.image_url}" alt="" class="product-img-front">
                  <img src="${object.second_image_url}" alt="" class="product-img-back">
                  <div class="product-badge-container">
                    <div class="product-badge hot">
                      Hot
                    </div>
                  </div>
                </a>
              </div>
              <div class="product-content-wrap">
                <div class="product-type">${object.type}</div>
                <div class="product-name">${object.name}</div>
                <div class="product-rating">
                  <div class="rating-stars">
                    ${star.repeat(Math.round(object.rating.rate))}
                  </div>
                  <div class="rating-perc">
                    ${object.rating.rate}
                  </div>
                </div>
                <div class="price">
                  <div class="current-price">$${object.price}</div>
                  <div class="product-action-wrapper">
                    <div class="product-action-container">
                        <a href="#" class="product-action wishlist">
                          <i class="fi fi-rr-heart"></i>
                        </a>
                      </div>
                    <div class="product-action-container">
                      <a href="#" class="product-action cart mx-0">
                        <i class="fi fi-rr-shopping-bag-add"></i>
                      </a>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>`;
          content.appendChild(objectElement);
        });

        currentPageLabel.textContent = `Page ${page}`;
      }

      displayObjects(currentPage);

      prevPageButton.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          displayObjects(currentPage);
        }
      });

      nextPageButton.addEventListener('click', () => {
        if (currentPage < Math.ceil(products.length / itemsPerPage)) {
          currentPage++;
          displayObjects(currentPage);
        }
      });
    }
  }

  xhr.send();
}




document.getElementById('nav-popular-tab').addEventListener('click', loadPopularProducts);

function loadPopularProducts() {
  const xhr = new XMLHttpRequest;

  xhr.open('GET', '../../products.json', true);

  xhr.onload = function () {
    if (this.status == 200) {
      const products = JSON.parse(this.responseText);
      products.sort((a, b) => b.rating.rate - a.rating.rate);
      const itemsPerPage = 12;
      let currentPage = 1;

      const content = document.querySelector('.tab-content');
      const prevPageButton = document.getElementById('prevPage');
      const nextPageButton = document.getElementById('nextPage');
      const currentPageLabel = document.getElementById('currentPage');

      function displayObjects(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageObjects = products.slice(startIndex, endIndex);

        content.innerHTML = '';

        document.querySelector('.number-of-products').innerHTML = products.length;



        pageObjects.forEach(object => {
          var star = '<i class="fi fi-rs-star"></i>'
          const objectElement = document.createElement('div');
          objectElement.classList.add('col-12');
          objectElement.classList.add('col-md-6');
          objectElement.classList.add('col-lg-4');
          objectElement.classList.add('col-xl-3');
          objectElement.innerHTML = `
            <div class="product-card" id="all-tab">
              <div class="product-img-container">
                <a href = "#" class = "product-img-wrapper ${object.view}" >
                  <img src="${object.image_url}" alt="" class="product-img-front">
                  <img src="${object.second_image_url}" alt="" class="product-img-back">
                  <div class="product-badge-container">
                    <div class="product-badge hot">
                      Hot
                    </div>
                  </div>
                </a>
              </div>
              <div class="product-content-wrap">
                <div class="product-type">${object.type}</div>
                <div class="product-name">${object.name}</div>
                <div class="product-rating">
                  <div class="rating-stars">
                    ${star.repeat(Math.round(object.rating.rate))}
                  </div>
                  <div class="rating-perc">
                    ${object.rating.rate}
                  </div>
                </div>
                <div class="price">
                  <div class="current-price">$${object.price}</div>
                  <div class="product-action-wrapper">
                    <div class="product-action-container">
                        <a href="#" class="product-action wishlist">
                          <i class="fi fi-rr-heart"></i>
                        </a>
                      </div>
                    <div class="product-action-container">
                      <a href="#" class="product-action cart mx-0">
                        <i class="fi fi-rr-shopping-bag-add"></i>
                      </a>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>`;
          content.appendChild(objectElement);
        });

        currentPageLabel.textContent = `Page ${page}`;
      }

      displayObjects(currentPage);

      prevPageButton.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          displayObjects(currentPage);
        }
      });

      nextPageButton.addEventListener('click', () => {
        if (currentPage < Math.ceil(products.length / itemsPerPage)) {
          currentPage++;
          displayObjects(currentPage);
        }
      });
    }
  }

  xhr.send();
}