const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const showSchema = new Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
  format: String,
  image: { type: String, required: true },
  description: String,
  people: String, 
  date: { type: Date, default: Date.now },
  startTime: { type: Date, default: Date.now },
  endTime: { type: Date, default: Date.now },
  cost: { type: String, required: true},
  type: String
});

const Show = mongoose.model("Show", showSchema);

module.exports = Show;