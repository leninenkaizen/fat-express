import validator from '@src/validator/validator';
import { body, ValidationChain } from 'express-validator';
import {isPasswordConfirmed, isUserEmailUnique} from "@src/validator/rules";

/**
 * validation rule for user login
 * @type {ValidationChain[]}
 */
export default validator ( [
    body('email')
        .not()
        .isEmpty()
        .isEmail()
        .custom(isUserEmailUnique),
    body('password', 'filed \'name\' can not be empty')
        .not()
        .isEmpty()
        .isLength({min: 6}).custom(isPasswordConfirmed),
    body('firstName')
        .not()
        .isEmpty()
        .isLength({min: 6}),
    body('lastName')
        .not()
        .isEmpty()
        .isLength({min: 6})
]);
