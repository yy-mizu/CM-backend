const express = require("express");
const router = express.Router();
const a_objectiveController = require("../controllers/a_objectiveController");

router.get("/list", a_objectiveController.getAllA_Objective);
router.get("/list/:id", a_objectiveController.getA_ObjectiveById);
router.post("/create", a_objectiveController.createA_Objective);
router.put("/edit/:id", a_objectiveController.updateA_Objective);
router.delete("/delete/:id", a_objectiveController.deleteA_Objective);

module.exports = router;
