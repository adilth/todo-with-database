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
    const tasks = await new Todo({
      title: req.body.title,
      content: req.body.content,
    });
    try {
      await tasks.save();
      console.log(tasks);
      res.redirect("/");
    } catch (e) {
      res.status(501).send(e);
    }
  },
};
