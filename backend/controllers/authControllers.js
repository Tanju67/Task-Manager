const UserModel = require("../models/authModel");

const { createCustomError } = require("../errors/customError");

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  const existingUser = await UserModel.find({ email: email });
  if (existingUser) {
    return next(
      createCustomError("User is already exist. Please log in!", 404)
    );
  }
  const user = await UserModel.create({ name, email, password });
  res.status(201).json(user);
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const existingUser = await UserModel.findOne({ email: email });

  if (!existingUser) {
    return next(createCustomError("Invalid email", 401));
  }

  const isValidPassword = await existingUser.comparePassword(password);

  if (!isValidPassword) {
    return next(createCustomError("Invalid password", 401));
  }

  const token = existingUser.createJWT();

  const { password: pass, ...user } = existingUser._doc;
  res.cookie("jwtToken", token).status(200).json({ user });
};

const logout = async (req, res) => {
  res
    .clearCookie("jwtToken")
    .status(200)
    .json({ msg: "User logged out successfully!" });
};

module.exports = { register, login, logout };
