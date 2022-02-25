import mongoose from "mongoose";

const specialitiesschema = new mongoose.Schema({
    
    Specialities: {
      type: String,
      required: true,
    },
});
  
mongoose.model("specialities",  specialitiesschema );