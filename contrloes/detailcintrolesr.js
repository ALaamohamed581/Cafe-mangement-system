const Category = require("../models/category");
const Product = require("../models/product");
const Bills = require("../models/Bill.js");

async function getGenericdetails(modelNmae) {
  let data = await modelNmae.aggregate([
    { $group: { _id: "$name" } },
    { $count: "total" },
  ]);
  return data;
}

const getDetails = async (req, res, next) => {
  try {
    let categories = await getGenericdetails(Category);
    let product = await getGenericdetails(Product);
    let bills = await getGenericdetails(Bills);
    let result = [
      { categoriesTotal: categories[0].total },
      { productTotal: product[0].total },
      { billsTotal: bills[0].total },
    ];
    res.status(200).json({ data: result });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getDetails };
