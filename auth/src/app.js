import express from 'express'
import pkg from 'express';
const { Request, Response } = pkg;
import signuprouter from  './route/signup.js';

const app = express()
app.get('/', (req, res) => {
  res.status(200).send('hello')
})
app.set('port', (process.env.PORT || 3000));
app.use(signuprouter)
app.listen(3000, () => {
  console.log('running succesg s')
});

export default app;