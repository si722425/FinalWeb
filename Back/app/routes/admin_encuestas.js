"use stric";

const express = require('express');
const router = express.Router();
const dataHandler = require('../controllers/data_handler');

const fs = require('fs');

const Encuesta = require('../models/encuestasmongo');

let content = fs.readFileSync('./app/data/encuestas.json')
const encuestas = JSON.parse(content)

router.route('/')
.post((req, res) =>{
    obj = [];
    let query = req.body;
    let newEncuesta = {
        si: query[0]['si'],
        no: query[0]['no'],
        description: query[0]['description'],
        pregunta: query[0]['pregunta'],
        comentarios: query[0]['comentarios'],
        uuidenc: query[0]['uuidenc'],
        txtv1: query[0]['txtv1'],
        txtv2: query[0]['txtv2'],
        date: Date(),
    };
    let encuesta = Encuesta(newEncuesta);

// Guardamos el usuario en nuestra UsersDB
encuesta.save(
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
    let encuesta = query2['id']

    let query = req.body;

    console.log(query)

    Encuesta.findOneAndUpdate(
        {_id: `${encuesta}`}, query, { new : true },
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

    Encuesta.findByIdAndDelete(
        {_id: `${iddel}`},
        function(err, result) {
          if (err) {
            res.status(400).send("Encuesta " + iddel + " no existe");
          } else {
            res.status(200).json("Encuesta " + iddel + " eliminada correctamente")
          }
        }
      );

    //User.findByIdAndDelete(id, (err, doc) => { console.log(doc) });

    // try{
    //         let index = -1;
    //         index = encuestatemp.findIndex(element => element._uuid === query2['id']);
    //         if (index < 0){
    //           res.status(404).send("el objeto buscado no existe");
    //         }else{
    //             try {
    //                 encuestas.splice(index, 1);
    //                 res.write(encuestatemp[index]._pregunta + " eliminado correctamente");
    //             } catch (error) {
    //                 res.status(404).send("No se puede eliminar el objeto");
    //             }
    //         }
    // }catch(e){
    //     res.status(400).send(e.errorMessage);
    // }
    // fs.writeFileSync('./app/data/encuestas.json', JSON.stringify(encuestas));
    // res.status(200).json();encuestas
    
});

module.exports = router;
