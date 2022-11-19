"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProduct = exports.editProduct = exports.getProducts = exports.postAddProduct = void 0;
const product_1 = require("../models/product");
// TODO: I will possibly use this later for validation
// const productValidation = (product: ProductType) => {
//     if (
//       !product.title ||
//       !product.price ||
//       !product.description ||
//       !product.imageUrl
//     ) {
//       return false;
//     } else {
//       return true;
//     }
//   };
const postAddProduct = (req, res) => {
    console.log(req.body);
    const product = product_1.Product.create({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    }).then((result) => {
        console.log(result);
        res.status(201).send("Product saved successfully");
    })
        .catch((err) => {
        console.log(err);
        res.status(400).send(err.message);
    });
};
exports.postAddProduct = postAddProduct;
const getProducts = (req, res, next) => {
    product_1.Product.findAll().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(401).send(err);
    });
};
exports.getProducts = getProducts;
const editProduct = (req, res) => {
    const productId = req.body.id;
    const productBody = {
        title: req.body.title,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        description: req.body.description
    };
    if (!productId) {
        res.status(406).send("No ID was provided");
    }
    else {
        product_1.Product.findByPk(productId)
            .then((product) => {
            return product.update(productBody);
        })
            .then((result) => {
            res.status(200).send(result);
        })
            .catch((err) => {
            console.log(err);
        });
    }
};
exports.editProduct = editProduct;
const removeProduct = (req, res) => {
    const productId = req.params.id;
    product_1.Product.findByPk(productId)
        .then((product) => {
        return product.destroy();
    })
        .then((result) => {
        res.status(200).send("Product removed");
    })
        .catch((err) => console.log(err));
};
exports.removeProduct = removeProduct;
//# sourceMappingURL=admin.js.map