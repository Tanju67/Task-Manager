const express = require("express");

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

router.post("/category", createCategory);

router.get("/category", getAllCategories);

router.delete("/category", deleteCategory);

router.get("/task/:cId", getAllTask);

router.post("/task", createTask);

router.patch("/task/:tId", updateTask);

router.delete("/task/:tId", deleteTask);

module.exports = router;
