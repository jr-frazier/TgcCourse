import path from 'path'

import express from 'express'

import { getProducts, postAddProduct }  from '../controllers/admin'

const router = express.Router();

// /admin/products => GET
router.get('/products', getProducts);

// /admin/add-product => POST
router.post('/add-product', postAddProduct);

module.exports = router;
