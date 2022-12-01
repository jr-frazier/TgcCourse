import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {get404} from './controllers/error'
import { sequelize } from './util/database';
import { Product } from './models/product'
import { User, UserType } from './models/user';
import { Cart } from './models/cart';
import { CartItem } from './models/cartItem';


const app = express();

app.use(cors())

app.use(bodyParser.json());// for parsing application/json
// app.use((req, res, next) => {
//     User
// })
// tslint:disable-next-line:no-var-requires
const adminRoutes = require('./routes/admin');
// tslint:disable-next-line:no-var-requires
const userRoutes = require('./routes/user')
// tslint:disable-next-line:no-var-requires
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Retreives User
app.use((req, res, next) => {
    User.findByPk(1)
    .then((user) => {
        // @ts-ignore
        req.user = user;
        next();
    })
    .catch(err => console.log(err))
})

app.use('/admin', adminRoutes);
app.use('/user', userRoutes), 
app.use(shopRoutes);

app.use(get404);

// This bit of code sets up the relation between the two models. Saying that a Product belongs to a User.
// Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE' });
// User.has(Product)
User.hasOne(Cart)
Cart.belongsTo(User);
Cart.hasMany(CartItem)
Product.belongsToMany(Cart, {through: CartItem})


// use {force: true} to force and update to your tables in the database
sequelize.sync()
.then(() => {
    return User.findByPk(1)
})
.then((user) => {
    const newUser: UserType = {first_name: 'JR', last_name: 'Frazier', email: 'jrfrazier@gmail.com'}

    if (!user) {
        return User.create(newUser)
    }

    return user
})
.then((result) => {
    console.log("connected to the database");
    app.listen(8080);
})

.catch((err) => {
    console.log(err)    
})


// app.listen(8080);
