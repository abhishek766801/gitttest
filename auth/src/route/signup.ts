import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { AccountVerification, User } from '../models';

import { SIGNUP_ROUTE } from './route-defs';

const signUpRouter = express.Router();
signUpRouter.post(
  SIGNUP_ROUTE,
  [
    body('email')
      .isEmail()
      .withMessage('Email must be in a valid format')
      .normalizeEmail(),
    body('password')
      .trim()
      .isLength({ min: 8, max: 32 })
      .withMessage('Password must be between 8 and 32 characters'),
    body('password')
      .matches(/^(.*[a-z].*)$/)
      .withMessage('Password must contain at least one lowercase letter'),
    body('password')
      .matches(/^(.*[A-Z].*)$/)
      .withMessage('Password must contain at least one uppercase letter'),
    body('password')
      .matches(/^(.*\d.*)$/)
      .withMessage('Password must contain at least one digit'),
    body('password').escape(),
  ],
  async (req:Request, res:Response) => {
    const errors = validationResult(req).array();

    if (/.+@[A-Z]/g.test(req.body.email)) {
      errors.push({
        location: 'body',
        value: req.body.email,
        param: 'email',
        msg: 'Email is not normalized',
      });
    }

    if (/[><'"/]/g.test(req.body.password)) {
      errors.push({
        location: 'body',
        value: req.body.password,
        param: 'password',
        msg: 'Password contains invalid characters',
      });
    }

    if (errors.length > 0) {
      throw new InvalidInput(errors);
    }


  }
);

export default signUpRouter;