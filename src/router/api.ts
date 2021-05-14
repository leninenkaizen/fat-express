import { Router, Request, Response } from 'express';

const API = Router()

API.get('/', (req: Request, res: Response) => {
    res.json({user_ip: req.ip, queries : req.query});
})


export default API;
