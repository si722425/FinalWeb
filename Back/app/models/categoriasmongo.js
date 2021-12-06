const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let mongoDB = "mongodb+srv://jgudino:Juanfe890@cluster0.sckve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true });

let privateKey = process.env.TOKEN_KEY;

mongoose.connect(mongoDB, { useNewUrlParser: true });


let categoriaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    creador: {
        type: String,
        required: true
    },
    uuidCreador: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    posts: {
        type: String,
        required: true
    },
    date: Date,
});


let categoriasmongo = mongoose.model('categorias', categoriaSchema);

module.exports = categoriasmongo;