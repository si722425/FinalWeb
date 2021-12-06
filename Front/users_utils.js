"use strict";

const usrURL = 'http://localhost:3000/users/';

let userContainer = document.getElementById('users');

function userToHtml(usr){
    return `
        <tr>
        <td>${usr.nombre}</td>
        <td>${usr.correo}</td>
        <td>${usr.date.substring(0, 10)}</td>
        <td>
        <a href="usuarios.html" onclick="borrarUser('${usr._id}')" >Eliminar <i class="fa fa-trash"></i> </a> &nbsp;&nbsp;
        </td>
        <tr>
    `
}

function userListToHtml(userList){
    userContainer.innerHTML = '<tr>' + userList.map(userToHtml).join("\n") + '\n</tr>\n';
}

// function deleteUsr(uuid){

//   console.log(uuid);

  
//   }

function borrarUser(uuid){
    console.log(uuid);
    deleteUser("http://localhost:3000/admin/users?id=" + uuid);
}

loadUsers(usrURL).then(users => {
    let page = 1;
    //console.log(products);
    userListToHtml(users);
})
