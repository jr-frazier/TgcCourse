"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shop_1 = require("../controllers/shop");
const router = express_1.default.Router();
router.get('/products', shop_1.getProducts);
router.get('/cart', shop_1.getCart);
router.post('/cart/add-product', shop_1.addToCart);
router.get('/checkout', shop_1.getCheckout);
router.delete('/cart/delete-product', shop_1.deleteItemFromCart);
module.exports = router;
//# sourceMappingURL=shop.js.map