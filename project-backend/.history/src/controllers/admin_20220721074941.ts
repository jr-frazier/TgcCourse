import Product  from '../models/product'



exports.postAddProduct = (req: { body: { title: any; }; }, next: any) => {
  const product = new Product(req.body.title);
  console.log("REQUEST BODY: ", req.body);
  product.save();
};

exports.getProducts = (req: any, res: { send: (arg0: any) => void; }, next: any) => {
  Product.fetchAll((products: any) => {
    res.send(products);
  });
};
