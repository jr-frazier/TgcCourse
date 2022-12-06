

import express from 'express'

import { getProducts, getProductsById, getCart, addToCart } from '../controllers/shop'

const router = express.Router();

router.get('/products', getProducts);

router.get('/products/:id', getProductsById);

router.get('/cart', getCart);

router.post('/cart/add-product', addToCart);

// router.get('/checkout', getCheckout);

// router.put('/cart/update-product', updateProductQuantity);

// router.delete('/cart/delete-product', deleteItemFromCart);

module.exports = router;
