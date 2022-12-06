"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCart = exports.getCart = exports.getProductsById = exports.getProducts = void 0;
const product_1 = require("../models/product");
const getProducts = (req, res) => {
    product_1.Product.findAll()
        .then((results) => res.status(200).send(results))
        .catch(err => res.status(401).send(err));
};
exports.getProducts = getProducts;
// export const getProductsById = (req: any, res: Response, next: NextFunction) => {
//   Product.findByPk(req.params.id)
//   .then((result) => {
//     res.status(200).send(result);
//   })
//   .catch(err => {
//     res.status(401).send(err);
//   });
// }
const getProductsById = (req, res, next) => {
    product_1.Product.findByPk(req.params.id)
        .then((result) => {
        res.status(200).send(result);
    })
        .catch(err => {
        res.status(401).send(err);
    });
};
exports.getProductsById = getProductsById;
const getCart = (req, res) => {
    console.log("User", req.user);
    // req.user.getCart()
    // .then(((cart: any) => {
    //   return cart.getProducts()
    //   .then((products: any) => {
    //     res.status(200).send(products)
    //   })
    // }))
    // .catch((err: any) => res.status(401).send(err));
};
exports.getCart = getCart;
// 
const addToCart = (req, res) => {
    console.log(req.user);
    // Cart.findByPk(req.body.cartId)
    // .then((cart: any) => {
    //   cart.addProduct(req.body.productId, {through: {quantity: 1}})
    // })
    // .catch((err: any) => res.status(401).send(err));
};
exports.addToCart = addToCart;
// export const updateProductQuantity = (req: {body: {id: number, quantity: number}}, res: Response) => {
//   const { id } = req.body;
//   const quantity = req.body.quantity <= 0 ? 1 : req.body.quantity;
//   if (id && quantity) {
//     Cart.updateQuantity(id, quantity);
//     res.status(200).send('Product quantity updated successfully');
//   } else {
//     res.status(400).send('Product quantity not updated');
//   }
// }
// export const deleteItemFromCart = (req: { query: { id: string; }; }, res: Response ) => {
//   Cart.deleteItem(parseInt(req.query.id, 10));
// }
// export const getCheckout = (req: any, res: { render: (arg0: string, arg1: { path: string; pageTitle: string; }) => void; }, next: any) => {
//   res.render('shop/checkout', {
//     path: '/checkout',
//     pageTitle: 'Checkout'
//   });
// };
//# sourceMappingURL=shop.js.map