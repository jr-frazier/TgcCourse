import { Product } from '../models/product'
// import Cart from '../models/cart'
import { Request, Response, NextFunction } from 'express';


interface AddToCartRequest extends Request {
  query: {id: string}
}

export const getProducts = (req: any, res: Response) => {
  Product.findAll()
  .then((results) => res.status(200).send(results))
  .catch(err => res.status(401).send(err));
};

export const getProductsById = (req: any, res: Response, next: NextFunction) => {
  Product.findByPk(req.params.id)
  .then((result) => {
    res.status(200).send(result);
  })
  .catch(err => {
    res.status(401).send(err);
  });
}

export const getProductsById = (req: any, res: Response, next: NextFunction) => {
  Product.findByPk(req.params.id)
  .then((result) => {
    res.status(200).send(result);
  })
  .catch(err => {
    res.status(401).send(err);
  });
}
export const getCart = (req: any, res: Response) => {
  res.send(req.user.cart.getProducts());
};

// export const addToCart = (req: AddToCartRequest, res: Response) => {
 
//   if (req.query.id !== undefined) { 
//     Cart.save(parseInt(req.query.id));
//     res.send('Product added successfully');
//   } else {
//     res.send('Product not added');
//   }
// }

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
