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

let userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: Date,
    image: String,
    role: {
        type: String,
        enum: ['ADMIN', 'USER', 'GUEST'],
        required: true
    },
});

userSchema.pre('save', function(next) {
    let user = this;
    user.password = bcrypt.hashSync(user.password, 10);
    next();
})

userSchema.methods.generateToken = function(password) {
    let user = this;
    let payload = {_id: user._id, role: user.role};
    let options = { expiresIn: 60 * 60 }
    if (bcrypt.compareSync(password, user.password)) {
        try {
            user.token = jwt.sign(payload, privateKey, options);
            return user.token;
        } catch (err) {
            console.log(err);
        }
    }
}

let usersmongo = mongoose.model('user', userSchema);

module.exports = usersmongo;