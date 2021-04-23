const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const showSchema = new Schema({
  eventName: { type: String, required: true },
  eventPlace: String,
  eventLink: { type: String, required: true },
  eventType: { type: String, required: true},
  eventImage: { type: String, required: true },
  description: String,
  performers: String, 
  date: { type: Date, default: Date.now, required: true},
  startTime: String,
  endTime: String,  
  cost: { type: Number, min: 0}
});


const Show = mongoose.model("Show", showSchema);

module.exports = Show;