const db = require("../models").Objective;


const getAllObjective= async (req, res) => {
    try {
        const objective = await db.findAll();
        if (objective.length > 0) {
            res.status(200).json(users);
        } else {
            res.status(404).json({ message: "No objective found" });
        }
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};


const getObjectivelById = async (req, res) => {
    try {
        const objective = await db.findOne({ where: { id: req.params.id } });
        if (objective) {
            res.status(200).json(company);
        } else {
            res.status(404).json({ message: "objective Not Found" });
        }
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};


const createObjective= async (req, res) => {
    try {
        const existingObjective = await db.findOne({ where: { name: req.body.name } });
        if (existingObjective) {
            return res.status(400).json({ message: "objective already exists" });
        }

        const newObjective = await db.create(req.body);
        res.status(201).json(newObjective);
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

const updateObjective = async (req, res) => {
    try {
        const objective = await db.findOne({ where: { id: req.params.id } });
        if (!objective) {
            return res.status(404).json({ message: "objective Not Found" });
        }

        await db.update(req.body, { where: { id: req.params.id } });
        res.status(200).json({ message: "objective Updated Successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};


const deleteObjective = async (req, res) => {
    try {
        const objective = await db.findOne({ where: { id: req.params.id } });
        if (!objective) {
            return res.status(404).json({ message: "objective Not Found" });
        }

        await db.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: "objective Deleted Successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

module.exports = {
    getAllObjective,
    getObjectivelById,
    createObjective,
    updateObjective,
    deleteObjective
};
