const express = require("express");
const router = express.Router();
const a_objectiveController = require("../controllers/a_objectiveController");

router.get("/", a_objectiveController.getAllA_Objective);
router.get("/:id", a_objectiveController.getA_ObjectiveById);
router.post("/", a_objectiveController.createA_Objective);
router.put("/:id", a_objectiveController.updateA_Objective);
router.delete("/:id", a_objectiveController.deleteA_Objective);

module.exports = router;
