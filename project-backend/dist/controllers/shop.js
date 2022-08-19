"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCheckout = exports.deleteItemFromCart = exports.updateProductQuantity = exports.addToCart = exports.getCart = exports.getProducts = void 0;
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
    if (req.query.id !== undefined) {
        cart_1.default.save(parseInt(req.query.id));
        res.send('Product added successfully');
    }
    else {
        res.send('Product not added');
    }
};
exports.addToCart = addToCart;
const updateProductQuantity = (req, res) => {
    const { id } = req.body;
    const quantity = req.body.quantity <= 0 ? 1 : req.body.quantity;
    if (id && quantity) {
        cart_1.default.updateQuantity(id, quantity);
        res.status(200).send('Product quantity updated successfully');
    }
    else {
        res.status(400).send('Product quantity not updated');
    }
};
exports.updateProductQuantity = updateProductQuantity;
const deleteItemFromCart = (req, res) => {
    const itemRemoved = cart_1.default.deleteItem(parseInt(req.query.id, 10));
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