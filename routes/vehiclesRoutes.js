const express = require("express");
const router = express.Router();

// Import the controller file properly
const vehicleController = require("../controllers/vehiclesController");

// // Ensure the function exists before using it in a route
// if (!vehicleController.getVehicles) {
//   throw new Error("vehicleController.getVehicles is not defined. Check your import path!");
// }

// Define your routes correctly
router.get("/list", vehicleController.getAllVehicles);
router.post("/create", vehicleController.createVehicles);
router.get("/list/:id", vehicleController.getVehicleslById);
router.put("/edit/:id", vehicleController.updateVehicles);
router.delete("/delete/:id", vehicleController.deleteVehicles);

module.exports = router;
