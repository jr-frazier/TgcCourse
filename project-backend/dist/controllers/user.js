"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.addUser = void 0;
const user_1 = require("../models/user");
const addUser = (req, res) => {
    const user = req.body;
    if (!user.first_name) {
        res.status(406).send("please provide a first name");
    }
    else if (!user.last_name) {
        res.status(406).send("please provide a last name");
    }
    else if (!user.email) {
        res.status(406).send("pleas provide a email address");
    }
    else {
        user_1.User.create(user)
            .then((user) => {
            // @ts-ignore
            user.createCart();
            res.status(201).send(user);
        })
            .catch((err) => console.log(err));
    }
};
exports.addUser = addUser;
const getUserById = (req, res) => {
    const id = req.params.id;
    user_1.User.findByPk(id)
        .then((result) => {
        res.status(200).send(result);
    })
        .catch((err) => console.log(err));
};
exports.getUserById = getUserById;
//# sourceMappingURL=user.js.map