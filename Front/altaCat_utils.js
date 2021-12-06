"use strict";

let descripcionContainer = document.getElementById('descripcionCat');

let nombreContainer = document.getElementById('nombreCat');

function cargarCat() {
    let urlAltCat = 'http://localhost:3000/admin/categorias'
    let categoria = {
        nombre: "/" + nombreContainer.value,
        creador: "Juan Felipe Gudiño Ramos",
        uuidCreador: "df2008a5-1c40-4dd1-9db7-8aacc03ae2fb",
        description: descripcionContainer.value,
        posts: "20"
    }
    load(urlAltCat,categoria)
    sleep();
    window.location.href = "categoriastbl.html";
}