import { Router, Request, Response } from 'express';
import validationExample from "@src/validator/validations/validationExample";

const api = Router()

api.get('/', (req: Request, res: Response) => {
    res.json({user_ip: req.ip, queries : req.query});
});

api.post('/', validationExample, (req: Request, res: Response) => {
    res.json(req.body);
});

export default api;
