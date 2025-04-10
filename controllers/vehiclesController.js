const db = require("../models").Vehicles;

const getAllVehicles = async (req, res) => {
    try {
        const vehicles = await db.vehicles.findAll();
        res.status(200).json(vehicles);
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

const getVehicleslById = async (req, res) => {
    try {
        const vehicles = await db.vehicles.findOne({ where: { id: req.params.id } });
        if (vehicles) {
            res.status(200).json(vehicles);
        } else {
            res.status(404).json({ message: "vehicles Not Found" });
        }
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

const createVehicles = async (req, res) => {
    try {
        const { name, type, status, license_plate} = req.body;
        const newVehicle = await db.create({ name,type, status, license_plate});
        res.status(201).json(newVehicle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateVehicles = async (req, res) => {
    try {
        const vehicles = await db.vehicles.findOne({ where: { id: req.params.id } });
        if (!vehicles) {
            return res.status(404).json({ message: "vehicles Not Found" });
        }
        await db.vehicles.update(req.body, { where: { id: req.params.id } });
        res.status(200).json({ message: "Avehicles Updated Successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

const deleteVehicles = async (req, res) => {
    try {
        const vehicles = await db.vehicles.findOne({ where: { id: req.params.id } });
        if (!vehicles) {
            return res.status(404).json({ message: "vehicles Not Found" });
        }
        await db.vehicles.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: "vehicles Deleted Successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

module.exports = {
    getAllVehicles,
    getVehicleslById,
    createVehicles,
    updateVehicles,
    deleteVehicles
};