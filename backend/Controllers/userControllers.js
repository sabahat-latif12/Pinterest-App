// const users = require("../Models/definitions/users");

const { models } = require("../Models/index");
const {
  createUser,
  getLogin,
  my_Profile,
  user_Profile,
  deleteUser,
  updateUser,
  checkIfFollowing,
} = require("../Models/userModel");
const responseHandler = require("../utils/responseHandler");
require("dotenv").config();
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

// const generateToken = require("../utils/tokenGenrator");
module.exports = {
  register: async (req, res) => {
    try {
      const userData = await createUser(req.body);

      // Handle the response once the user is created
      console.log("response", userData);
      responseHandler(userData, res);
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  },

  loginUser: async (req, res) => {
    try {
      //check if user exists
      const isUser = await getLogin(req.body);
      if (isUser.error || !isUser.response) {
        isUser.error
          ? (isUser.error = "Invalid User")
          : (isUser.response = "Invalid User");
        res.cookie("auth", "undefined");
        return responseHandler(isUser, res);
      }
      //get password from isUser and compare
      const password = isUser.response.dataValues.password;
      const isValid = await compare(req.body.password, password);
      if (!isValid) {
        res.cookie("auth", "undefined"); //generating cookie
        return responseHandler({ response: "Invalid Credentials" }, res);
      }
      // now add token if user exists
      const user = isUser.response.dataValues;

      delete user.password;
      const token = sign(user, process.env.JWT_SEC, {
        expiresIn: "5d",
      });
      localStorage.setItem("userId", user.userId);
      console.log("user", user);
      res.cookie("auth", token); //generating cookie
      return responseHandler({ response: token }, res);
    } catch (error) {
      console.log(error);
      return res.send({
        error: error.message,
      });
    }
  },

  myProfile: async (req, res) => {
    try {
      const user = await my_Profile(req.query);
      responseHandler(user, res);
      // return { message: "your profile" };
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  },

  logOut: async (req, res) => {
    try {
      const user = await deleteUser(req.query);
      responseHandler(user, res);
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  },

  userProfile: async (req, res) => {
    try {
      const user = await user_Profile(req.query);
      responseHandler(user, res);
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  },
  update: async (req, res) => {
    try {
      const user = await updateUser(req.body);
      responseHandler(user, res);
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  followUnFollow: async (req, res) => {
    try {
      const { targetUserId } = req.body; // ID of the user to be followed/unfollowed
      const userId = req.user.userId; // Authenticated user ID from middleware
      console.log("auth id", userId);
      // Check if the user is trying to follow themselves
      if (!userId) {
        return res.status(401).json({ message: "User not authenticated" });
      }

      if (userId == targetUserId) {
        return responseHandler(
          { response: "You cannot follow yourself" },
          res.status(400)
        );
      }

      // Call the model function to handle the follow/unfollow logic
      const result = await checkIfFollowing(userId, targetUserId); // Pass the correct IDs
      if (result.error) {
        return res.status(500).send({ error: result.error });
      }

      return responseHandler(result, res, 200);
    } catch (error) {
      console.error("Follow/Unfollow error:", error);
      return res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  },
};
