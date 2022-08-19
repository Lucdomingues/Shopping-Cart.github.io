const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test('Verifica se ao executar a função com o parametro <ol><li>Item</li></ol> o método localStorage.setItem é chamado!', () => {
    expect.assertions(1);
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalled();
  });
  test('Verifica se ao executar a função com o parametro`<ol><li>Item</li></ol>` chama o localStorage com os parametros corretos!', () => {
    expect.assertions(1);
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
  // fail('Teste vazio');
});
