const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

router.get("/", async (req, res) => {
  try {
    await Todo.find({}, (err, tasks) => {
      res.render("index.ejs", { todoTasks: tasks });
    });
  } catch (err) {
    res.status(500).send(err);
  }
});
