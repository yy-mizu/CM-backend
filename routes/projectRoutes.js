const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.get("/list", projectController.getAllProjects);
router.get("/list/:id", projectController.getProjectById);
router.post("/create", projectController.createProject);
router.put("/edit/:id", projectController.updateProject);
router.delete("/delete/:id", projectController.deleteProject);

module.exports = router;
