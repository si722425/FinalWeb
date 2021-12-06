"use strict";

var url_string = window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("id");

const catURL = 'https://encuestapp-iteso2.herokuapp.com/categorias?id=' + c;

const catAdminURL = 'https://encuestapp-iteso2.herokuapp.com/admin/categorias?id=' + c;

loadmodcat(catURL).then(categorias => {
    modcatListToHtml(categorias);
})

let modCatContainer = document.getElementById('modificar');

let obj = {};

function modcatToHtml(cat){
    obj = cat
    return `
    <div class="row">
    <div class="form-group col-md-12">

        <h5>Nombre</span></h5>

        <div class="controls">

            <input type="text" class="form-control form-control-user" id="nombreCat"
        placeholder="Nombre Categoría" value="${cat.nombre}">

        </div>

    </div>
</div>
<div class="row">
    <div class="form-group col-md-12">

        <h5>Descripción</span></h5>

        <div class="controls">

            <textarea name="Notas" id="descripcionCat" class="form-control"
                placeholder="Anota aquí la descripción">${cat.description}</textarea>

        </div>

    </div>
</div>
    `
}

function modcatListToHtml(catList){
    let array = [catList]
    modCatContainer.innerHTML = '<tr>' + array.map(modcatToHtml).join("\n") + '\n</tr>\n';
}

// function borrarCat(uuid){
//     console.log(uuid);
//     deleteUser("http://localhost:3000/admin/categorias?id=" + uuid);
//     location.reload();
// }

// // function deleteUsr(uuid){

// //   console.log(uuid);

  
// //   }

// // function deleteUser(uuid){
// //     userContainer.innerHTML = '<tr>' + userList.map(productToHtml).join("\n") + '\n</tr>\n';
// // }




function actCat(){

    let descripcionContainer = document.getElementById('descripcionCat');

    let nombreContainer = document.getElementById('nombreCat');
    obj.nombre = nombreContainer.value
    obj.description = descripcionContainer.value
    
    console.log(obj)

    changeCat(catAdminURL,obj);
    sleep();
    window.location.href = "categoriastbl.html";
}
