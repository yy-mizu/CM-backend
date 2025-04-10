const express = require("express");
const router = express.Router();
const assignedPersonalController = require("../controllers/personalController");

router.get("/list", assignedPersonalController.getAllAssignedPersonal);
router.get("/list/:id", assignedPersonalController.getAssignedPersonalById);
router.post("/create", assignedPersonalController.createAssignedPersonal);
router.put("/edit/:id", assignedPersonalController.updateAssignedPersonal);
router.delete("/delete/:id", assignedPersonalController.deleteAssignedPersonal);

module.exports = router;
