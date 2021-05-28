import {IUserRepository} from "@src/database/repositories/interface/IUserRepository";
import { userRepo } from "@src/providers/DatabaseProvidor";
import {Request, Response} from "express";
import {Service} from "typedi";

export class AuthController {

    public async user(req: Request, res: Response) {
        const users = await userRepo().findByEmail('lenin@gmail.com')
        res.json({user: users})
    }

    public async register(req: Request, res: Response) {
        res.json('okay');
    }
}
