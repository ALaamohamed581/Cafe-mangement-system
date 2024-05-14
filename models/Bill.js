const { strict } = require("assert");
const { name } = require("ejs");
const mongoose = require("mongoose");

const billSchema = mongoose.Schema({
  name: String,
  uuid: String,
  email: String,
  contactctNumber: String,
  createdBy: String,
  paymentMentod: String,
  prodcutDetails: JSON,
  totalAmount: String,
  Sellerid: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

const Bills = mongoose.model("Bills", billSchema);
module.exports = Bills;
