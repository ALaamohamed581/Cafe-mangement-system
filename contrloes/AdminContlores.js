const User = require("../models/User");

const GetAllUsers = async (req, res, next) => {
  try {
    let AllUsers = await User.find({ role: "user" });
    res.status(200).json({ message: "success", data: AllUsers });
  } catch (err) {
    console.log(err);
  }
};
const UpdateCurrentUSer = async (req, res, next) => {
  const { id } = req.params;
  try {
    let updated = await User.findOneAndUpdate({ _id: id }, req.body);
    res.status(200).json({ message: "success", data: updated });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { GetAllUsers, UpdateCurrentUSer };
