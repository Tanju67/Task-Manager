const jwt = require("jsonwebtoken");
const { createCustomError } = require("../errors/customError");
const dotenv = require("dotenv");
dotenv.config();

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.cookies;
    if (!token) {
      return next(createCustomError("Authentication failed!", 401));
    }
    const decodedToken = jwt.verify(token.jwtToken, process.env.TOKEN_SECRET);
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (error) {
    return next(createCustomError("Authentication failed!", 401));
  }
};
