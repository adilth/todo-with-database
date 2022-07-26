const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },
  content: {
    type: "string",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Todo", todoSchema);
