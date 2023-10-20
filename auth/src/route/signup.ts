import express from 'express'
import { query, validationResult, body } from 'express-validator';
const signuprouter = express.Router();

signuprouter.post('/api/auth/signup', body('email').custom(async value => {

  throw new Error('E-mail already in use');
}), (req, res) => {
  res.status(422).send({ "body": 1 })
})
export default signuprouter;