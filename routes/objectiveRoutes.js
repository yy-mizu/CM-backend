const express = require("express");
const router = express.Router();
const objectiveController = require("../controllers/objectiveController");

router.get("/list", objectiveController.getAllObjective);
router.get("/list/:id", objectiveController.getObjectivelById);
router.post("/create", objectiveController.createObjective);
router.put("/edit/:id", objectiveController.updateObjective);
router.delete("/delete/:id", objectiveController.deleteObjective);

module.exports = router;
