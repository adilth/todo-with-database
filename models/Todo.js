const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },
  tasks: {
    type: "string",
    required: true,
  },
  date: {
    type: date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Todo", todoSchema);
