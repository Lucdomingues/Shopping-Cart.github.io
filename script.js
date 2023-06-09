const cont = document.querySelector('.items');

const carrinhoOl = document.querySelector('.cart__items');
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addLoading = () => {
  cont.appendChild(createCustomElement('span', 'loading', 'carregando...'));
}; 

const removeLoading = () => {
  const selectorLoading = document.querySelector('.loading');
  cont.removeChild(selectorLoading);
};

const criarProduto = async () => {
  addLoading();
  const response = await fetchProducts('computador');
  removeLoading();
  const obj = await response.results;
  obj.forEach((product) => {
    const { id, title, thumbnail } = product;
    const desestruturacao = createProductItemElement({ sku: id, name: title, image: thumbnail });
    const itens = document.querySelector('.items');
    itens.appendChild(desestruturacao);
  });
};

const botaoCarrinho = async (event) => {
  const ids = event.target.parentElement.firstChild.innerText;
  const iten = await fetchItem(ids);
  const arqv = await iten;
  const { id, title, price } = arqv;
  const destruction = createCartItemElement({ sku: id, name: title, salePrice: price });
  carrinhoOl.appendChild(destruction);
};

const saveStorage = async () => {
  const itemsCar = await carrinhoOl.innerHTML;
  await saveCartItems(JSON.stringify(itemsCar));
};
 
const getSaveStorage = async () => {
  carrinhoOl.innerHTML = await JSON.parse(getSavedCartItems());
};

const btnEsvazia = () => {
  carrinhoOl.innerHTML = '';
 };

const addEvent = () => {
  const btnClear = document.querySelector('.empty-cart');
  const selecao = document.querySelector('.items');
  btnClear.addEventListener('click', btnEsvazia);
  selecao.addEventListener('click', saveStorage);
  selecao.addEventListener('click', botaoCarrinho);
};

window.onload = async () => {
  criarProduto();
  addEvent();
  getSaveStorage();
};
