"use strict";

const usrURL = 'https://encuestapp-iteso2.herokuapp.com/login';

function cargarLog(){

    let correo = document.getElementById('exampleInputEmail');
    let pass = document.getElementById('exampleInputPassword');

    let correovalue = correo.value
    let passvalue = pass.value

        let usr = {
            correo: correovalue,
            password: passvalue,
        }
        console.log(usr)
        load(usrURL,usr)
        sleep();
        window.location.href = "encuestastbl.html";
}
