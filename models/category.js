const mongoose = require("mongoose");
const { type } = require("os");
const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
});
const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
