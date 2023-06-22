import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
const app=express()
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const PORT=process.env.PORT;
app.use(express.json());
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))

import UserRouter from './routes/UserRouter.js'

app.use('/api/users',UserRouter)










// console.log(process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(PORT,()=>{
        console.log(`SERVER CONNECTED TO ${PORT}`);
    })
}).catch((error)=>{
    console.log(`database connection error${error}`);
})

