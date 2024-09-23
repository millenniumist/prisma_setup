const jwt = require("jsonwebtoken");
const createError = require("../utils/createError");
const userService = require("../services/user-service");

const authenticate = async (req, res, next) => {
  try {
    const  authorization  = req.headers.authorization;
    if (!authorization || !authorization.startsWith("Bearer")) {
      return createError(401, "Unauthorized");
    }
    console.log(authorization)
    const token = authorization.split(" ")[1];
    if (!token) {
      return createError(401, "Unauthorized");
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userService.getUserById(payload.userId);
    if (!user) {
        return createError(401, "Unauthorized");
    }
    req.user = user;
    next()
  } catch (error) {
    next(error);
  }
};

module.exports = authenticate;
