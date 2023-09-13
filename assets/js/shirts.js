const shirtxhr = new XMLHttpRequest;
shirtxhr.open('GET', '../../products.json', true);

shirtxhr.onload = function () {
  if (this.status == 200) {
    const products = JSON.parse(this.responseText);
    const shirtProducts = products.filter(products => products.type === 'Shirt');
    var shirtCategory = ''
    
    for(i in shirtProducts) {
      shirtCategory += `
          <div class="item">
            <a href="#" class="category-item">
              <img src="${shirtProducts[i].image_url}" alt="" height="200">
            </a>
            <div class="category-name-container">
            <a class="category-name">T-Shirts</a>
            </div>
          </div>
      `
    }
    
    
    document.getElementById('shirts-category').innerHTML = shirtCategory;
  }
}

shirtxhr.send();