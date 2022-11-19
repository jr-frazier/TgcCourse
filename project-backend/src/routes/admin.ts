import path from 'path'

import express from 'express'

import { getProducts, postAddProduct, editProduct, removeProduct }  from '../controllers/admin'

const router = express.Router();

// /admin/products => GET
router.get('/products', getProducts);

// /admin/add-product => POST
router.post('/add-product', postAddProduct);

router.put('/edit-product', editProduct);

router.delete('/delete/:id', removeProduct);

module.exports = router;
