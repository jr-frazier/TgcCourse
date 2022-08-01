import path from 'path'

import express from 'express'

import { getCart, getCheckout, getProducts } from '../controllers/shop'

const router = express.Router();

router.get('/products', getProducts);

router.get('/cart', getCart);

router.get('/checkout', getCheckout);

module.exports = router;
