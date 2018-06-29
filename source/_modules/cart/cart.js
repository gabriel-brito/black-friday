export default class Cart {
  constructor(){
    console.log('Cart module ready.');
    this.activatingCart();
    this.emptyCart();
    setTimeout(() => {
      this.addItem();
    }, 1000);
  }

  activatingCart(){
    let trigger = document.querySelector('.header__m-cartTrigger .fa-shopping-cart');
    let cartContainer = document.querySelector('.header__m-cart');

    trigger.addEventListener('click', () => {
      trigger.classList.toggle('active');
      cartContainer.classList.toggle('active');
    })
  }

  emptyCart(){
    let container = document.querySelector('.header__m-cartBody');
    let emptyText = document.querySelector('.header__m-cartBody .empty-cart');

    if (container.children.length >= 2){
      emptyText.style.display = 'none';
    } else {
      emptyText.style.display = 'block';
    }
  }

  addItem(){
    let cart = document.querySelector('.header__m-cartBody');
    let buttons = document.querySelectorAll('section .bf__c-button');
    let buttonsArray = [];

    for (let i = 0; i < buttons.length; i++) {
      buttonsArray.push(buttons[i]);
    }

    buttonsArray.map(button => {
      button.onclick = (e) => {
        e.preventDefault();
        let item = button.parentElement;

        let itemImage = item.querySelector('img').getAttribute('src');
        let itemName = item.querySelector('h3').innerHTML;
        let itemPrice = item.querySelector('.total').innerHTML;
        let Total = Number(document.querySelector('#cart-total').innerHTML);

        this.renderItem(cart, itemImage, itemName, itemPrice);
        this.emptyCart();
        this.excludeItem();
      };
    })

  }

  renderItem(container, image, name, price){
    container.innerHTML += `
      <div class="header__m-cartBody-item">
          <div class="cartItem__img">
            <img src="${image}" alt="${name}">
          </div>
          
          <div class="cartItem__description">
            <h3 class="cartItem__description-Title">${name}</h3>

            <span class="cartItem__description-quantity">Quantidade: <span class="quantity">01</span></span>
          </div>

          <div class="cartItem__price">
            <span class="price">R$ <span class="total">${price}</span>,00</span>
          </div>

          <a class="exclude-item" href="#">excluir</a>
        </div>
    `;
  }

  excludeItem(){
    let excludeButtons = document.querySelectorAll('.header__m-cartBody .exclude-item');
    let excludeButtonsArray = [];

    for (let i = 0; i < excludeButtons.length; i++) {
      excludeButtonsArray.push(excludeButtons[i]);
    }

    excludeButtonsArray.map(button => {
      button.onclick = (e) => {
        e.preventDefault();
        button.parentElement.remove();
        this.emptyCart();
      };
    })
  }


}