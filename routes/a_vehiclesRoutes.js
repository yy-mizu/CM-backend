const express = require("express");
const router = express.Router();
const AController = require("../controllers/a_objectiveController");

router.get("/", objectiveController.getAllObjective);
router.get("/:id", objectiveController.getObjectivelById);
router.post("/", objectiveController.createObjective);
router.put("/:id", objectiveController.updateObjective);
router.delete("/:id", objectiveController.deleteObjective);

module.exports = router;
