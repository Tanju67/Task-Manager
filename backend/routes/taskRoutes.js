const express = require("express");

const checkAuth = require("../middlewares/check-auth");
const router = express.Router();
const {
  createCategory,
  getAllCategories,
  deleteCategory,
  getAllTask,
  deleteTask,
  createTask,
  updateTask,
} = require("../controllers/taskControllers");

router.use(checkAuth);

router.post("/category", createCategory);

router.get("/category", getAllCategories);

router.delete("/category/:cId", deleteCategory);

router.get("/task/:cId", getAllTask);

router.post("/task/:cId", createTask);

router.patch("/task/:tId", updateTask);

router.delete("/task/:tId", deleteTask);

module.exports = router;
