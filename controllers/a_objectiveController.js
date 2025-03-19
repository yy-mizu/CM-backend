const db = require("../models").A_Objective;

const getAllA_Objective = async (req, res) => {
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

const getA_ObjectiveById = async (req, res) => {
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

const createA_Objective = async (req, res) => {
    try {
        const existingA_Objective = await db.findOne({ where: { name: req.body.name } });
        if (existingA_Objective) {
            return res.status(400).json({ message: "A_Objective already exists" });
        }

        const newA_Objective = await db.create(req.body);
        res.status(201).json(newA_Objective);
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

const updateA_Objective = async (req, res) => {
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

const deleteA_Objective = async (req, res) => {
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
    getAllA_Objective,
    getA_ObjectiveById,
    createA_Objective,
    updateA_Objective,
    deleteA_Objective
};
