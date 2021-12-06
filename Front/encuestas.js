"use strict";

class EncuestaException {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

class Encuesta{
    constructor(nombre, correo, imageUrl, password) {
        this._uuid = utils.generateUUID();
        this.si = si;
        this.no = no;
        this.description = description;
        this.pregunta = pregunta;
        this.comentarios = comentarios;

    }

    get uuid(){
        return this._uuid;
    }

    set uuid(value) {
        throw new EncuestaException("Encuesta uuids are auto-generated.");
    }

    get si() {
        return this._si;
    }
    set si(value) {
        if(typeof value !== 'string' || value === '') {
            throw new EncuestaException("Encuesta si cannot be empty.");
        }
        this._si = value;
    }
    get no() {
        return this._no;
    }
    set no(value) {
        if(typeof value !== 'string' || value === '') {
            throw new EncuestaException("Encuesta no cannot be empty.");
        }
        this._no = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        if(typeof value !== 'string' || value === '') {
            throw new EncuestaException("Encuesta description cannot be empty.");
        }
        this._description = value;
    }
    get pregunta() {
        return this._pregunta;
    }
    set pregunta(value) {
        if(typeof value !== 'string' || value === '') {
            throw new EncuestaException("Encuesta pregunta cannot be empty.");
        }
        this._pregunta = value;
    }
    get comentarios() {
        return this._comentarios;
    }
    set comentarios(value) {
        if(typeof value !== 'string' || value === '') {
            throw new EncuestaException("Encuesta comentarios cannot be empty.");
        }
        this._comentarios = value;
    }

    static createFromJson(jsonValue) {
        let obj = JSON.parse(jsonValue);
        return User.createFromObject(obj);
    }
    static createFromObject(obj) {
        let newEncuesta = {};
        Object.assign(newEncuesta, obj);

        Encuesta.cleanObject(newEncuesta);

        let encuesta = new Product(obj['_si'],obj['_no'],obj['_description'],obj['_pregunta'],obj['_comentarios']);

        return encuesta; 
    }
    static cleanObject(obj) {
       const encuestaProperties = ['_uuid','si', 'no', 'description', 'pregunta', 'comentarios']
       for (let prop in obj){
            if (prop in encuestaProperties)
                continue 
            else delete obj[prop];
       }
    }  
}