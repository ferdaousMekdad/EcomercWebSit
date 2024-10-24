import express from "express";
import { CreateUser}  from "../Controllers/user.js";
const UseRouter=express.Router();

UseRouter.post("/create",CreateUser);


export default UseRouter;