import Users from "../models/model.js";

export const CreateUser=async(req,res)=>{
    try {
        const {name,familyName,email,password }=req.body;
        const user =await Users.create({name,familyName,email,password});
        res.status(201).json({creted:user});
    } catch (error) {
        console.error(error);
        res.status(400).json({message:"faild to creat user",error:error.message})
    }
}

