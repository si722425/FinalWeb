"use stric";

const express = require('express');
const router = express.Router();
const dataHandler = require('../controllers/data_handler');

const fs = require('fs');

let content = fs.readFileSync('./app/data/products.json')
const products = JSON.parse(content)

router.route('/')
.post((req, res) =>{
    obj = [];
    let query = req.body;
    try{
        for (var objeto of query){
            try {
                dataHandler.createProduct(objeto);
                res.write("producto " + objeto._title + " creado");
            } catch (error) {
                res.status(400).send("Bad request no se pudo crear el objeto")
            }
        }
    }catch(e){
        res.status(400).send(e.errorMessage);
    }
    fs.writeFileSync('./app/data/products.json', JSON.stringify(dataHandler.getProducts()));
    res.status(201).json();
});

router.route('/')
.put((req, res) =>{
    let query2 = req.query;
    let productostemp = dataHandler.getProducts();
    let query = req.body;

    try{
            let index = -1;
            index = productostemp.findIndex(element => element._uuid === query2['id']);
            if (index < 0){
              res.status(404).send("el objeto buscado no existe");
            }else{
                try {
                    dataHandler.createProduct(query);
                    products.splice(index, 1);
                    products.push(query);
                    
                } catch (error) {
                    res.status(404).send("No se puede crear el objeto, falta información");
                }
            }
    }catch(e){
        res.status(400).send(e.errorMessage);
    }
    fs.writeFileSync('./app/data/products.json', JSON.stringify(products));
    res.status(200).json(query._title + " modificado correctamente");
});

router.route('/')
.delete((req, res) =>{
    let query2 = req.query;
    let productostemp = dataHandler.getProducts();
    let query = req.body;

    try{
            let index = -1;
            index = productostemp.findIndex(element => element._uuid === query2['id']);
            if (index < 0){
              res.status(404).send("el objeto buscado no existe");
            }else{
                try {
                    products.splice(index, 1);
                    res.write(productostemp[index]._title + " eliminado correctamente");
                } catch (error) {
                    res.status(404).send("No se puede eliminar el objeto");
                }
            }
    }catch(e){
        res.status(400).send(e.errorMessage);
    }
    fs.writeFileSync('./app/data/products.json', JSON.stringify(products));
    res.status(200).json();
    
});

module.exports = router;
