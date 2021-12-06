"use strict";

class CategoriasException {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

class Categorias{
    constructor(nombre, correo, imageUrl, password) {
        this._uuid = utils.generateUUID();
        this.nombre = nombre;
        this.creador = creador;
        this.uuidCreador = uuidCreador;
        this.description = description;

    }

    get uuid(){
        return this._uuid;
    }

    set uuid(value) {
        throw new CategoriasException("Categorias uuids are auto-generated.");
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        if(typeof value !== 'string' || value === '') {
            throw new CategoriasException("Categorias nombre cannot be empty.");
        }
        this._nombre = value;
    }
    get creador() {
        return this._creador;
    }
    set creador(value) {
        if(typeof value !== 'string' || value === '') {
            throw new CategoriasException("Categorias creador cannot be empty.");
        }
        this._creador = value;
    }
    get uuidCreador() {
        return this._uuidCreador;
    }
    set uuidCreador(value) {
        if(typeof value !== 'string' || value === '') {
            throw new CategoriasException("Categorias uuidCreador cannot be empty.");
        }
        this._uuidCreador = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        if(typeof value !== 'string' || value === '') {
            throw new CategoriasException("Categorias description cannot be empty.");
        }
        this._description = value;
    }

    static createFromJson(jsonValue) {
        let obj = JSON.parse(jsonValue);
        return User.createFromObject(obj);
    }
    static createFromObject(obj) {
        let newEncuesta = {};
        Object.assign(newEncuesta, obj);

        categorias.cleanObject(newEncuesta);

        let categorias = new Product(obj['_nombre'],obj['_creador'],obj['_uuidcreador'],obj['_description']);

        return Categorias; 
    }
    static cleanObject(obj) {
       const categoriaProperties = ['_uuid','nombre', 'creador', 'uuidcreador', 'description']
       for (let prop in obj){
            if (prop in categoriaProperties)
                continue 
            else delete obj[prop];
       }
    }  
}
