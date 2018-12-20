'use strict';

const itemList = document.querySelector('.items-list');
itemList.addEventListener('click', addToCartFunction);

function addToCartFunction(event) {
  if (!event.target.classList.contains('add-to-cart')) {
    return;
  } else {
    event.preventDefault();
    var item = {
      title: event.target.dataset.title,
      price: event.target.dataset.price
    }
    addToCart(item);
  }
}
