export default class Cart {
  constructor(){
    console.log('Cart module ready.');
    this.activatingCart();
    this.emptyCart();
    setTimeout(() => {
      this.addItem();
    }, 1000);
    this.cartTotal();
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
      console.log('Carrinho vazio.');
    }

  }

  cartTotal(value = 0){
    let totalContainer = document.getElementById('cart-total');
    let total = Number(document.getElementById('cart-total').innerHTML);
    
    if(value != 0)
      total += value
    else
      total = 0

    totalContainer.innerHTML = total;
  }

  addItem(){
    let cart = document.querySelector('.header__m-cartBody');
    let buttons = document.querySelectorAll('section .bf__c-button');
    let buttonsArray = [];

    for (let i = 0; i < buttons.length; i++) {
      buttonsArray.push(buttons[i]);
    }
    
    let cartItems = [];

    buttonsArray.map(button => {
      button.onclick = (e) => {
        e.preventDefault();
        
        let isEqual = false;
        
        let id = button.getAttribute('data-id');

        for (let i = 0; i < cartItems.length; i++){
          if(cartItems[i] == id) {
            isEqual = true;
          }
        }
      
        cartItems.push(id);
        
        let item = button.parentElement;
        let itemImage = item.querySelector('img').getAttribute('src');
        let itemName = item.querySelector('h3').innerHTML;
        let itemPrice = item.querySelector('.total').innerHTML;
        let transformedPrice = Number(itemPrice);
        
        if (isEqual) {
          console.log('Já existe no carrinho');
        } else {
          this.renderItem(cart, itemImage, itemName, itemPrice, id);
          this.cartTotal(transformedPrice);
          this.emptyCart();
          this.excludeItem(cartItems, id);
        }
      
      };
    })

  }

  renderItem(container, image, name, price, id){
    container.innerHTML += `
      <div class="header__m-cartBody-item" data-id="${id}">
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

  excludeItem(array, id){
    let excludeButtons = document.querySelectorAll('.header__m-cartBody .exclude-item');
    let excludeButtonsArray = [];

    for (let i = 0; i < excludeButtons.length; i++) {
      excludeButtonsArray.push(excludeButtons[i]);
    }

    excludeButtonsArray.map(button => {
      button.onclick = (e) => {
        e.preventDefault();
        button.parentElement.remove();
        this.cartTotal();
        this.emptyCart();
        
        for (let i = 0; i < array.length; i++){
          if(array[i] == id) {
            array[i] = []
          }
        }
      };
    })
  }
}