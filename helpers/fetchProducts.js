const fetchProducts = async (produtos) => {
  if (!produtos) {
    throw new Error('You must provide an url');
  }
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${produtos}`;
    const endereco = await fetch(url);
    const json = await endereco.json();
    return json;
  } catch (error) {
    return error.message;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
