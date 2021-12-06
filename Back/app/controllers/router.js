"use strict";

var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();

const express = require('express');
const router = express.Router();
const productRouter = require('../routes/products');
const userRouter = require('../routes/users');
const encuestasRouter = require('../routes/encuestas');
const categoriasRouter = require('../routes/categorias');
const loginRouter = require('../routes/login');
const adminProductRouter = require('../routes/admin_products');
const adminUserRouter = require('../routes/admin_users');
const adminEncuestasRouter = require('../routes/admin_encuestas');
const adminCategoriasRouter = require('../routes/admin_categorias');


router.use('/products',productRouter);
router.use('/users',userRouter);
router.use('/encuestas',encuestasRouter);
router.use('/categorias',categoriasRouter);
router.use('/login',loginRouter);
router.use('/admin/products',adminProductRouter);
router.use('/admin/users',adminUserRouter);
router.use('/admin/encuestas',adminEncuestasRouter);
router.use('/admin/categorias',adminCategoriasRouter);



// const path = require("path");

// router.get("/", (req, res) => {
//   let indexPath = path.join(__dirname, "../views/home.html");
//   res.sendFile(indexPath);
// });

// router.get("/home", (req, res) => {
//     let indexPath = path.join(__dirname, "../views/home.html");
//     res.sendFile(indexPath);
//   });

//   router.get("/shopping_cart", (req, res) => {
//     let indexPath = path.join(__dirname, "../views/Shopping_Cart.html");
//     res.sendFile(indexPath);
//   });

// // router.get('/',(req,res) => {
// //     res.sendFile('../views/home.html' , { root : __dirname});

// // });

// function validateAdmin(req,res,next){


//     if(!(req.get('x-auth') == "admin")){
//         res.status(403)
//         .type("text/plain")
//         .send("Unauthorized admin privileges required!");
//     }else{
//         next();
//     }

// }

module.exports = router;
