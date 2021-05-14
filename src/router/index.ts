import {Express, Router} from "express";
import apiRouter from '@src/router/api'

export const initializeRouter = (app: Express) => {
    const router = Router();

    /**
     * adding api routes
     */
    router.use('/api', apiRouter)

    app.use(router);
}
