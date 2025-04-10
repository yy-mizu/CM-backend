const db = require("../models").A_Vehicle;

const getAllA_Vehicle = async (req, res) => {
    try {
        const a_objectives = await db.findAll();
        if (a_objectives.length > 0) {
            res.status(200).json(a_objectives);
        } else {
            res.status(404).json({ message: "No A_Objective found" });
        }
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

const getA_VehicleById = async (req, res) => {
    try {
        const a_objective = await db.findOne({ where: { id: req.params.id } });
        if (a_objective) {
            res.status(200).json(a_objective);
        } else {
            res.status(404).json({ message: "A_Objective Not Found" });
        }
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

const createA_Vehicle= async (req, res) => {
    try {
        const { a_objId, vehicleId, assignedDate } = req.body;
        const newA_Vehicle = await db.create({ a_objId, vehicleId, assignedDate});
        res.status(201).json(newA_Vehicle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateA_Vehicle = async (req, res) => {
    try {
        const a_objective = await db.findOne({ where: { id: req.params.id } });
        if (!a_objective) {
            return res.status(404).json({ message: "A_Objective Not Found" });
        }

        await db.update(req.body, { where: { id: req.params.id } });
        res.status(200).json({ message: "A_Objective Updated Successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

const deleteA_Vehicle = async (req, res) => {
    try {
        const a_objective = await db.findOne({ where: { id: req.params.id } });
        if (!a_objective) {
            return res.status(404).json({ message: "A_Objective Not Found" });
        }

        await db.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: "A_Objective Deleted Successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

module.exports = {
    getAllA_Vehicle,
    getA_VehicleById,
    createA_Vehicle,
    updateA_Vehicle,
    deleteA_Vehicle
};
