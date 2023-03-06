import { Jokeroute } from './routes/jokeRoute';
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import {PrismaClient} from '@prisma/client';
dotenv.config()

let app: Express = express()
const primas = new PrismaClient();

//MIDDLE WARE
app.use('/joke',Jokeroute)

app.get('/',(req,res)=>{
    res.send("HOME PAGE!!!")
})

app.listen(process.env.PORT, () => {
    console.log(`Server Running at ${3000}`)
})