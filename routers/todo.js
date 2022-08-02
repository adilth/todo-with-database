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
router.post("/", async (req, res) => {
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
});

//edite or update tasks

router
  .route("/edite/:id")
  .get((req, res) => {
    const { id } = req.params;
    Todo.find({}, (err, tasks) => {
      if (err) console.log(err);
      res.render("edite.ejs", { todoTasks: tasks, taskId: id });
    });
  })
  .post((req, res) => {
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
  });
//DELETE
app.route("/remove/:id").get((req, res) => {
  const id = req.params.id;
  Todo.findByIdAndRemove(id, (err) => {
    if (err) return res.send(500, err);
    res.redirect("/");
  });
});
