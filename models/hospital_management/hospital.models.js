import mongoose from 'mongoose'

const HospitalSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
      },
      location: {
        address: {
          street: { type: String, required: true },
          city: { type: String, required: true },
          state: { type: String, required: true }
         
        }
    },
        doctors:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Doctor'
        },
        specializedIn: [
            {
              type: String,
            },
          ],

},{timestamps:true})


export const Hospital=mongoose.model('Hospital',HospitalSchema)