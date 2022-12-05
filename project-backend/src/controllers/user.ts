import { User, UserType } from '../models/user'
import { Request, Response, NextFunction } from 'express';
import { Model } from 'sequelize';
import { Cart } from '../models/cart';

interface UserModel extends Model<UserType> {
    createCart: () => Promise<typeof Cart>;
}

export const addUser = (req: Request, res: Response) => {
    const user: UserType = req.body

   
    if (!user.first_name) {
        res.status(406).send("please provide a first name")
    } else if (!user.last_name) {
        res.status(406).send("please provide a last name")    
    } else if (!user.email) {
        res.status(406).send("pleas provide a email address")
    } else {
        User.create(user)
        .then((user: UserModel) => {
            // user.createCart()
            res.status(201).send(user)
        })
        .catch((err) => console.log(err))
    }
}

export const getUserById = (req: Request, res: Response) => {
    const id = req.params.id
    User.findByPk(id)
    .then ((result) => {
        res.status(200).send(result)
    })
    .catch((err) => console.log(err))
}

