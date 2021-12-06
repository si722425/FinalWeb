"use strict";

const usURL = 'http://localhost:3000/users?id=abcd';



function encuestasToHtml(enc){
    let nombreP = document.getElementById('nombreP');
    let nombre = document.getElementById('nombre');
    let correo = document.getElementById('correo');
    let usrname = document.getElementById('usrname');
    let imgusr = document.getElementById('imgusr');
    let imgusrw = document.getElementById('imgusrw');
    nombreP.innerText = enc._nombre;
    nombre.value = enc._nombre;
    correo.value = enc._correo;
    usrname.innerText = enc._nombre;
    imgusr.src = enc._imageUrl;
    imgusr2.src = enc._imageUrl;
}

function encuestasListToHtml(catList){
   catList.map(encuestasToHtml).join("\n");
}

// function deleteUsr(uuid){

//   console.log(uuid);

  
//   }

// function deleteUser(uuid){
//     userContainer.innerHTML = '<tr>' + userList.map(productToHtml).join("\n") + '\n</tr>\n';
// }

loadEnc(usURL).then(encuestas => {
    encuestasListToHtml(encuestas);
})
