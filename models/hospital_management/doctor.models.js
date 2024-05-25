import mongoose from 'mongoose'

const doctor=new mongoose.Schema({
    doctorName: {
        type: String,
        required: true,
        trim: true
      },
      experince:{
        type:Number,
        default:0
      },
      speciality:{
        type: String,
        required: true,
      },
      qualification:{
        type: String,
        required: true,
      },
      worksInHospitals:[
        {
        type:mongoose.Schema.Types.ObejctId,
        ref:'Hospital'
        }
      ]

},{timestamps:true})


export const Doctor=mongoose.model('Doctor',doctor)