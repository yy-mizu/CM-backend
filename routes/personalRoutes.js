const express = require("express");
const router = express.Router();
const assignedPersonalController = require("../controllers/assignedPersonalController");

router.get("/", assignedPersonalController.getAllAssignedPersonal);
router.get("/:id", assignedPersonalController.getAssignedPersonalById);
router.post("/", assignedPersonalController.createAssignedPersonal);
router.put("/:id", assignedPersonalController.updateAssignedPersonal);
router.delete("/:id", assignedPersonalController.deleteAssignedPersonal);

module.exports = router;
