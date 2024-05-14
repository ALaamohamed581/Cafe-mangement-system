const User = require("../models/User");
const Jwt = require("jsonwebtoken");
const bycrypt = require("bcrypt");
const { promisify } = require("util");

let protect = async (req, res, next) => {
  let { authorization } = req.headers;
  try {
    if (!authorization) {
      console.log("your are not signed in please sign in first");
    }
    if (authorization) {
      let decouded = await promisify(Jwt.verify)(authorization, "mysec");
      console.log(decouded);
      req.id = decouded.newUser._id;
      req.role = decouded.newUser.role;
      next();
    }
  } catch (err) {
    console.error(err);
  }
};
let checkrole = (...roles) => {
  return (req, res, next) => {
    console.log(req.role);
    if (!roles.includes(req.role)) {
      res.send(`your are not singed in as ${role} please sign in ffirst`);
    } else {
      next();
    }
  };
};
module.exports = { protect, checkrole };
