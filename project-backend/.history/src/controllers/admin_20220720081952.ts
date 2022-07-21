const Product = require('../models/product');



exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  console.log("REQUEST BODY: ", req.body);
  product.save();
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.send(products);
  });
};
