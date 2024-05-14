const User = require("../models/User");
const Jwt = require("jsonwebtoken");
const bycrypt = require("bcrypt");
const crypto = require("crypto");
const { sendEmail } = require("../utils/email");
const SignUp = async (req, res, next) => {
  try {
    let newUser = await User.findOne({ name: req.body.name });
    if (!newUser) {
      let newUser = await User.create(req.body);
      res.status(201).json({ message: "success", data: newUser });
    }
  } catch (err) {
    console.log(err);
  }
};
const Login = async (req, res, next) => {
  try {
    let newUser = await User.findOne({ email: req.body.email });
    if (
      !newUser ||
      (await bycrypt.compare(newUser.password, req.body.password))
    ) {
      res.status(400).json({ message: "Incorrect emai or passowrd" });
    }
    if (newUser.status == "false") {
      res.status(401).json({ message: "wait for admin apporvel" });
    }
    let data = Jwt.sign({ newUser }, "mysec", { expiresIn: "10d" });
    res.status(200).json({ mesage: "success", data: data });
  } catch (err) {
    console.log(err);
  }
};
const fongetPassowrd = async (req, res, next) => {
  let { email } = req.body;
  console.log(email);
  let user = await User.findOne({ email });

  if (!user) {
    res.status(500).json({ message: "please provide an eamil avalid addres" });
  } else {
    sendEmail(user);
  }
};
module.exports = { SignUp, Login, fongetPassowrd };
