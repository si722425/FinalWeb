"use strict";

const utils = require('./utils');

class EncuestaException {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

class Encuesta{
    constructor(si, no, description, pregunta,comentarios,uuidenc,txtv1,txtv2) {
        this._uuid = utils.generateUUID();
        this.si = si;
        this.no = no;
        this.description = description;
        this.pregunta = pregunta;
        this.comentarios = comentarios;
        this.uuidenc = uuidenc;
        this.txtv1 = txtv1;
        this.txtv2 = txtv2;

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
    get uuidenc() {
        return this._uuidenc;
    }
    set uuidenc(value) {
        if(typeof value !== 'string' || value === '') {
            throw new EncuestaException("Encuesta uuidenc cannot be empty.");
        }
        this._uuidenc = value;
    }
    get txtv1() {
        return this._txtv1;
    }
    set txtv1(value) {
        if(typeof value !== 'string' || value === '') {
            throw new EncuestaException("Encuesta txtv1 cannot be empty.");
        }
        this._txtv1 = value;
    }
    get txtv2() {
        return this._txtv2;
    }
    set txtv2(value) {
        if(typeof value !== 'string' || value === '') {
            throw new EncuestaException("Encuesta txtv2 cannot be empty.");
        }
        this._txtv2 = value;
    }

    static createFromJson(jsonValue) {
        let obj = JSON.parse(jsonValue);
        return Encuesta.createFromObject(obj);
    }
    static createFromObject(obj) {
        let newEncuesta = {};
        Object.assign(newEncuesta, obj);

        Encuesta.cleanObject(newEncuesta);

        let encuesta = new Encuesta(obj['_si'],obj['_no'],obj['_description'],obj['_pregunta'],obj['_comentarios'],obj['_uuidenc'],obj['_txtv1'],obj['_txtv2']);

        return encuesta; 
    }
    static cleanObject(obj) {
       const encuestaProperties = ['_uuid','si', 'no', 'description', 'pregunta', 'comentarios','uuidenc','txtv1','txtv2']
       for (let prop in obj){
            if (prop in encuestaProperties)
                continue 
            else delete obj[prop];
       }
    }  
}

module.exports = Encuesta;