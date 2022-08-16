const fetchItem = async (item) => {
  if (!item) {
    throw new Error('You must provide an url');
  }
  try {
    const url = `https://api.mercadolibre.com/items/${item}`;
    const requisicao = await fetch(url);
    const response = await requisicao.json();
    return response;
  } catch (error) {
    return error.message;
  }

};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
