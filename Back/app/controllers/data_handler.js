"use strict";

const fs = require('fs');
const Product = require('./products');
const User = require('./users');
const Usuarios = require('../models/usersmongo')
const Categoria = require('./categorias');
const Encuesta = require('./encuestas')
const { createFromObject } = require('./products');
const { stringify } = require('querystring');

let content = fs.readFileSync('./app/data/products.json')
let users = fs.readFileSync('./app/data/users.json')
let contest = fs.readFileSync('./app/data/encuestas.json')
let cat = fs.readFileSync('./app/data/categorias.json')
const products = JSON.parse(content)
const usuarios = JSON.parse(users)
const encuestas = JSON.parse(contest)
const categorias = JSON.parse(cat)
// const products = JSON.parse(content).map(Product.createFromObject);

function getProducts() {
    return products;
}

function getUsuarios() {
    return usuarios;
}

function getEncuestas() {
    return encuestas;
}

function getCategorias() {
    return categorias;
}

function getProductById(uuid) {
    //console.log(products);
    return products.find( producto => producto._uuid === uuid);
}

function createProduct(product) {
    products.push(Product.createFromObject(product));
}

function updateProduct(uuid, updateProduct) {
    let index = products.findIndex(element => element.uuid === uuid);
        //console.log(updateProduct);
        if (index >= 0){
            products[index] = updateProduct;
    }
}

function deleteProduct(uuid) {
    // find -> splice
    let index = products.findIndex(element => element.uuid === uuid);
        if (index >= 0){
            products.splice(index,1);
    }
}

function createUser(user) {
    //console.log(user);
    usuarios.push(User.createFromObject(user));
}

function updateUser(uuid, updateUser) {
    let index = usuarios.findIndex(element => element.uuid === uuid);
        //console.log(updateProduct);
        if (index >= 0){
            usuarios[index] = updateUser;
    }
}

function deleteUser(uuid) {
    // find -> splice
    let index = usuarios.findIndex(element => element.uuid === uuid);
        if (index >= 0){
            usuarios.splice(index,1);
    }
}

function createCategoria(categoria) {
    categorias.push(Categoria.createFromObject(categoria));
}

function updateCategoria(uuid, updateCategoria) {
    let index = categorias.findIndex(element => element.uuid === uuid);
        //console.log(updateProduct);
        if (index >= 0){
            categorias[index] = updateCategoria;
    }
}

function deleteCategoria(uuid) {
    // find -> splice
    let index = categorias.findIndex(element => element.uuid === uuid);
        if (index >= 0){
            categorias.splice(index,1);
    }
}

function createEncuesta(encuesta) {
    encuestas.push(Encuesta.createFromObject(encuesta));
}

function updateEncuesta(uuid, updateEncuesta) {
    let index = encuestas.findIndex(element => element.uuid === uuid);
        //console.log(updateProduct);
        if (index >= 0){
            encuestas[index] = updateEncuesta;
    }
}

function deleteEncuesta(uuid) {
    // find -> splice
    let index = encuestas.findIndex(element => element.uuid === uuid);
        if (index >= 0){
            encuestas.splice(index,1);
    }
}

function login(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    Usuarios.findOne({ email: `${email}` })
        .then(user => {
            let token = user.generateToken(password);
            console.log(token)
            if (token != undefined) {
                res.status(200)
                res.set('Content-Type', 'text/plain; charset=utf-8');
                res.send(token);
            } else {
                res.status(404);            
                res.set('Content-Type', 'text/plain; charset=utf-8');
                res.send(`Wrong email or password`);
            }
        })
        .catch(err => {
            res.status(404);            
            res.set('Content-Type', 'text/plain; charset=utf-8');
            res.send(`Wrong email or password`);
        });
}

function findProduct(query) {
    
}

exports.getProducts = getProducts;
exports.createProduct = createProduct;
exports.getProductById = getProductById;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
exports.getUsuarios = getUsuarios;
exports.getEncuestas = getEncuestas;
exports.getCategorias = getCategorias;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.updateCategoria = updateCategoria;
exports.deleteCategoria = deleteCategoria;
exports.updateEncuesta = updateEncuesta;
exports.deleteEncuesta = deleteEncuesta;
exports.createUser = createUser;
exports.createCategoria = createCategoria;
exports.createEncuesta = createEncuesta;
exports.login = login;
exports.products = products;

