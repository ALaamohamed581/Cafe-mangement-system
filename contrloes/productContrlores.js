const Product = require("../models/product");

const AddProduct = async (req, res, next) => {
  try {
    let product = await Product.create(req.body);

    res.status(201).json({ message: "success", data: product });
  } catch (err) {
    res.send(err);
  }
};
const UpdateProduct = async (req, res, next) => {
  const { ProductId } = req.params;
  try {
    let product = await Product.findOneAndUpdate({ _id: ProductId }, req.body);

    res.status(200).json({ message: "success", data: product });
  } catch (err) {
    res.send("somthing went wrong");
  }
};
const DelterProduct = async (req, res, next) => {
  const { ProductId } = req.params;
  try {
    let product = await Product.findOneAndDelete({ _id: ProductId });

    res.status(200).json({ message: "success", data: product });
  } catch (err) {
    res.send("somthing went wrong");
  }
};
const Show = async (req, res, next) => {
  try {
    let product = await Product.find();
    res.status(200).json({ message: "success", data: product });
  } catch (err) {
    res.send("somthing went wrong");
  }
};

const GetByCatId = async (req, res, next) => {
  const { catID } = req.params;

  try {
    let product = await Product.find({ categoryId: catID });
    res.status(200).json({ message: "success", data: product });
  } catch (err) {
    res.send("somthing went wrong");
  }
};
module.exports = { AddProduct, UpdateProduct, Show, GetByCatId, DelterProduct };
