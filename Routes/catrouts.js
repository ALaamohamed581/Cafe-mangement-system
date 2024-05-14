const express = require("express");
const router = express.Router();
const { protect, checkrole } = require("../auth/protect");
const {
  AddCategory,
  Show,
  UpdateCategory,
} = require("../contrloes/categoryContrlloers");

router.post("/addCatrgory", protect, checkrole("Admin"), AddCategory);
router.patch("/:catID", protect, checkrole("Admin"), UpdateCategory);
router.get("/Show", Show);
module.exports = router;
