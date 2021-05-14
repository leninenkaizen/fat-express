import Express, { Request, Response } from 'express';

const app = Express();

app.get('/', (req: Request, res: Response) => {
    console.log(req);
    res.json({"lenin" : "Name"});
})

app.listen(8000, () => console.log("Server started at localhost:3000"));
