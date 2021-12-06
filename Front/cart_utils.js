"use strict";

    let cantidad = sessionStorage.getItem("cantidad");

    let productContainer = document.getElementById('productos');

    let accountContainer = document.getElementById('carritocuenta');

    let cuentahtml = document.getElementById('monto');

    let items = document.getElementById('items-account');

    items.innerHTML = sessionStorage.getItem("cantidad") + " Productos";

    let items2 = document.getElementById('items-account2');

    items2.innerHTML = sessionStorage.getItem("cantidad") + " Productos";


    let cuenta = 0;

    document.getElementById('cartbadgeshop').textContent= cantidad;

    function cartToHtml(product,index){
        return `
        <div class="row border-top border-bottom">
            <div class="row main align-items-center">
                <div class="col-2"><img class="img-fluid" src="${product._imageUrl}"></div>
                <div class="col">
                    <div class="row text-muted">${product._category}</div>
                    <div class="row">${product._title}</div>
                </div>
                <div class="col"> <a href="" onclick="deleteProductsCart('${product._uuid}','${index}')">-</a><a class="border">${cart.productProxies[index].amount}</a><a href="" onclick="addProductsCart('${product._uuid}','${index}')">+</a> </div>
                <div class="col">&#36; ${Number.parseFloat(cart.productProxies[index].amount * product._pricePerUnit).toFixed(2)} <button onclick="deleteCartProduct('${product._uuid}','${index}')" class="close">&#10005;</button></div>
            </div>
        </div>
        `
    }
    
  function cuentaToHtmltext(product,index){
    cuenta += cart.productProxies[index].amount * product._pricePerUnit
    cuentahtml.innerText = "$" + Number.parseFloat(cuenta).toFixed(2);
      return `
      <div class="row">
        <div class="col" style="padding-left:0;" id="items-account2">${product._title}</div>
        <div class="col text-right"> ${cart.productProxies[index].amount} x $ ${product._pricePerUnit}</div>
      </div>
      `
  }

function cuentaToHtml(productList,index){
   // console.log("prueba");
      accountContainer.innerHTML = '' + productList.map(cuentaToHtmltext).join("\n") + '';
  }

function CartListToHtml(productList,index){
 // console.log("prueba");
    productContainer.innerHTML = ' <div class="container col-md-8 col-12">\n' + productList.map(cartToHtml).join("\n") + '\n</div>';
}

let cart = readShoppingCart();

CartListToHtml(JSON.parse(cart._products));
cuentaToHtml(JSON.parse(cart._products));

function deleteCartProduct(uuid,index){
  let cart = readShoppingCart();
  let productos = JSON.parse(cart._products);
  cart._productProxies.splice(index,1);
  productos.splice(index,1);
  cart._products = JSON.stringify(productos);
  console.log(cart._productProxies);
  console.log(JSON.parse(cart._products));
  writeShoppingCart(cart);
  sessionStorage.setItem("cantidad",Number(sessionStorage.getItem("cantidad"))-1);  
  window.location.href = "shopping_cart.html"
}

function addProductsCart(uuid, index){
  let cart = readShoppingCart();
  cart._productProxies[index]["amount"] = cart._productProxies[index]["amount"] + 1;
  writeShoppingCart(cart);
  //alert(cart._productProxies[index]["amount"]);
}

function deleteProductsCart(uuid, index){
  let cart = readShoppingCart();
  cart._productProxies[index]["amount"] = cart._productProxies[index]["amount"] - 1;
  writeShoppingCart(cart);
  //alert(cart._productProxies[index]["amount"]);
}