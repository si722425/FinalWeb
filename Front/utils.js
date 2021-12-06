"use strict";

const productsUrl = 'https://encuestapp-iteso2.herokuapp.com/products/';
const cartUrl = 'https://encuestapp-iteso2.herokuapp.com/products/cart';

const usrURL = 'https://encuestapp-iteso2.herokuapp.com/users/';
const catURL = 'https://encuestapp-iteso2.herokuapp.com/categorias/';
const encURL = 'https://encuestapp-iteso2.herokuapp.com/encuestas/';

const usrUURL = 'https://encuestapp-iteso2.herokuapp.com/users/';

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