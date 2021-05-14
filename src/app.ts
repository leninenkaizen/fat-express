import './settings.ts'
import Express, { Request, Response } from 'express';

const app = Express();

app.get('/', (req: Request, res: Response) => {
    console.log(req);
    res.json({"lenin" : "Name"});
})

/**
 * Starting application server
 */
const port = process.env.APP_PORT ?? 3000
app.listen(port, () => console.log(`Server started at localhost:${port}`));
