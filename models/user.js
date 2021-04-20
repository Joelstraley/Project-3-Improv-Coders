const mongoose = require("mongoose");
const bcrypt= require("bcryptjs");
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 5;
const userSchema = new Schema({
  // name: { type: String, required: true},
  email: { type: String, required: true },
  password: { type: String, required: true },
  
});

userSchema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    console.log(this.password)
    this.password = await bcrypt.hash(this.password, salt);
    console.log(this.password)
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.validatePassword = async function validatePassword(data) {
  console.log(this.password)
  console.log(data)
  var hashCheck= await bcrypt.compare(data, this.password);
  return hashCheck;
};

const User = mongoose.model("User", userSchema);

module.exports = User;