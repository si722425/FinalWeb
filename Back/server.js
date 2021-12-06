"use strict";

process.env.TOKEN_KEY = "TokenSecreto890"

const cors = require('cors');
const express = require('express');
const app = express ();
const port = 3000;
const router = require('./app/controllers/router');
const loginRouter = require('./app/routes/login');

app.use(cors());
app.use(express.json());
app.use(router);
app.use(loginRouter);
app.use('/api/users', router);


app.listen(port,()=> {
    console.log(`Example app listening port on port ${port}`);
})

