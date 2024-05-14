const uuid = require("uuid");
const ejs = require("ejs");
const path = require("path");
const pdf = require("html-pdf");
const Bills = require("../models/Bill.js");
function ejsfile() {}
const GenerateBill = async (req, res, next) => {
  try {
    const genratedUUid = uuid.v1();
    let newBill = req.body;
    newBill.Sellerid = req.id;
    newBill.uuid = genratedUUid;
    newBill = await Bills.create(newBill);

    let productDeatisReport = JSON.parse(req.body.prodcutDetails);

    ejs.renderFile(
      path.join(__dirname, "", "report.ejs"),

      {
        prodcutDetails: productDeatisReport,
        name: req.body.name,

        email: req.body.email,
        contactctNumber: req.body.contactctNumber,
        paymentMentod: req.body.paymentMentod,
        totalAmount: req.body.totalAmount,
      },
      (err, date) => {
        if (err) {
          res.json(err);
        } else {
          pdf
            .create(date)
            .toFile(
              "../cafe mangemnt system/generatedPd/generatedPdf" +
                genratedUUid +
                ".pdf",
              function (err, result) {
                return res.status(200).json(result);
              }
            );
        }
      }
    );
  } catch (er) {
    console.log(er);
  }
};

module.exports = { GenerateBill };
