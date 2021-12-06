"use stric";

const express = require('express');
const router = express.Router();
const dataHandler = require('../controllers/data_handler');

const fs = require('fs');

const Usuarios = require('../models/usersmongo');

let content = fs.readFileSync('./app/data/users.json')
const users = JSON.parse(content)

router.route('/')
.post((req, res) =>{
    obj = [];
    let query = req.body;

    let newUser = {
        nombre: query['nombre'],
        correo: query['correo'],
        password: query['password'],
        image: query['image'],
        role: query['role'],
        date: Date(),
    };
    let usuario = Usuarios(newUser);
    
    //console.log(query['nombre'])
// Guardamos el usuario en nuestra UsersDB
usuario.save(
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
    let usuario = query2['id']

    let query = req.body;

    console.log(query)

    Usuarios.findOneAndUpdate(
        {_id: `${usuario}`}, query, { new : true },
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


    Usuarios.findByIdAndDelete(
        {_id: `${iddel}`},
        function(err, result) {
          if (err) {
            res.status(400).send("usuario " + iddel + " no existe");
          } else {
            res.status(200).json("usuario " + iddel + " eliminada correctamente")
          }
        }
      );
    
});

module.exports = router;
