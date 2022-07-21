import Product from "../models/product";

exports.getProducts = (req: any, res: { send: (arg0: any) => void; }, next: any) => {
  Product.fetchAll((products: Product[]) => {
    console.log(products);
    res.send(products);
  });
};

// exports.getIndex = (req, res, next) => {
//   Product.fetchAll(products => {
//     res.render('shop/index', {
//       prods: products,
//       pageTitle: 'Shop',
//       path: '/'
//     });
//   });
// };

exports.getCart = (req: any, res: { render: (arg0: string, arg1: { path: string; pageTitle: string; }) => void; }, next: any) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.getCheckout = (req: any, res: { render: (arg0: string, arg1: { path: string; pageTitle: string; }) => void; }, next: any) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
