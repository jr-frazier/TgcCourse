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
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json()); // for parsing application/json
// tslint:disable-next-line:no-var-requires
const adminRoutes = require('./routes/admin');
// tslint:disable-next-line:no-var-requires
const shopRoutes = require('./routes/shop');
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(error_1.get404);
app.listen(8080);
//# sourceMappingURL=app.js.map