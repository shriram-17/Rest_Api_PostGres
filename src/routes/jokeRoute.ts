import express,{Express,Router,Request,Response} from 'express';
import { PrismaClient } from '@prisma/client';
export let Jokeroute :Router = express()

let Prisma =new PrismaClient()

Jokeroute.get('/',(req:Request,res:Response)=>{
    res.send("The Jokes Home Page")
})

Jokeroute.get('/all', async (req:Request,res:Response)=>{
    const jokes  = await Prisma.joke.findMany({
        include : {creator : true}
    })
    res.status(200).json({jokes})
})

Jokeroute.post('/',async (req:Request,res:Response) =>{
    const joke = await Prisma.joke.create({
       data:{
        text:"fake Laughs :)",
        userId:"cleu12otq00007kg8ertid5en"
       } 
    })

    res.status(200).json({joke})
})

