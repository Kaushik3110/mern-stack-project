import express from "express";
import mongoose from "mongoose";
import dotenv from  'dotenv';
import userRouter from './routes/user.route.js'
dotenv.config();
mongoose.connect(process.env.MONGO).then( ()=> {
    console.log("connected to MongoDB")
}).catch((err)=> {
    console.log("error");
})

const app=express();

app.listen(3000,()=>{
    console.log("server is running on the port 3000");

    console.log("http://localhost:3000/");
}
);
app.use("/api/user",userRouter);