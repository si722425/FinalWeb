"use strict";

const catURL = 'http://localhost:3000/categorias/';

let categoriasContainer = document.getElementById('categoriacar');

function categoriaToHtml(cat){
    return `
        <option value="${cat._id}">${cat.nombre}</option>
    `
}

function categoriasListToHtml(catList){
    categoriasContainer.innerHTML = catList.map(categoriaToHtml).join("\n");
}

loadCat(catURL).then(categorias => {
    categoriasListToHtml(categorias);
})

let pregunta = document.getElementById('pregunta');

let v1 = document.getElementById('v1');

let v2 = document.getElementById('v2');

let description = document.getElementById('description');


function cargarEnc(){

    let select = document.getElementById('categoriacar');

    var nombre = select.options[select.selectedIndex].text;

    var uuid = select.options[select.selectedIndex].value;

    console.log(nombre, uuid)

    let urlAltEnc = 'http://localhost:3000/admin/encuestas'
    let encuesta = [{
        si: "0",
        no: "0",
        description: description.value,
        pregunta: pregunta.value,
        comentarios: "20",
        uuidenc: uuid,
        txtv1: v1.value,
        txtv2: v2.value
    }]
    load(urlAltEnc,encuesta)
    sleep();
    window.location.href = "encuestastbl.html";
}
