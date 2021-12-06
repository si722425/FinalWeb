"use strict";

const utils = require('./utils');

class ProductException {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

class Product{
    constructor(title, description, imageUrl, unit, stock, pricePerUnit, category) {
        this._uuid = utils.generateUUID();
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.unit = unit;
        this.stock = stock;
        this.pricePerUnit = pricePerUnit;
        this.category = category;
    }

    get uuid(){
        return this._uuid;
    }

    set uuid(value) {
        throw new ProductException("Product uuids are auto-generated.");
    }

    get title() {
        return this._title;
    }
    set title(value) {
        if(typeof value !== 'string' || value === '') {
            throw new ProductException("Product title cannot be empty.");
        }
        this._title = value;
    }
    get stock() {
        return this._stock;
    }
    set stock(value) {
        if(typeof value !== 'number' || value < 0) {
            throw new ProductException("Product stock must be a valid number .");
        }
        this._stock = value;
    }
    get pricePerUnit() {
        return this._pricePerUnit;
    }
    set pricePerUnit(value) {
        if(typeof value !== 'number' || value < 0) {
            throw new ProductException("Product pricePerUnit must be a valid number .");
        }
        this._pricePerUnit = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        if(typeof value !== 'string' || value === '') {
            throw new ProductException("Product description cannot be empty.");
        }
        this._description = value;
    }
    get category() {
        return this._category;
    }
    set category(value) {
        if(typeof value !== 'string' || value === '') {
            throw new ProductException("Product Category cannot be empty.");
        }
        this._category = value;
    }
    get imageUrl() {
        return this._imageUrl;
    }
    set imageUrl(value) {
        if(typeof value !== 'string' || value === '') {
            throw new ProductException("Product imageUrl cannot be empty.");
        }
        this._imageUrl = value;
    }
    get unit() {
        return this._unit;
    }
    set unit(value) {
        if(typeof value !== 'string' || value === '') {
            throw new ProductException("Product unit cannot be empty.");
        }
        this._unit = value;
    }

    static createFromJson(jsonValue) {
        let obj = JSON.parse(jsonValue);
        return Product.createFromObject(obj);
    }
    static createFromObject(obj) {
        let newProduct = {};
        Object.assign(newProduct, obj);

        Product.cleanObject(newProduct);

        let product = new Product(obj['_title'],obj['_description'],obj['_imageUrl'],obj['_unit'],obj['_stock'],obj['_pricePerUnit'],obj['_category']);

        return product; 
    }
    static cleanObject(obj) {
       const productProperties = ['_uuid','title', 'description', 'imageUrl', 'unit', 'stock', 'pricePerUnit', 'Category']
       for (let prop in obj){
            if (prop in productProperties)
                continue 
            else delete obj[prop];
       }
    }  
}

module.exports = Product;