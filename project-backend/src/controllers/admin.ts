import type { ProductType } from "../models/product";
import { Product } from "../models/product";
import { Request, Response } from "express";

// TODO: I will possibly use this later for validation
// const productValidation = (product: ProductType) => {
//     if (
//       !product.title ||
//       !product.price ||
//       !product.description ||
//       !product.imageUrl
//     ) {
//       return false;
//     } else {
//       return true;
//     }
//   };

export const postAddProduct = (req: Request, res: Response) => {
  console.log(req.body);
  const product = Product.create({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    imageUrl: req.body.imageUrl
  }
  ).then((result) => {
    console.log(result);
    res.status(201).send("Product saved successfully");
  })
  .catch((err) => {
    console.log(err);
    res.status(400).send(err.message);
  });
};

export const getProducts = ( req: Request, res: Response, next: any
) => {
    Product.findAll().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(401).send(err);
    })
}

export const editProduct = (req: Request, res: Response) => {
  const productId = req.body.id
  const productBody: ProductType = {
      title: req.body.title,
      price: req.body.price,
      imageUrl: req.body.imageUrl,
      description: req.body.description
  }
  if (!productId) {
    res.status(406).send("No ID was provided")
  } else {
    Product.findByPk(productId)
    .then((product) => {
      return product.update(productBody)    
    })
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((err) => {
      console.log(err)
    })
  }

}

export const removeProduct = (req: Request, res: Response) => {
    const productId = req.params.id

    Product.findByPk(productId)
    .then((product) => {
      return product.destroy()
    })
    .then((result) => {
      res.status(200).send("Product removed")
    })
    .catch((err) => console.log(err))
}