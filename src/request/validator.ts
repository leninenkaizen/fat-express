import { Request, Response, NextFunction } from "express";
import  {ObjectSchema, ValidationError} from 'joi'

/**
 * validating the incoming request
 * @param validation
 */

export const validate = (validation: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await validation.validateAsync(req.body);
            next();
        } catch ( err) {
            //error: ValidationError
            res.status(422).json({errors: err.details[0].message})
        }
    }
}

export const throwValidationError = (message: string) => {
    throw new ValidationError('', [{message: message}], {});
}
