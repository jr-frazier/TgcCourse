"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = __importDefault(require("../models/product"));
exports.postAddProduct = function (req, next) {
    var product = new product_1.default(req.body.title);
    console.log("REQUEST BODY: ", req.body);
    product.save();
};
exports.getProducts = function (req, res, next) {
    product_1.default.fetchAll(function (products) {
        res.send(products);
    });
};
