const createError = require("../utils/createError");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const prisma = require("../config/prisma");
const { v4: uuidv4 } = require("uuid");
const userService = require("../services/user-service");
exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return createError(400, "Please provide email and password");
    //check if email and password are string

    if (typeof email !== "string" || typeof password !== "string")
      return createError(400, "Please provide valid email and password");
    //check if user exists
    const isExist = await userService.getUserByEmail(email);
    if (isExist) return createError(400, "User already exists");
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { email, password: hashedPassword, memberId: uuidv4() },
    });
    console.log(user);

    delete user.password;
    res.json({ user: user });
  } catch (error) {
    next(error);
  }
};
// exports.confirmRegister = (req, res, next) => {
//   try {
//     res.json({ message: "register success" });
//   } catch (error) {
//     next(error);
//   }
// };

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return createError(400, "Please provide email and password");

    if (typeof email !== "string" || typeof password !== "string")
      return createError(400, "Please provide valid email and password");
    const isUserExist = await userService.getUserByEmail(email);
    if (!isUserExist) return createError(400, "User does not exist");
    const isPasswordCorrect = await bcrypt.compare(password, isUserExist.password);
    if (!isPasswordCorrect) return createError(400, "Incorrect username or password");
    const token = jwt.sign({ userId: isUserExist.id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    delete isUserExist.password;
    res.json({ message: "login success", user: isUserExist, token: token });
  } catch (error) {
    next(error);
  }
};

exports.forgetPassword = (req, res, next) => {
  try {
    res.json({ message: "forget password" });
  } catch (error) {
    next(error);
  }
};

exports.resetPassword = (req, res, next) => {
  try {
    res.json({ message: "reset password" });
  } catch (error) {
    next(error);
  }
};
