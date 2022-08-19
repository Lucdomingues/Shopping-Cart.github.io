const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('Verifica se ao chamar a função `getSavedCartItems` `localStorage.getItem` é chamado!', () => { 
    expect.assertions(1);
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });
  test('Verifica se ao chamar a função `getSavedCartItems` `localStorage.getItem` é chamado com o parametro correto!', () => { 
    expect.assertions(1);
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
  // fail('Teste vazio');
});
