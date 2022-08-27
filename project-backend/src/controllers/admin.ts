import Product from "../models/product";
import { Request, Response } from "express";

export const postAddProduct = (req: Request, res: Response) => {
  const product = new Product(
    req.body.title,
    req.body.price,
    req.body.description,
    req.body.imageUrl
  );
  const productValidation = (product: Product) => {
    if (
      !product.title ||
      !product.price ||
      !product.description ||
      !product.imageUrl
    ) {
      return false;
    } else {
      return true;
    }
  };

  if (!productValidation(product)) {
    return res.status(400).send("Please provide all the fields");
  }
  product
    .save()
    .then(() => {
      res.status(201).send("Product saved successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("Product not saved");
    });
};

export const getProducts = (
  req: any,
  res: { send: (arg0: any) => void },
  next: any
) => {
  Product.fetchAll()
    .then(([rows]) => res.send(rows))
    .catch((err) => console.log(err));
};
