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
  // using try catch to handle error in async await<<<<
  // we can also use try catch in notmal code as well , whenever we got error it wont continue, it will jump 
  try {
    //throw 'error1'; //manually creating error by use throw

    await loadProductsFetch();

    await new Promise((resolve) => {
      //throw 'error2'; // this is for promise
    loadCart(() => {
      //reject('error3'); //manually creating error by use reject in promise
      resolve('value3');
    });
  });

  // catch woks like .catch in promise 
  } catch(error){
      document.querySelector('.main').innerHTML = `
        <p>Sorry, we could not load checkout right now. Please refresh and try again.</p>
      `;
      return;
  }
  
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
