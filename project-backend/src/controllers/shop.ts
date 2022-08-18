import Product from '../models/product'
import Cart from '../models/cart'
import { Response, NextFunction } from 'express';

export interface DeleteResponse {
  send: (arg0: string) => void; 
  status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }}
}

export const getProducts = (req: any, res: { send: (arg0: any) => void; }, next: any) => {
  Product.fetchAll((products: Product[]) => {
    res.send(products);
  });
};

export const getCart = (req: any, res: { send: (arg0: Product[]) => void; } , next: any) => {
  Cart.fetchAll((products: Product[]) => {
    res.send(products);
  })
};

export const addToCart = (req: { body: Product}, res: { send: (arg0: string) => void; }) => {

  if (req.body.title && req.body.price && req.body.description && req.body.id)  { 
    const cart = new Cart(req.body.id, req.body.title, req.body.price, req.body.description);
    cart.save();
    res.send('Product added successfully');
  } else {
    res.send('Product not added');
  }
}

export const deleteItemFromCart = (req: { query: { id: string; }; }, res: DeleteResponse ) => {
  console.log('params', req.query) 
  const itemRemoved = Cart.deleteItem(parseInt(req.query.id, 10));
  console.log("IT REMOVED", itemRemoved)
  if (itemRemoved) {
    res.status(200).send('Item removed successfully');
  } else {
    res.status(500).send('Error removing item');
  }
}

export const getCheckout = (req: any, res: { render: (arg0: string, arg1: { path: string; pageTitle: string; }) => void; }, next: any) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
