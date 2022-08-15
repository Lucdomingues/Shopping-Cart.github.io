require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('Verifica se fecthItem é uma função!', () => {
    expect(fetchItem).toBeInstanceOf(Function);
  });
  test('Verifica se ao passar o parametro `MLB1615760527` fetch é chamado!', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });
  test('Verifica se ao passar o parametro `MLB1615760527` fetch utiliza o endpoint correto!', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527'
    await fetchItem('MLB1615760527')
    expect(fetch).toBeCalledWith(url);
  });
  test('Verifica se ao passar o parametro `MLB1615760527` retorna o objeto correto!', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  test('Verifica se for um parametro vázio retorna uma menssagem de erro!', async () => {
    try {
      await fetchItem('MLB1615760527');
    } catch (error) {
      expect(error).toThrow('You must provide an url');
    }
  });
  // fail('Teste vazio');
});
