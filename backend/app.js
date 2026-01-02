import express from 'express'
import dotenv from 'dotenv'

import connectDb from './config/db';

dotenv.config(); 
const app = express();
const port = process.env.PORT || 3000;

connectDb(); //connects to the db

app.use(express.json()); 

app.get('/', (req,res)=>{
    res.send("Welcome to My Home Page");
})

app.listen(port,()=>{
    console.log(`App is on port ${port}`);
})