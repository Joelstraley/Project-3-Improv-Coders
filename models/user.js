const mongoose = require("mongoose");
const bcrypt= require("bcrypt");
const Schema = mongoose.Schema;

// const SALT_WORK_FACTOR = 5;
const userSchema = new Schema({
  // name: { type: String, required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  
});
userSchema.pre(
  'save',
  async function(next) {
    const user = this;
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
    next();
  }
);

userSchema.methods.isValidPassword = async function(password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
}

// userSchema.pre('save', async function save(next) {
//   if (!this.isModified('password')) return next();
//   try {
//     const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
//     console.log(this.password)
//     this.password = await bcrypt.hash(this.password, salt);
//     console.log(this.password)
//     return next();
//   } catch (err) {
//     return next(err);
//   }
// });

// userSchema.methods.validatePassword = async function validatePassword(data) {
//   console.log(this.password)
//   console.log(data)
//   var hashCheck= await bcrypt.compare(data, this.password);
//   return hashCheck;
// };

const User = mongoose.model("User", userSchema);

module.exports = User;