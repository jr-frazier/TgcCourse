"use strict";
var Product = require('../models/product');
exports.postAddProduct = function (req, res, next) {
    var product = new Product(req.body.title);
    console.log("REQUEST BODY: ", req.body);
    product.save();
};
exports.getProducts = function (req, res, next) {
    Product.fetchAll(function (products) {
        res.send(products);
    });
};
