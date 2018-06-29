!function(n){var r={};function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,n){"use strict";var r=i(n(1)),a=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}new r.default,new a.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),console.log("Fetch module ready."),this.getProducts("../../../public/data/products.json")}return r(e,[{key:"getProducts",value:function(e){var a=this;fetch(e).then(function(e){return e.json()}).then(function(e){var t=new Object(e.products),n=document.querySelector(".refrigeratorsContainer"),r=document.querySelector(".bestContainer");t.slice(0,4).map(function(e){a.renderProducts(n,e.items[0])}),t.slice(5,13).map(function(e){a.renderProducts(r,e.items[0])})})}},{key:"renderProducts",value:function(e,t){e.innerHTML+='\n      <div class="refrigeratorsContainer__item">\n          \n          <div class="refrigeratorsContainer__itemImage">\n            <img src="public/images/'+t.images[1].imageUrl+'" \n                 aria-hidden="true" \n                 alt="'+t.nameComplete+'"/>\n            <div class="refrigeratorsContainer__itemPromotion">\n              <span class="promotion-text">50% <span>+ barato</span></span>\n            </div>\n          </div>\n\n          <div class="refrigeratorsContainer__itemDescription">\n            <h3 class="refrigeratorsContainer__itemDescription-title">'+t.nameComplete+'</h3>\n            <p class="refrigeratorsContainer__itemDescription-model">'+t.complementName+'</p>\n            \n            <div class="refrigeratorsContainer__itemDescription-prices">\n              <span class="from">De: R$ <span>'+t.ListPrice+',00</span> por:</span>\n              <span class="price">R$ <span class="total">'+t.Price+'</span>,00</span>\n              <span class="description">à vista no boleto bancário</span>\n              <span class="term">ou até 12x de R$ <span>'+Math.floor(t.ListPrice/12)+',00</span></span>\n            </div>\n          </div>\n\n          <a class="bf__c-button" data-id="'+t.itemId+'" href="#">adicionar ao carrinho</a>\n\n        </div>\n    '}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();var a=function(){function t(){var e=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),console.log("Cart module ready."),this.activatingCart(),this.emptyCart(),setTimeout(function(){e.addItem()},1e3),this.cartTotal()}return r(t,[{key:"activatingCart",value:function(){var e=document.querySelector(".header__m-cartTrigger .fa-shopping-cart"),t=document.querySelector(".header__m-cart");e.addEventListener("click",function(){e.classList.toggle("active"),t.classList.toggle("active")})}},{key:"emptyCart",value:function(){var e=document.querySelector(".header__m-cartBody"),t=document.querySelector(".header__m-cartBody .empty-cart");2<=e.children.length?t.style.display="none":(t.style.display="block",console.log("Carrinho vazio."))}},{key:"cartTotal",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=document.getElementById("cart-total"),n=Number(document.getElementById("cart-total").innerHTML);0!=e?n+=e:n=0,t.innerHTML=n}},{key:"addItem",value:function(){for(var u=this,d=document.querySelector(".header__m-cartBody"),e=document.querySelectorAll("section .bf__c-button"),t=[],n=0;n<e.length;n++)t.push(e[n]);var p=[];t.map(function(l){l.onclick=function(e){e.preventDefault();for(var t=!1,n=l.getAttribute("data-id"),r=0;r<p.length;r++)p[r]==n&&(t=!0);p.push(n);var a=l.parentElement,i=a.querySelector("img").getAttribute("src"),o=a.querySelector("h3").innerHTML,c=a.querySelector(".total").innerHTML,s=Number(c);t?console.log("Já existe no carrinho"):(u.renderItem(d,i,o,c,n),u.cartTotal(s),u.emptyCart(),u.excludeItem(p,n))}})}},{key:"renderItem",value:function(e,t,n,r,a){e.innerHTML+='\n      <div class="header__m-cartBody-item" data-id="'+a+'">\n          <div class="cartItem__img">\n            <img src="'+t+'" alt="'+n+'">\n          </div>\n          \n          <div class="cartItem__description">\n            <h3 class="cartItem__description-Title">'+n+'</h3>\n\n            <span class="cartItem__description-quantity">Quantidade: <span class="quantity">01</span></span>\n          </div>\n\n          <div class="cartItem__price">\n            <span class="price">R$ <span class="total">'+r+'</span>,00</span>\n          </div>\n\n          <a class="exclude-item" href="#">excluir</a>\n        </div>\n    '}},{key:"excludeItem",value:function(r,a){for(var i=this,e=document.querySelectorAll(".header__m-cartBody .exclude-item"),t=[],n=0;n<e.length;n++)t.push(e[n]);t.map(function(n){n.onclick=function(e){e.preventDefault(),n.parentElement.remove(),i.cartTotal(),i.emptyCart();for(var t=0;t<r.length;t++)r[t]==a&&(r[t]=[])}})}}]),t}();t.default=a}]);