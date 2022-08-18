"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCheckout = exports.deleteItemFromCart = exports.addToCart = exports.getCart = exports.getProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
const cart_1 = __importDefault(require("../models/cart"));
const getProducts = (req, res, next) => {
    product_1.default.fetchAll((products) => {
        res.send(products);
    });
};
exports.getProducts = getProducts;
const getCart = (req, res, next) => {
    cart_1.default.fetchAll((products) => {
        res.send(products);
    });
};
exports.getCart = getCart;
const addToCart = (req, res) => {
    if (req.body.title && req.body.price && req.body.description && req.body.id) {
        const cart = new cart_1.default(req.body.id, req.body.title, req.body.price, req.body.description);
        cart.save();
        res.send('Product added successfully');
    }
    else {
        res.send('Product not added');
    }
};
exports.addToCart = addToCart;
const deleteItemFromCart = (req, res) => {
    console.log('params', req.query);
    const itemRemoved = cart_1.default.deleteItem(parseInt(req.query.id, 10));
    console.log("IT REMOVED", itemRemoved);
    if (itemRemoved) {
        res.status(200).send('Item removed successfully');
    }
    else {
        res.status(500).send('Error removing item');
    }
};
exports.deleteItemFromCart = deleteItemFromCart;
const getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};
exports.getCheckout = getCheckout;
//# sourceMappingURL=shop.js.map