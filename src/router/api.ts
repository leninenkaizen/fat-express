import { Router, Request, Response } from 'express';
import validationExample from "@src/validator/validations/validationExample";
import {getUserRepository} from "@src/providers/DatabaseProvidor";

const api = Router()

// const userRepository = getUserRepository();

api.get('/', (req: Request, res: Response) => {
    res.json({user_ip: req.ip, queries : req.query});
});

api.post('/', validationExample, async (req: Request, res: Response) => {
    const user = getUserRepository().create({email: 'lenin@gmail.com'})
    res.json({user: user});
});

export default api;
