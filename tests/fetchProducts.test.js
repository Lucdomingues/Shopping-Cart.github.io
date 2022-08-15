require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Verifica se é uma função!', () => {
    expect(fetchProducts).toBeInstanceOf(Function);
  });
  test('Verifica se fetch é chamada quando recebe um parametro `computador`!', async () => {
    await fetchProducts('computador')
    expect(fetch).toBeCalled();
  });
  test('Verifica se ao receber um parametro `computador` é utilizado o endpoint correto!', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador')
    expect(fetch).toBeCalledWith(url);
  });
  test('Verifica se ao receber um parametro `computador` retorna o objeto esperado!', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });
  test('Verifica se ao receber um parametro vázio retorna uma menssagem de erro!', async () => {
    try {
      await fetchProducts('computador')
    } catch (error) {
      expect(error).toThrow('You must provide an url');
    }
  });
  // fail('Teste vazio');
});
