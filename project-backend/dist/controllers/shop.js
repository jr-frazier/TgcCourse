"use strict";
var Product = require('../models/product');
exports.getProducts = function (req, res, next) {
    Product.fetchAll(function (products) {
        res.send(products);
    });
};
// exports.getIndex = (req, res, next) => {
//   Product.fetchAll(products => {
//     res.render('shop/index', {
//       prods: products,
//       pageTitle: 'Shop',
//       path: '/'
//     });
//   });
// };
exports.getCart = function (req, res, next) {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    });
};
exports.getCheckout = function (req, res, next) {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};
