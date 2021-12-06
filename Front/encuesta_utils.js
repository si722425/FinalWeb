"use strict";

var url_string = window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("id");

const catURL = 'https://encuestapp-iteso2.herokuapp.com/encuestas?id=' + c;

const catAdminURL = 'https://encuestapp-iteso2.herokuapp.com/admin/encuestas?id=' + c;

let categoriasContainer = document.getElementById('barras');

let pregunta = document.getElementById('pregunta');

let txtv1 = document.getElementById('txtv1');

let txtv2 = document.getElementById('txtv2');

let description = document.getElementById('description')

let obj = {}

function categoriaToHtml(cat){

    obj = cat

    pregunta.innerText = cat.pregunta

    txtv1.innerText = cat.txtv1

    txtv2.innerText = cat.txtv2

    description.innerText = cat.description

    let suma = parseInt(cat.si) + parseInt(cat.no)

    //console.log(suma)

    let valor1 = ((parseInt(cat.si) / suma) * 100).toFixed(2)

    let valor1temp = ((parseInt(cat.si) / suma) * 100).toFixed(2)

    let valor2 = ((parseInt(cat.no) / suma) * 100).toFixed(2)


    if (isNaN(valor1)){
        if (!(isNaN(valor2))){
            valor1=0
        }else{
            valor1=50
        }
    }

    if (isNaN(valor2)){
        if (!(isNaN(valor1temp))){
            valor2=0
        }else{
            valor2=50
        }
    }
    //console.log(valor1)
    

    return `
    <div class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style="width: ${valor1}%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">${valor1}%</div>
    <div class="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" style="width: ${valor2}%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">${valor2}%</div>
    `
}

function categoriasListToHtml(catList){
    let array = [catList]
    categoriasContainer.innerHTML = array.map(categoriaToHtml).join("\n");
}

loadCat(catURL).then(categorias => {
    categoriasListToHtml(categorias);
})

function voto(boton){
    if (boton === 1){
        obj.si = String(parseInt(obj.si) + 1)
    }else{
        obj.no = String(parseInt(obj.no) + 1)
    }
    console.log(obj)

    changeCat(catAdminURL,obj);
    sleep(2000);
    window.location.href = "";
}