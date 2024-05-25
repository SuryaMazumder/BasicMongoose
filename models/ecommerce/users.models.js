import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true

    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})//timestamps will store createdAt and UpdatedAt

export const User=mongoose.model('User',UserSchema)