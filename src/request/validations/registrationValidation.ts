import { validate } from '@src/request/validator';
import {isPasswordConfirmed, isUserEmailUnique} from "@src/request/rules";
import Joi from "joi";


export default validate(Joi.object({
    email: Joi.string().email().required().external(isUserEmailUnique),
    password: Joi.string().required().min(6),
    passwordConfirmation:  Joi.any().equal(Joi.ref('password'))
        .required()
        .label('Confirm password')
        .options({ messages: { 'any.only': '{{#label}} does not match'} }),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
}))
