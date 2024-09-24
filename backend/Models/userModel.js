const { models } = require("./index");

module.exports = {
  createUser: async (body) => {
    try {
      const user = await models.users.create({
        ...body,
      });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getLogin: async ({ email }) => {
    try {
      const user = await models.users.findOne({
        where: {
          //...() this means that we are using ternary operator in where clause
          ...(email ? { email: email } : false),
        },
        //attributes: ["userId", "username"],
        // attributes: { exclude: ["password"] },
        // paranoid: false, //this will show deleted user too
      });
      return {
        response: user,
      };
    } catch (error) {
      console.error(error);
      return {
        error: error.message,
      };
    }
  },
  user_Profile: async ({ username, userId }) => {
    try {
      const query = {
        where: {
          ...(userId ? { userId } : { username }),
        },
        attributes: { exclude: ["password"] },
        // Include password for authentication
        // attributes: ["userId", "username", "password", "email"], // Add required fields here
      };
      console.log("data of Query", query);
      const user = await models.users.findOne(query);
      return {
        response: user,
      };
    } catch (error) {
      console.error(error);
      return {
        error: error,
      };
    }
  },
  my_Profile: async ({ userId }) => {
    try {
      const user = await models.users.findOne({
        where: {
          userId: userId,
        },
        attributes: { exclude: ["password"] },
      });
      return {
        response: user,
      };
    } catch (error) {
      console.error(error);
      return {
        error: error,
      };
    }
  },
  deleteUser: async ({ username, userId }) => {
    try {
      const user = await models.users.destroy({
        where: {
          //...() this means that we are using ternary operator in where clause
          ...(userId ? { userId: userId } : { username: username }),
        },
      });
      return {
        response: user,
      };
    } catch (error) {
      console.error(error);
      return {
        error: error,
      };
    }
  },
  updateUser: async ({ userId, ...body }) => {
    try {
      const user = await models.users.update(
        { ...body },
        {
          where: {
            userId: userId,
          },
        }
      );
      return {
        response: user,
      };
    } catch (error) {
      console.error(error);
      return {
        error: error,
      };
    }
  },

  // Function to check if user is following another user and follow/unfollow
  checkIfFollowing: async (userId, targetId) => {
    try {
      // Check if the authenticated user is already following the target user
      const existingFollow = await models.follow.findOne({
        where: {
          followerId: userId, // Authenticated user's ID (must not be undefined)
          followingId: targetId, // Target user's ID
        },
      });

      if (existingFollow) {
        // Unfollow if already following
        await existingFollow.destroy();
        return { message: "Unfollowed successfully" };
      } else {
        // Follow if not already following
        await models.follow.create({
          followerId: userId, // Authenticated user's ID (must not be undefined)
          followingId: targetId, // Target user's ID
        });
        return { message: "Followed successfully" };
      }
    } catch (error) {
      console.error("Follow/Unfollow error:", error);
      return { error: error.message || "Internal Server Error" };
    }
  },
  //   ===========================Pins Model=======================
  Pin_create: async ({ body }) => {},
  Pin_create: async ({ body }) => {},
  Pin_create: async ({ body }) => {},
  Pin_create: async ({ body }) => {},
};
