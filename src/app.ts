import './settings';
import "reflect-metadata";
import Express from 'express';
import BodyParser from 'body-parser';
import {initializeRouter} from "@src/router";
import {createConnection} from "typeorm";

createConnection().then(async (con) => {
    const app = Express();

    /**
     * registering body-parser (urlencoded and json)
     */
    app.use(BodyParser.urlencoded({extended: false}), BodyParser.json());


    /**
     * initializing router
     */
    initializeRouter(app);


    /**
     * Starting application server
     */
    const port = process.env.APP_PORT ?? 3000
    app.listen(port, () => console.log(`Server started at localhost:${port}`));
})
