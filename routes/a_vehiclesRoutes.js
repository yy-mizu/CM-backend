const express = require("express");
const router = express.Router();
const A_vehicleController = require("../controllers/a_vehicleController");

router.get("/list", A_vehicleController.getAllA_Vehicle);
router.get("/list/:id", A_vehicleController.getA_VehicleById);
router.post("/create", A_vehicleController.createA_Vehicle);
router.put("/edit/:id", A_vehicleController.updateA_Vehicle);
router.delete("/delete/:id", A_vehicleController.deleteA_Vehicle);

module.exports = router;
