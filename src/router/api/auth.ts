import { Router } from 'express';
import {AuthController} from "@src/controllers/AuthController";
import  registerValidation from "@src/validator/validations/registrationValidation";

const auth = Router()

const auhController = new AuthController();

auth.get('/auth/user', auhController.user);

auth.post('/auth/register', registerValidation,  auhController.register);

export default auth;
