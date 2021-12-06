"use strict";

class UserException {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

class User{
    constructor(nombre, correo, imageUrl, password) {
        this._uuid = utils.generateUUID();
        this.nombre = nombre;
        this.correo = correo;
        this.imageUrl = imageUrl;
        this.password = password;

    }

    get uuid(){
        return this._uuid;
    }

    set uuid(value) {
        throw new UserException("User uuids are auto-generated.");
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        if(typeof value !== 'string' || value === '') {
            throw new UserException("User nombre cannot be empty.");
        }
        this._nombre = value;
    }
    get correo() {
        return this._correo;
    }
    set correo(value) {
        if(typeof value !== 'string' || value === '') {
            throw new UserException("User correo cannot be empty.");
        }
        this._correo = value;
    }
    get imageUrl() {
        return this._imageUrl;
    }
    set imageUrl(value) {
        if(typeof value !== 'string' || value === '') {
            throw new UserException("User imageUrl cannot be empty.");
        }
        this._imageUrl = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        if(typeof value !== 'string' || value === '') {
            throw new UserException("User password cannot be empty.");
        }
        this._password = value;
    }

    static createFromJson(jsonValue) {
        let obj = JSON.parse(jsonValue);
        return User.createFromObject(obj);
    }
    static createFromObject(obj) {
        let newUser = {};
        Object.assign(newUser, obj);

        User.cleanObject(newUser);

        let user = new Product(obj['_nombre'],obj['_correo'],obj['_imageUrl'],obj['_password'],obj['_posts']);

        return user; 
    }
    static cleanObject(obj) {
       const userProperties = ['_uuid','nombre', 'correo', 'imageUrl', 'password','posts']
       for (let prop in obj){
            if (prop in userProperties)
                continue 
            else delete obj[prop];
       }
    }  
}