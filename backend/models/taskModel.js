const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Category",
  },
});

module.exports = mongoose.model("Task", taskSchema);
