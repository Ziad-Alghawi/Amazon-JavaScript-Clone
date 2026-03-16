import { calculateCartQuantity } from '../data/cart.js';

const cartQuantityElement = document.querySelector('.js-cart-quantity');

if (cartQuantityElement) {
  const cartQuantity = calculateCartQuantity();
  cartQuantityElement.innerHTML = cartQuantity === 0 ? '' : cartQuantity;
}
