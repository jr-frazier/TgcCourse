"use strict";
var fs = require('fs');
var path = require('path');
var p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
var getProductsFromFile = function (cb) {
    fs.readFile(p, function (err, fileContent) {
        if (err) {
            cb([]);
        }
        else {
            cb(JSON.parse(fileContent));
        }
    });
};
module.exports = /** @class */ (function () {
    function Product(t) {
        this.title = t;
    }
    Product.prototype.save = function () {
        var _this = this;
        getProductsFromFile(function (products) {
            products.push(_this);
            fs.writeFile(p, JSON.stringify(products), function (err) {
                console.log(err);
            });
        });
    };
    Product.fetchAll = function (cb) {
        getProductsFromFile(cb);
    };
    return Product;
}());
