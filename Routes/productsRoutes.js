const express = require("express");
const router = express.Router();
const { protect, checkrole } = require("../auth/protect");
const {
  AddProduct,
  UpdateProduct,
  Show,
  GetByCatId,
  DelterProduct,
} = require("../contrloes/productContrlores");

router.post("/addProduct", protect, checkrole("Admin"), AddProduct);
router.patch("/:ProductId", protect, checkrole("Admin"), UpdateProduct);
router.delete("/:ProductId", protect, checkrole("Admin"), DelterProduct);
router.get("/:catID", GetByCatId);
router.get("/", Show);

module.exports = router;
