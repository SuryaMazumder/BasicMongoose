import mongoose from 'mongoose'
import { type } from 'os'

const PatientSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    diagonosedWith:{
        type:String,
        required:true
    },
    address:{
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        enum:['M','F','O'],
        required:true
    },
    hospitalName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital'
    }

},{timestamps:true})


export const Patient=mongoose.model('Patient',PatientSchema)