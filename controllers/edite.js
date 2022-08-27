const Todo = require("../models/Todo");

module.exports = {
  getEditeTask: (req, res) => {
    const { id } = req.params;
    Todo.find({}, (err, tasks) => {
      if (err) console.log(err);
      res.render("edite.ejs", { todoTasks: tasks, taskId: id });
    });
  },
  postEditeTask: (req, res) => {
    const { id } = req.params;
    Todo.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        content: req.body.content,
      },
      (err) => {
        if (err) return res.status(501).send(err);
        res.redirect("/");
      }
    );
  },
  deleteTask: (req, res) => {
    const id = req.params.id;
    Todo.findByIdAndRemove(id, (err) => {
      if (err) return res.send(500, err);
      res.redirect("/");
    });
  },
};
