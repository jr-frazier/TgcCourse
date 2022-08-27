"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = exports.postAddProduct = void 0;
const product_1 = __importDefault(require("../models/product"));
const postAddProduct = (req, res) => {
    const product = new product_1.default(req.body.title, req.body.price, req.body.description, req.body.imageUrl);
    const productValidation = (product) => {
        if (!product.title || !product.price || !product.description || !product.imageUrl) {
            return false;
        }
        else {
            return true;
        }
    };
    if (!productValidation(product)) {
        return res.status(400).send('Please provide all the fields');
    }
    product
        .save()
        .then(() => {
        res.status(201).send('Product saved successfully');
    })
        .catch((err) => {
        console.log(err);
        res.status(400).send('Product not saved');
    });
};
exports.postAddProduct = postAddProduct;
const getProducts = (req, res, next) => {
    product_1.default.fetchAll()
        .then(([rows]) => res.send(rows))
        .catch(err => console.log(err));
};
exports.getProducts = getProducts;
//# sourceMappingURL=admin.js.map