import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import UseRouter from "./Routes/route.js";
import connectDB from "./config/db.js";


const app=express();
app.use(express.json());
app.use(cors());
dotenv.config();
connectDB();


app.use("/useres",UseRouter);


const Port =process.env.PORT;

app.listen(Port,()=>{
    console.log(`server is rouning in port ${Port}`)
});