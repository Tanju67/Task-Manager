const CategoryModel = require("../models/categoryModel");
const TaskModel = require("../models/taskModel");
const { createCustomError } = require("../errors/customError");

const createCategory = async (req, res, next) => {
  const { category } = req.body;
  await CategoryModel.create({ category, creator: req.userData.userId });
  res.status(201).json({ category });
};

const getAllCategories = async (req, res, next) => {
  const category = await CategoryModel.find({ creator: req.userData.userId });
  res.status(200).json({ category });
};

const deleteCategory = async (req, res, next) => {
  const id = req.params.cId;
  const category = await CategoryModel.findByIdAndDelete(id);
  if (!category) {
    return next(createCustomError("Found no category for provided id.", 404));
  }
  res.status(200).json({ category });
};

const createTask = async (req, res, next) => {};

const getAllTask = async (req, res, next) => {};

const updateTask = async (req, res, next) => {};

const deleteTask = async (req, res, next) => {};

module.exports = {
  createCategory,
  getAllCategories,
  deleteCategory,
  createTask,
  getAllTask,
  updateTask,
  deleteTask,
};
