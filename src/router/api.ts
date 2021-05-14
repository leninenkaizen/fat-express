import { Router, Request, Response } from 'express';

const router = Router()

router.get('/', (req: Request, res: Response) => {
    console.log(`request IP: ${req.ip}`);
    res.json({"lenin" : "Name"});
})

export default router;
