import Product from '../models/product'

export const postAddProduct = (req: { body: { title: string, price: number, description: string }; }, res: { send: (arg0: string) => void; }, next: any) => {
  const product = new Product(req.body.title, req.body.price, req.body.description);
  if (req.body.title && req.body.price && req.body.description) { 
    product.save();
    res.send('Product added successfully');
  } else {
    res.send('Please fill in all fields');
  }
};

export const getProducts = (req: any, res: { send: (arg0: any) => void; }, next: any) => {
  Product.fetchAll((products: Product[]) => {
    res.send(products);
  });
};
