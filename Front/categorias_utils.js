"use strict";

const catURL = 'https://encuestapp-iteso2.herokuapp.com/categorias/';

let categoriaContainer = document.getElementById('categorias');

function categoriaToHtml(cat){
    return `
        <tr>
        <td>${cat.nombre}</td>
        <td>${cat.creador}</td>
        <td>${cat.posts}</td>
        <td>
            <a href="modcat.html?id=${cat._id}" >Actualizar <i class="fas fa-edit"></i> </a> &nbsp;&nbsp;
            <a href="" onclick="borrarCat('${cat._id}')" >Eliminar <i class="fa fa-trash"></i> </a> &nbsp;&nbsp;
        </td>
        <tr>
    `
}

function categoriasListToHtml(catList){
    categoriaContainer.innerHTML = '<tr>' + catList.map(categoriaToHtml).join("\n") + '\n</tr>\n';
}

function borrarCat(uuid){
    console.log("uuid");
    deleteUser("https://encuestapp-iteso2.herokuapp.com/admin/categorias?id=" + uuid);
    location.reload();
}

// function deleteUsr(uuid){

//   console.log(uuid);

  
//   }

// function deleteUser(uuid){
//     userContainer.innerHTML = '<tr>' + userList.map(productToHtml).join("\n") + '\n</tr>\n';
// }

loadCat(catURL).then(categorias => {
    categoriasListToHtml(categorias);
})
