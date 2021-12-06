"use strict";

class ShoppingCartException {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

class ProductProxy{
    constructor(productUuid,amount){
        this.productUuid = productUuid;
        this.amount = amount;

    }
}

class ShoppingCart{
    constructor(products,productProxies){

        if (typeof products !== 'undefined'){
            this._products = products;
        }else{
            this._products = [];
        }
        if (typeof products !== 'undefined'){
            //console.log("hola");
            this._productProxies = productProxies;
        }else{
            this._productProxies = [];
        }
        //console.log(products);
    }

    get productProxies(){
        return this._productProxies;
    }
    set productProxies(value){
        throw new ShoppingCartException("No se puede modificar los proxies directamente, utiliza los metodos correspondientes");
    }

    get products(){
        return this._products;
    }
    set products(value){
        this._products = [];
        if (typeof  value === 'string') {
            value = JSON.parse(value);
        }
        //if (Array.isArray(value)){
        //this.products.push(Product.createFromObject(product));
        //}else{        //    this.products = value; //validar
        //}
    } 

    addItem(productUuid, amount){
        //console.log(productUuid);
        //console.log(amount);
        let index = this.productProxies.findIndex(element => element.productUuid === productUuid);
        //console.log(index);
        if (index >= 0){
            if (amount == 0){
                return;
            }else if (amount < 0){
                throw ShoppingCartException("El numero de objetos a agregar debe ser mayor a 0");
            } else {
             //   console.log("agrega");
                this.productProxies[index]['amount'] +=  amount;
            }
        }else {
           // console.log("nuevo");
            this.productProxies.push(new ProductProxy(productUuid,amount));
        }
        // ver si existe, si si, sumarlo sino agregarlo

    }

    updateItem(productUuid, newAmount){
        let index = this.productProxies.findIndex(element => element.productUuid === productUuid);
        if (index >= 0){
            if (newAmount == 0){
                removeItem(productUuid);
            } else if (newAmount < 0){
             throw ShoppingCartException("El numero de objetos a agregar debe ser mayor a 0");
            } else{
                this.productProxies[index]['amount'] = newAmount;
            }
        }
        // buscar si existe, o mandar error.
    }

    removeItem(productUuid){
        // si existe removerlo
        let index = this.productProxies.findIndex(element => element.productUuid === productUuid);
        if (index > 0) this.productProxies.splice(index,1);
        else throw ShoppingCartException("Estas eliminando algo que no existe");
    }

    calculateTotal(){
        let total = 0;
        //console.log(this.products);
            for (let obj of this.productProxies){
                let index = this.products.findIndex(element => element._uuid === obj['productUuid']);
                total += parseFloat(products[index]['pricePerUnit'],10) * parseFloat(obj['amount'],10)
            }
        return total;
    }
}