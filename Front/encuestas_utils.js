"use strict";

const encURL = 'http://localhost:3000/encuestas/';

let encuestasContainer = document.getElementById('encuestas');

function encuestasToHtml(enc){
    return `
        <tr>
        <td> <a href="encuesta.html?id=${enc._id}">${enc.pregunta}</a></td>
        <td>${enc.comentarios}</td>
        <td>
            <a href="" onclick="borrarEnc('${enc._id}')" >Eliminar <i class="fa fa-trash"></i> </a> &nbsp;&nbsp;
        </td>
        <tr>
    `
}

function encuestasListToHtml(catList){
   encuestasContainer.innerHTML = '<tr>' + catList.map(encuestasToHtml).join("\n") + '\n</tr>\n';
}

function borrarEnc(uuid){
    console.log(uuid);
    deleteUser("http://localhost:3000/admin/encuestas?id=" + uuid);
    location.reload();
}

loadEnc(encURL).then(encuestas => {
    encuestasListToHtml(encuestas);
})
