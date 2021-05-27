import {IUserRepository} from "@src/database/repositories/interface/IUserRepository";
import {getUserRepository} from "@src/providers/DatabaseProvidor";
import {Request, Response} from "express";

export class AuthController {
    private userRepo: IUserRepository;

    constructor() {
    }
    public async index(req: Request, res: Response) {
        const users = await (await this.getUserRepo()).findByEmail('lenin@gmail.com')
    }

    private async getUserRepo() {
        if (!this.userRepo) {
            this.userRepo = await getUserRepository();
        }
        return this.userRepo;
    }
}
