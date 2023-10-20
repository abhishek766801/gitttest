import express,{Request,Response} from 'express'
import signuprouter from './route/signup.js';

const app = express()
app.get('*', (req:Request, res:Response) => {
  res.send('hello')
})
app.use(signuprouter)
app.listen(9000, () => {
  console.log('running succesg s')
});

export default app;