import mongoose from "mongoose";

const patientHistoryschema = new mongoose.Schema({

  
    year: {
        type: Number,
        required: true,
    },
      
    month: {
        type: Number,
        required: true,
    },
      
    patientNumber: {
        type: Number,
        required: true,
    },

    description: {
        type: String,
        required: true,  
    },
  

  });
  
  mongoose.model("patientHistory", patientHistoryschema);