import validator from '@src/validator/validator';
import { body, ValidationChain } from 'express-validator';

/**
 * validation rule for user login
 * @type {ValidationChain[]}
 */
export default validator ( [
    body('email', 'filed \'name\' can not be empty').not().isEmpty().isEmail()
]);
