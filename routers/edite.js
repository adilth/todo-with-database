const express = require("express");
const router = express.Router();
const editeController = require("../controllers/edite");

//edite or update tasks page
router.get("/:id", editeController.getEditeTask);

//update tasks with new tasks
router.post("/:id", editeController.postEditeTask);

//DELETE task
router.get("/remove/:id", editeController.deleteTask);

module.exports = router;
