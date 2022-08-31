const Todo = require("../models/Todo");

module.exports = {
  getTodo: async (req, res) => {
    try {
      const tasks = await Todo.find();
      res.render("index.ejs", { todoTasks: tasks });
    } catch (err) {
      res.status(500).send(err);
    }
  },
  createTodo: async (req, res) => {
    // const { title, content } = req.body
    const todoTasks = new Todo({
      title: req.body.title,
      content: req.body.content,
    });
    try {
      await todoTasks.save();
      console.log(todoTasks);
      res.redirect("/");
    } catch (e) {
      res.status(501).send(e);
    }
  },
};
