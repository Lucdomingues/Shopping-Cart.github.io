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
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const criarProduto = async () => {
  const response = await fetchProducts('computador');
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
  const selecionado = document.querySelector('.cart__items');
  selecionado.appendChild(destruction);
};

const addEvent = () => {
  const selecao = document.querySelector('.items');
  selecao.addEventListener('click', botaoCarrinho);
};

window.onload = () => {
  criarProduto();
  addEvent();
};
