"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const error_1 = require("./controllers/error");
const database_1 = require("./util/database");
const product_1 = require("./models/product");
const user_1 = require("./models/user");
const cart_1 = require("./models/cart");
const cartItem_1 = require("./models/cartItem");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json()); // for parsing application/json
// app.use((req, res, next) => {
//     User
// })
// tslint:disable-next-line:no-var-requires
const adminRoutes = require('./routes/admin');
// tslint:disable-next-line:no-var-requires
const userRoutes = require('./routes/user');
// tslint:disable-next-line:no-var-requires
const shopRoutes = require('./routes/shop');
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use('/user', userRoutes),
    app.use(shopRoutes);
app.use(error_1.get404);
// This bit of code sets up the relation between the two models. Saying that a Product belongs to a User.
// Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE' });
// User.has(Product)
user_1.User.hasOne(cart_1.Cart);
cart_1.Cart.belongsTo(user_1.User);
cart_1.Cart.hasMany(cartItem_1.CartItem);
product_1.Product.belongsToMany(cart_1.Cart, { through: cartItem_1.CartItem });
// use {force: true} to force and update to your tables in the database
database_1.sequelize.sync()
    .then(() => {
    return user_1.User.findByPk(1);
})
    .then((user) => {
    const newUser = { first_name: 'JR', last_name: 'Frazier', email: 'jrfrazier@gmail.com' };
    if (!user) {
        return user_1.User.create(newUser);
    }
    return user;
})
    .then((result) => {
    console.log("connected to the database");
    app.listen(8080);
})
    .catch((err) => {
    console.log(err);
});
// app.listen(8080);
//# sourceMappingURL=app.js.map