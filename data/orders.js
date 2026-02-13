export const orsders = JSON.parse(localStorage.getItem('orders')) || [];


export function addOrder(order) {
  orsders.unshift(order);
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orsders));
}