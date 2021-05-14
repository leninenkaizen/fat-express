import './settings.ts'
import Express from 'express';
import {initializeRouter} from "@src/router";

const app = Express();

/**
 * initializing router
 */
initializeRouter(app);


/**
 * Starting application server
 */
const port = process.env.APP_PORT ?? 3000
app.listen(port, () => console.log(`Server started at localhost:${port}`));
