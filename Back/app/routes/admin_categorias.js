"use stric";

const express = require('express');
const router = express.Router();
const dataHandler = require('../controllers/data_handler');

const fs = require('fs');

const Categoria = require('../models/categoriasmongo');

let content = fs.readFileSync('./app/data/categorias.json')
const categorias = JSON.parse(content)


router.route('/')
.post((req, res) =>{
    obj = [];
    let query = req.body;

    let newCategoria = {
        nombre: query['nombre'],
        creador: query['creador'],
        uuidCreador: query['uuidCreador'],
        description: query['description'],
        posts: query['posts'],
        date: Date(),
    };
    let categoria = Categoria(newCategoria);
    //console.log(query['nombre'])
// Guardamos el usuario en nuestra UsersDB
categoria.save(
    {},
    function(err, result) {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(result)
      }
    }
  );
});

router.route('/')
.put((req, res) =>{
    let query2 = req.query;
    let categoria = query2['id']

    let query = req.body;

    console.log(query)

    Categoria.findOneAndUpdate(
        {_id: `${categoria}`}, query, { new : true },
        function(err, result) {
          if (err) {
            res.status(400).send(err);
          } else {
            res.status(200).json(result)
          }
        }
      );
});

router.route('/')
.delete((req, res) =>{
    let query2 = req.query;
    let iddel = query2["id"]


    Categoria.findByIdAndDelete(
        {_id: `${iddel}`},
        function(err, result) {
          if (err) {
            res.status(400).send("Categoria " + iddel + " no existe");
          } else {
            res.status(200).json("Categoria " + iddel + " eliminada correctamente")
          }
        }
      );
    
});

module.exports = router;
