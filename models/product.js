const mongoose = require("mongoose");
const Category = require("./category");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  categoryId: String,
  description: String,
  price: Number,
  status: String,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
