const saveCartItems = (valur) => {
  localStorage.setItem('cartItems', valur);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
