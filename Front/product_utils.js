"use strict";

let productContainer = document.getElementById('mainList');

function updatecarnumber(){
  if (sessionStorage.getItem("shoppingCart")  == null){
    let cart = new ShoppingCart();
    writeShoppingCart(cart);
}

let cart = readShoppingCart();

let counter = 0;
  for (const obj of cart.productProxies) {
    counter++;
  }
  document.getElementById('cartbadge').textContent= counter;
  sessionStorage.setItem("cantidad",counter)
}

function productToHtml(product){
    return `
    <div class="card col-md-4 col-lg-3 col-6">
    <span class="d-none">${product._uuid}</span>
    <img class="card-img-top mt-3" src="${product._imageUrl}" alt="${product._title}">
    <div class="card-body">
      <p class="card-text">${product._description}</p>
      <p><span>${product._unit} x ${product._pricePerUnit}</span></p>
    </div>
    <a onclick="preloadAddToCartModal('${product._uuid}')" class="btn btn-info mb-3" href="#" data-toggle="modal" data-target="#addToCart">Agregar al carrito</a>
  </div>
    `
}

function productListToHtml(productList){
    productContainer.innerHTML = '<div class="row mt-5">\n' + productList.map(productToHtml).join("\n") + '\n</div>';
}

function preloadAddToCartModal(uuid) {
  document.getElementById('productIdModal').value = uuid;
  document.getElementById('productAmountAddModal').value = 1;
}

function addProductToCart(){
  let uuid = document.getElementById('productIdModal').value;
  let amount = Number(document.getElementById('productAmountAddModal').value);

  let cart = readShoppingCart();

  //console.log(cart);
  cart.addItem(uuid,amount);
  //console.log(cart);
  writeShoppingCart(cart);

  let counter = 0;
  for (const obj of cart.productProxies) {
    counter++;
  }
  sessionStorage.setItem("cantidad",counter);
  document.getElementById('cartbadge').textContent= counter;

  
}

function updateCartProducts(){
  let cart = readShoppingCart();
  //console.log(cart._productProxies)
  loadcartProducts(cartUrl,cart._productProxies, products => {
    cart._products = products;
    writeShoppingCart(cart);
    window.location.href = "shopping_cart.html"
  }, err => alert(err));
}

loadProducts(productsUrl).then(products => {
    let page = 1;
    //console.log(products);
    productListToHtml(products.slice(0 * page, 4 * page));
})

