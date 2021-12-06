"use strict";

async function loadUsers(url){    
  //  console.log(url);
    let response = await fetch(url);
    if (response.status != 200) return [];
    return await response.json();
}

async function loadCat(url){    
    //  console.log(url);
      let response = await fetch(url);
      if (response.status != 200) return [];
      return await response.json();
  }

  async function loadEnc(url){    
    //  console.log(url);
      let response = await fetch(url);
      if (response.status != 200) return [];
      return await response.json();
  }

  async function loadUsr(url){    
    //  console.log(url);
      let response = await fetch(url);
      if (response.status != 200) return [];
      return await response.json();
  }

  async function loadmodcat(url){    
    //  console.log(url);
      let response = await fetch(url);
      if (response.status != 200) return [];
      return await response.json();
  }

  function deleteUser(url, onSuccess, onError) {
    let xhr = new XMLHttpRequest();
    
    console.log(url);
    xhr.open('DELETE', url,true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
        if (xhr.status == 200) {
            onSuccess(xhr.responseText);
        } else {
            onError(xhr.status + ': ' + xhr.statusText);
        }
    }
  xhr.send(null);
  sleep();
}

function changeCat(url, catList, onSuccess, onError) {
  let xhr = new XMLHttpRequest();

  //console.log(url)
  
  xhr.open('PUT', url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  //console.log(JSON.stringify(catList));
  xhr.send(JSON.stringify(catList));
  xhr.onload = () => {
      if (xhr.status == 200) {
          onSuccess(xhr.responseText);
      } else {
          onError(xhr.status + ': ' + xhr.statusText);
      }
  }
}

function load(url, productList, onSuccess, onError) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    //console.log(JSON.stringify(productList));
    xhr.send(JSON.stringify(productList));
    xhr.onload = () => {
        if (xhr.status == 200) {
            onSuccess(xhr.responseText);
        } else {
            onError(xhr.status + ': ' + xhr.statusText);
        }
    }
}

async function sleep() {
  await new Promise(r => setTimeout(r, 20000));
}