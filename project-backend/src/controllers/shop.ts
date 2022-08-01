import Product from '../models/product'

export const getProducts = (req: any, res: { send: (arg0: any) => void; }, next: any) => {
  Product.fetchAll((products: Product[]) => {
    res.send(products);
  });
};

export const getCart = (req: any, res: { render: (arg0: string, arg1: { path: string; pageTitle: string; }) => void; }, next: any) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

export const getCheckout = (req: any, res: { render: (arg0: string, arg1: { path: string; pageTitle: string; }) => void; }, next: any) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
