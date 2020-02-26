const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let taskSchema = new Schema({
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

taskSchema.pre("save", function(next) {
  const task = this;
  console.log("Just before saving task");
  next();
});
const Task = mongoose.model("tasks", taskSchema);
module.exports = Task;
