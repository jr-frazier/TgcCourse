const path = require('path');

const express = require('express');

const adminController = require('../src/controllers/admin');

const router = express.Router();

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
