"use strict";

const utils = require('./utils');

class CategoriasException {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

class Categorias{
    constructor(nombre, creador, uuidCreador, description,posts) {
        this._uuid = utils.generateUUID();
        this.nombre = nombre;
        this.creador = creador;
        this.uuidCreador = uuidCreador;
        this.description = description;
        this.posts = posts;

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

    get posts() {
        return this._posts;
    }
    set posts(value) {
        if(typeof value !== 'string' || value === '') {
            throw new CategoriasException("Categorias posts cannot be empty.");
        }
        this._posts = value;
    }

    static createFromJson(jsonValue) {
        let obj = JSON.parse(jsonValue);
        return Categorias.createFromObject(obj);
    }
    static createFromObject(obj) {
        let newEncuesta = {};
        Object.assign(newEncuesta, obj);

        Categorias.cleanObject(newEncuesta);

        let categorias = new Categorias(obj['_nombre'],obj['_creador'],obj['_uuidCreador'],obj['_description'],obj['_posts']);

        return categorias; 
    }
    static cleanObject(obj) {
       const categoriaProperties = ['_uuid','nombre', 'creador', 'uuidCreador', 'description','posts']
       for (let prop in obj){
            if (prop in categoriaProperties)
                continue 
            else delete obj[prop];
       }
    }  
}

module.exports = Categorias;