const crypto = require("crypto");
const mongoose = require("mongoose");
const { type } = require("os");
const validator = require("validator");
const bycrypt = require("bcrypt");
const UserModel = mongoose.Schema({
  name: {
    type: String,
    mimLenght: 3,
  },
  contactNumber: String,

  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, " Please provide your Password"],
  },
  status: String,
  role: String,
  resetToken: String,
});

//has passowrd
// UserModel.pre("save", async function (next) {
//   this.password = await bycrypt.hash(this.password, 12);

//   next();
// });

UserModel.methods.createPassowrdResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.resetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  console.log(resetToken, "<----emai one", this.resetToken, "<---main");

  return resetToken;
};
const User = mongoose.model("User", UserModel);

module.exports = User;
