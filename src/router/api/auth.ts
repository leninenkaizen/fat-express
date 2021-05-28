import { Router } from 'express';
import {AuthController} from "@src/controllers/AuthController";
import registrationValidation from "@src/validator/validations/registrationValidation";

const auth = Router()

const auhController = new AuthController();

auth.get('/auth/user', auhController.user);

auth.post('/auth/register', registrationValidation,  auhController.register);

export default auth;
