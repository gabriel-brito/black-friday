export default class Fetch {
  constructor(){
    console.log('Fetch module ready.');
    this.getProducts('../../../public/data/products.json');
  }

  getProducts(url){
    fetch(url)
      .then(data => data.json())
      .then(data => {
        let products = new Object(data.products);
        let refrigerators = document.querySelector('.refrigeratorsContainer');
        let best = document.querySelector('.bestContainer');

        products.slice(0, 4).map(item => {
          this.renderProducts(refrigerators, item.items[0])
        });

        products.slice(5, 13).map(item => {
          this.renderProducts(best, item.items[0])
        });
        
      });
  }

  renderProducts(container, data){
    container.innerHTML += `
      <div class="refrigeratorsContainer__item">
          
          <div class="refrigeratorsContainer__itemImage">
            <img src="public/images/${data.images[1].imageUrl}" 
                 aria-hidden="true" 
                 alt="${data.nameComplete}"/>
            <div class="refrigeratorsContainer__itemPromotion">
              <span class="promotion-text">50% <span>+ barato</span></span>
            </div>
          </div>

          <div class="refrigeratorsContainer__itemDescription">
            <h3 class="refrigeratorsContainer__itemDescription-title">${data.nameComplete}</h3>
            <p class="refrigeratorsContainer__itemDescription-model">${data.complementName}</p>
            
            <div class="refrigeratorsContainer__itemDescription-prices">
              <span class="from">De: R$ <span>${data.ListPrice},00</span> por:</span>
              <span class="price">R$ ${data.Price},00</span>
              <span class="description">à vista no boleto bancário</span>
              <span class="term">ou até 12x de R$ <span>${Math.floor(data.ListPrice / 12)},00</span></span>
            </div>
          </div>

          <a class="bf__c-button" data-id="${data.itemId}" href="#">adicionar ao carrinho</a>

        </div>
    `;
  }
}