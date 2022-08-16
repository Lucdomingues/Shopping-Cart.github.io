const fetchProducts = async (produtos) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${produtos}`;
    const endereco = await fetch(url);
    const json = await endereco.json();
    return json;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
