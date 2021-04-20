const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const showSchema = new Schema({
  eventName: { type: String, required: true },
  eventLink: { type: String, required: true },
  eventType: { type: String, required: true, default: 'standup' },
  eventImage: { type: String, required: true },
  description: String,
  performers: String, 
  date: { type: Date, default: Date.now },
  startTime: String,
  endTime: String,  
  cost: { type: Number, min: 0, required: true}
});

/*    
cost: { type: String, required: true}, */

const Show = mongoose.model("Show", showSchema);

module.exports = Show;