const express = require("express");
const router = express.Router();
const vehiclesController = require("../controllers/vehiclesController");

router.get("/", vehiclesController.getAllVehicles);
router.get("/:id", vehiclesController.getVehicleslById);
router.post("/", vehiclesController.createVehicles);
router.put("/:id", vehiclesController.updateVehicles);
router.delete("/:id", vehiclesController.deleteVehicles);

module.exports = router;
