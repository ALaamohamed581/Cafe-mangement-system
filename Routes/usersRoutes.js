const express = require("express");
const router = express.Router();
const {
  SignUp,
  Login,
  fongetPassowrd,
} = require("../contrloes/Authentication");
const {
  GetAllUsers,
  UpdateCurrentUSer,
} = require("../contrloes/AdminContlores");
const { protect, checkrole } = require("../auth/protect");
router.patch("/:id", UpdateCurrentUSer);
router.get("/", protect, checkrole("Admin"), GetAllUsers);
router.post("/signup", SignUp);
router.post("/Login", Login);
router.post("/fongetPassowrd", fongetPassowrd);
module.exports = router;
