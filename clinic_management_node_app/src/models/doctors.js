import mongoose from "mongoose";

const doctorsschema = new mongoose.Schema({

  
    doctorNumber: {
        type: Number,
        required: true,
    },
      
    name: {
        type: String,
        required: true,
    },
      
    qualification: {
        type: String,
        required: true,
    },

    speciality: {
        type: String,
        required: true,  
    },
  

  });
  
  mongoose.model("doctors", doctorsschema );