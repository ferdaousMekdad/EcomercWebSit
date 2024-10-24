import { Schema,model } from "mongoose";

const UserSchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    familyName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
});
const Users = model('user',UserSchema);

export default Users;