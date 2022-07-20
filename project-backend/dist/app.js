"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var bodyParser = require('body-parser');
var errorController = require('./controllers/error');
var app = (0, express_1.default)();
var adminRoutes = require('./routes/admin');
var shopRoutes = require('./routes/shop');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);
app.listen(8080);
