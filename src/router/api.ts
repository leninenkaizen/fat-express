import { Router, Request, Response } from 'express';
import validationExample from "@src/validator/validations/validationExample";
import {getUserRepository} from "@src/providers/DatabaseProvidor";

const api = Router()


api.get('/', async (req: Request, res: Response) => {
    const userRepository = getUserRepository();

    const u = await userRepository.findByEmail('lenin@gmail.com')
    res.json({user_ip: req.ip, user : u});
});

api.post('/', validationExample, async (req: Request, res: Response) => {
    const userRepository = getUserRepository();

    const user = await userRepository.create({email: 'lenin@gmail.com'})
    res.json({user: user});
});

export default api;
