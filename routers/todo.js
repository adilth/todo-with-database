const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo");

router.get("/", todoController.getTodo);

router.post("/", todoController.createTodo);

module.exports = router;
