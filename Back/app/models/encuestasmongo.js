const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let mongoDB = "mongodb+srv://jgudino:Juanfe890@cluster0.sckve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true });

let privateKey = process.env.TOKEN_KEY;

mongoose.connect(mongoDB, { useNewUrlParser: true });

// "_uuid": "df2008a5-1c40-4dd1-9db7-8aacc03ae2fb",
//     "_nombre": "Jorge Ortega",
//     "_correo": "jortega@iteso.mx",
//     "_imageUrl": "https://randomuser.me/api/portraits/men/71.jpg",
//     "_password": "Jortega123",
//     "_posts": "10"

let encuestaSchema = mongoose.Schema({
    si: {
        type: String,
        required: true
    },
    no: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    pregunta: {
        type: String,
        required: true
    },
    comentarios: {
        type: String,
        required: true
    },
    uuidenc: {
        type: String,
        required: true
    },
    txtv1: {
        type: String,
        required: true
    },
    txtv2: {
        type: String,
        required: true
    },
    date: Date,
});

let encuestasmongo = mongoose.model('encuestas', encuestaSchema);

module.exports = encuestasmongo;