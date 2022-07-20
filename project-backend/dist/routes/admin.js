"use strict";
var path = require('path');
var express = require('express');
var adminController = require('../controllers/admin');
var router = express.Router();
// /admin/products => GET
router.get('/products', adminController.getProducts);
// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);
module.exports = router;
