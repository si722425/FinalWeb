"use stric";

const express = require('express');
const router = express.Router();
const dataHandler = require('../controllers/data_handler');

router.route('/')
  .post((req, res) => dataHandler.login(req, res));


module.exports = router;
