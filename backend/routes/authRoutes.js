const express = require("express");
const {
  register,
  login,
  logout,
  refetch,
} = require("../controllers/authControllers");
const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/refetch", refetch);

module.exports = router;
