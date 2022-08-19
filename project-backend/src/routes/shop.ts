

import express from 'express'

import { addToCart, getCart, getCheckout, getProducts, deleteItemFromCart, CustomResponse, updateProductQuantity } from '../controllers/shop'

const router = express.Router();

router.get('/products', getProducts);

router.get('/cart', getCart);

router.post('/cart/add-product', addToCart);

router.get('/checkout', getCheckout);

router.put('/cart/update-product', updateProductQuantity as any);

router.delete('/cart/delete-product', deleteItemFromCart as any);

module.exports = router;
