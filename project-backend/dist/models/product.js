"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var p = path_1.default.join(path_1.default.dirname('.'), 'data', 'products.json');
var getProductsFromFile = function (cb) {
    fs_1.default.readFile(p, function (err, fileContent) {
        console.log("path", p);
        if (err) {
            console.log(err);
            cb([]);
        }
        else {
            // @ts-ignore
            console.log("File contents", JSON.parse(fileContent));
            cb(JSON.parse(fileContent.toString()));
        }
    });
};
var Product = /** @class */ (function () {
    function Product(t) {
        this.title = t;
    }
    Product.prototype.save = function () {
        var _this = this;
        getProductsFromFile(function (products) {
            products.push(_this);
            fs_1.default.writeFile(p, JSON.stringify(products), function (err) {
                console.log(err);
            });
        });
    };
    Product.fetchAll = function (cb) {
        getProductsFromFile(cb);
    };
    return Product;
}());
exports.default = Product;
;
