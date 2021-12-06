"use strict";

const usrURL = 'https://encuestapp-iteso2.herokuapp.com/admin/users';

function cargarEnc(){

    let nombre = document.getElementById('exampleFirstName');
    let correo = document.getElementById('exampleInputEmail');
    let pass1 = document.getElementById('exampleInputPassword');
    let pass2 = document.getElementById('exampleRepeatPassword');

    let nombrevalue = nombre.value
    let correovalue = correo.value
    let pass1value = pass1.value
    let pass2value = pass2.value

    if (pass1value === pass2value){
        let usr = {
            nombre: nombrevalue,
            correo: correovalue,
            password: pass1value,
            image: "https://randomuser.me/api/portraits/men/" + Math.floor(Math.random() * 100) + ".jpg",
            role: 'USER'
        }
        console.log(usr)
        load(usrURL,usr)
        sleep();
        window.location.href = "encuestastbl.html";
    }else{
        alert("las contraseñas no coinciden")
    }
}
