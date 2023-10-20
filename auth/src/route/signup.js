import express from 'express'

const signuprouter = express.Router();

signuprouter.post('/api/auth/signup', (req,res) => {
  res.status(422).send({"body":1})
})
signuprouter.get('/hel',(req,res)=>{
  res.send("joo")
})
export default signuprouter;