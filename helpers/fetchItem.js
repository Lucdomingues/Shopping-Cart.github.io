const fetchItem = async (item) => {
  const url = `https://api.mercadolibre.com/items/${item}`
  const requisicao = await fetch(url);

};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
