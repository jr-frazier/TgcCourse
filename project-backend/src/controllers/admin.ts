import Product from '../models/product'

export const getAddProduct = (req: any, res: { render: (arg0: string, arg1: { pageTitle: string; path: string; formsCSS: boolean; productCSS: boolean; activeAddProduct: boolean; }) => void; }, next: any) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

export const postAddProduct = (req: { body: { title: any; }; }, res: { send: (arg0: string) => void; }, next: any) => {
  const product = new Product(req.body.title);
  product.save();
  res.send('Success');
};

export const getProducts = (req: any, res: { send: (arg0: any) => void; }, next: any) => {
  Product.fetchAll((products: Product[]) => {
    res.send(products);
  });
};
