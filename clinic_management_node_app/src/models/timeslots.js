import mongoose from "mongoose";

const timeslotsschema = new mongoose.Schema({
    
    timeSlot: {
      type: String,
      required: true,
    },
});
  
mongoose.model("timeslots",  timeslotsschema );