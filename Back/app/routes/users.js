"use strict";

const { response } = require('express');
const express = require('express');
const router = express.Router();
const dataHandler = require('../controllers/data_handler');
const Users = require('../models/usersmongo');


router.route('/')
.get((req, res) =>{
    let query = req.url;
    if(query == "/"){
        Users.find(
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
    
    let usuario = query2['id']


    Users.findById(
        { _id: `${usuario}`},
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
