const db = require("../models").Employee;

// GET all employees
const getAllEmployees = async (req, res) => {
    try {
        const employees = await db.findAll();
        if (employees.length > 0) {
            res.status(200).json(employees);
        } else {
            res.status(404).json({ message: "No employees found" });
        }
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

// GET employee by ID
const getEmployeesById = async (req, res) => {
    try {
        const employee = await db.findOne({ where: { id: req.params.id } });
        if (employee) {
            res.status(200).json(employee);
        } else {
            res.status(404).json({ message: "Employee not found" });
        }
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

// CREATE new employee
const createEmployees = async (req, res) => {
    try {
        const { name, email, phoneNumber, role, displayName, teamid, status } = req.body;
        const newEmployee = await db.create({ name, email, phoneNumber, role, displayName, teamid, status });
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE employee by ID
const updateEmployees = async (req, res) => {
    try {
        const employee = await db.findOne({ where: { id: req.params.id } });
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        await db.update(req.body, { where: { id: req.params.id } });
        res.status(200).json({ message: "Employee updated successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

// DELETE employee by ID
const deleteEmployees = async (req, res) => {
    try {
        const employee = await db.findOne({ where: { id: req.params.id } });
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        await db.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: "Employee deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

module.exports = {
    getAllEmployees,
    getEmployeesById,
    createEmployees,
    updateEmployees,
    deleteEmployees,
};
