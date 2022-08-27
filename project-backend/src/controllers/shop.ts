import Product from '../models/product'
import Cart from '../models/cart'
import { Response, NextFunction } from 'express';

export interface CustomResponse {
  send: (arg0: string) => void; 
  status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }}
}

export const getProducts = (req: any, res: { send: (arg0: any) => void; }, next: any) => {
  Product.fetchAll()
  .then(([rows]) => res.send(rows))
  .catch(err => console.log(err));
};

export const getCart = (req: any, res: { send: (arg0: Product[]) => void; } , next: any) => {
  Cart.fetchAll((products: Product[]) => {
    res.send(products);
  })
};

export const addToCart = (req: { query: {id: string}}, res: { send: (arg0: string) => void; }) => {
 
  if (req.query.id !== undefined) { 
    Cart.save(parseInt(req.query.id));
    res.send('Product added successfully');
  } else {
    res.send('Product not added');
  }
}

export const updateProductQuantity = (req: {body: {id: number, quantity: number}}, res: CustomResponse) => {
  const { id } = req.body;

  const quantity = req.body.quantity <= 0 ? 1 : req.body.quantity;

  if (id && quantity) {
    Cart.updateQuantity(id, quantity);
    res.status(200).send('Product quantity updated successfully');
  } else {
    res.status(400).send('Product quantity not updated');
  }
}

export const deleteItemFromCart = (req: { query: { id: string; }; }, res: CustomResponse ) => {
  
  Cart.deleteItem(parseInt(req.query.id, 10));
}

export const getCheckout = (req: any, res: { render: (arg0: string, arg1: { path: string; pageTitle: string; }) => void; }, next: any) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
