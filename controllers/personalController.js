const db = require("../models").Personal;

const getAllAssignedPersonal = async (req, res) => {
    try {
        const assignedPersonal = await db.AssignedPersonal.findAll();
        res.status(200).json(assignedPersonal);
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

const getAssignedPersonalById = async (req, res) => {
    try {
        const assignedPersonal = await db.AssignedPersonal.findOne({ where: { id: req.params.id } });
        if (assignedPersonal) {
            res.status(200).json(assignedPersonal);
        } else {
            res.status(404).json({ message: "Assigned Personal Not Found" });
        }
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

const createAssignedPersonal = async (req, res) => {
    try {
        const { assignedObject, employeeId, assignedDate } = req.body;
        const newAssignedPersonal = await db.create({assignedObject, employeeId, assignedDate });
        res.status(201).json(newAssignedPersonal);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateAssignedPersonal = async (req, res) => {
    try {
        const assignedPersonal = await db.AssignedPersonal.findOne({ where: { id: req.params.id } });
        if (!assignedPersonal) {
            return res.status(404).json({ message: "Assigned Personal Not Found" });
        }
        await db.AssignedPersonal.update(req.body, { where: { id: req.params.id } });
        res.status(200).json({ message: "Assigned Personal Updated Successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

const deleteAssignedPersonal = async (req, res) => {
    try {
        const assignedPersonal = await db.AssignedPersonal.findOne({ where: { id: req.params.id } });
        if (!assignedPersonal) {
            return res.status(404).json({ message: "Assigned Personal Not Found" });
        }
        await db.AssignedPersonal.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: "Assigned Personal Deleted Successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

module.exports = {
    getAllAssignedPersonal,
    getAssignedPersonalById,
    createAssignedPersonal,
    updateAssignedPersonal,
    deleteAssignedPersonal
};