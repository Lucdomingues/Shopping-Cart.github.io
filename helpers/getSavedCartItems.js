const getSavedCartItems = () => {
  const localKey = localStorage.getItem('cartItems');
  return localKey;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
