import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch} from '../data/products.js';
import { loadCart } from '../data/cart.js'; 
//import '../data/cart-oop.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

//using a sync await to make the code look more linear and easier to read
//instead of using nested callbacks or promises and then >> very useful 
async function loadPage() {
  await loadProductsFetch();

  const value = await new Promise((resolve) => {
    loadCart(() => {
      resolve('value3');
    });
  });
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

// promise all to load multiple promises at the same time
/*
Promise.all([
  loadProductsFetch(),

  new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
  })

]).then((values) => {
  console.log(values);
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
  });

  */


// learn promises and async
/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('velue1');
  });

}).then((value) => {
  console.log(value);
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
});

}).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/


/*
loadProducts(() => {
  loadCart(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/
