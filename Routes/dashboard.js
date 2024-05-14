const express = require("express");
const router = express.Router();

const { getDetails } = require("../contrloes/detailcintrolesr");

router.get("/", getDetails);
module.exports = router;
