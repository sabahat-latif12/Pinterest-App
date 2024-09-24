const express = require("express");
const protected = require("../utils/isAuth");
const {
  createValid,
  getLoginSchema,
  userSchema,
  getuserSchema,
  updateUser,
  getAllUserSchema,
} = require("../utils/validation");
const {
  register,
  loginUser,
  logOut,
  myProfile,
  followUnFollow,
  userProfile,
  update,
} = require("../Controllers/userControllers");

const router = express.Router();

router.post("/register", createValid, register);
router.post("/login", getLoginSchema, loginUser);
router.get("/profile", protected, myProfile);
// router.get("/logout", protected, userSchema, logOut);
router.post("/follow", protected, followUnFollow);
router.get("/userProfile", protected, getuserSchema, userProfile);
router.patch("/update-user", updateUser, update);

module.exports = router;
