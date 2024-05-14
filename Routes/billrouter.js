const express = require("express");
const router = express.Router();
const { GenerateBill } = require("../contrloes/billcontroller");
const { protect } = require("../auth/protect");
router.post("/", protect, GenerateBill);
module.exports = router;
