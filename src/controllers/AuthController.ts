import {IUserRepository} from "@src/database/repositories/interface/IUserRepository";
import { userRepo } from "@src/providers/DatabaseProvidor";
import {Request, Response} from "express";
import {Service} from "typedi";
let num = 0
export class AuthController {

    public async user(req: Request, res: Response) {
        console.log('req: ' + num)
        num++
        const users = await userRepo().findByEmail('lenin@gmail.com')
        res.json({user: users})
    }

    public async register(req: Request, res: Response) {
        res.json('okay');
    }
}
