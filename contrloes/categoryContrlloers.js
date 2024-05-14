const Category = require("../models/category");
//add
const AddCategory = async (req, res, next) => {
  try {
    let category = await Category.create(req.body);
    res.status(201).json({ message: "success", data: category });
  } catch (err) {
    res.send("somthing went wrong");
  }
};
const Show = async (req, res, next) => {
  try {
    let category = await Category.find();
    res.status(200).json({ message: "success", data: category });
  } catch (err) {
    res.send("somthing went wrong");
  }
};
const UpdateCategory = async (req, res, next) => {
  const { catID } = req.params;
  try {
    let category = await Category.findOneAndUpdate({ _id: catID }, req.body);
    res.status(200).json({ message: "success", data: category });
  } catch (err) {
    res.send("somthing went wrong");
  }
};
module.exports = { AddCategory, Show, UpdateCategory };
