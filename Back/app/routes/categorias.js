"use strict";

const { response } = require('express');
const express = require('express');
const router = express.Router();
const dataHandler = require('../controllers/data_handler');
const Categorias = require('../controllers/categorias');
const Categoria = require('../models/categoriasmongo');


router.route('/')
.get((req, res) =>{
    let query = req.url;
    if(query == "/"){
        Categoria.find(
            {},
            function(err, result) {
              if (err) {
                res.status(400).send(err);
              } else {
                res.status(200).json(result)
              }
            }
          );
    }else{

    let query2 = req.query;
    let categoria = query2['id']

    Categoria.findById(
        { _id: `${categoria}`},
        function(err, result) {
          if (err) {
            res.status(400).send(err);
          } else {
            res.status(200).json(result)
          }
        }
      );
}
});


module.exports = router;
