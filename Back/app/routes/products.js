"use strict";

const { response } = require('express');
const express = require('express');
const router = express.Router();
const dataHandler = require('../controllers/data_handler');
const Product = require('../controllers/products');


router.route('/')
.get((req, res) =>{
    let query = req.url;
    if(query == "/"){
       try{
           res.status(200).json(dataHandler.getProducts())
       }catch(e){
           res.status(400).send(e.errorMessage);
       }
    }else{

    let query2 = req.query;
    let productos = [];
    let productostemp = dataHandler.getProducts();

    try{
            let index = -1;
            index = productostemp.findIndex(element => element._uuid === query2['id']);
            if (index < 0){
              res.status(404).send("el objeto buscado no existe");
            }else{
               productos.push(productostemp[index]);
            }
            res.status(200).json(res.send(productos));
    }catch(e){
        res.status(400).send(e.errorMessage);
    }
}
});

router.route('/cart')
.post((req, res) =>{
    let arrProds = req.body;
    let arr = [];
    if (Array.isArray(arrProds)){
        for (let i of arrProds){
            let prod = dataHandler.getProductById(i.productUuid);
            console.log(prod);
            if (prod == undefined){
                res.status(404).send("Bad product id");
                return;
            }
            arr.push(prod);
        }
        res.status(200).json(res.send(arr));
    } else {
        res.status(400).send("Fomato invalido");
    }
});


module.exports = router;
