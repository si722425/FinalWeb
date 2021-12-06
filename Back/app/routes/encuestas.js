"use strict";

const { response } = require('express');
const express = require('express');
const router = express.Router();
const dataHandler = require('../controllers/data_handler');
const Encuestas = require('../controllers/encuestas');
const Encuesta = require('../models/encuestasmongo');


router.route('/')
.get((req, res) =>{
    let query = req.url;
    if(query == "/"){

        Encuesta.find(
            {},
            function(err, result) {
              if (err) {
                res.status(400).send(err);
              } else {
                res.status(200).json(result)
              }
            }
          );

    //    try{
    //        res.status(200).json(dataHandler.getEncuestas())
    //    }catch(e){
    //        res.status(400).send(e.errorMessage);
    //    }
    }else{

    let query2 = req.query;

    let encuesta = query2['id']
    //console.log(usuario)

    //Users.findById({ _id: `${usuario}` }).then(user => res.status(200).json(user));


    Encuesta.findById(
        { _id: `${encuesta}`},
        function(err, result) {
          if (err) {
            res.status(400).send(err);
          } else {
            res.status(200).json(result)
          }
        }
      );

    // try{
    //         let index = -1;
    //         index = encuestastemp.findIndex(element => element._uuid === query2['id']);
    //         if (index < 0){
    //           res.status(404).send("el objeto buscado no existe");
    //         }else{
    //            encuestas.push(encuestastemp[index]);
    //         }
    //         res.status(200).json(res.send(encuestas));
    // }catch(e){
    //     res.status(400).send(e.errorMessage);
    // }
    }   
});


module.exports = router;
