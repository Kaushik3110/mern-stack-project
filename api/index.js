import express from "express";
import mongoose from "mongoose";
import dotenv from  'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();
mongoose.connect(process.env.MONGO).then( ()=> {
    console.log("connected to MongoDB")
}).catch((err)=> {
    console.log("error");
})

const app=express();

app.use(express.json());//by default we cant send any json file to the server thats why it is used 

app.listen(3000,()=>{
    console.log("server is running on the port 3000");

    console.log("http://localhost:3000/");
}
);
app.use("/api/user",userRouter);
app.use('/api/auth',authRouter);
//developing a middle ware for error handling
app.use((err,req,res,next) => {
    const statusCode=err.statusCode||500;
    const message=err.message||'INternal Server Error';
    return res.status(statusCode).json(
        {
            success:false,
            statusCode,
            message

        }
    );
})