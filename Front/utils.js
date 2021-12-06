"use strict";

const productsUrl = 'http://localhost:3000/products/';
const cartUrl = 'http://localhost:3000/products/cart';

const usrURL = 'http://localhost:3000/users/';
const catURL = 'http://localhost:3000/categorias/';
const encURL = 'http://localhost:3000/encuestas/';

const usrUURL = 'http://localhost:3000/users/';

function initShoppingCart(){
    if (sessionStorage.getItem("shoppingCart")  == null){
        let cart = new ShoppingCart();
        writeShoppingCart(cart);
    }
}

function readShoppingCart(){
    let cart = JSON.parse(sessionStorage.getItem("shoppingCart"));
    //  console.log(cart);
    return new ShoppingCart(cart._products,cart._productProxies); 
}

function writeShoppingCart(cart){
    sessionStorage.setItem("shoppingCart",JSON.stringify(cart));
}

//initShoppingCart();