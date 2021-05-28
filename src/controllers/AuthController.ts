import {IUserRepository} from "@src/database/repositories/interface/IUserRepository";
import { userRepo } from "@src/providers/DatabaseProvidor";
import {Request, Response} from "express";
import {Service} from "typedi";
import {register} from "@src/services/authService";
let num = 0
export class AuthController {

    public async user(req: Request, res: Response) {
        console.log('req: ' + num)
        num++
        const users = await userRepo().findByEmail('lenin@gmail.com')
        res.json({user: users})
    }

    public async register(req: Request, res: Response) {
        try {
            const user = await register(req.body)
            res.json({user: user});
        } catch ( error) {
            res.status(500).json({errors: [error]});
        }
    }
}
