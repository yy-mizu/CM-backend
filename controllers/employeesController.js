const db = require("../models").Employees;


const getAllEmployees= async (req, res) => {
    try {
        const company = await db.findAll();
        if (companies.length > 0) {
            res.status(200).json(users);
        } else {
            res.status(404).json({ message: "No Company found" });
        }
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};


const getEmployeesById = async (req, res) => {
    try {
        const company = await db.findOne({ where: { id: req.params.id } });
        if (company) {
            res.status(200).json(company);
        } else {
            res.status(404).json({ message: "Company Not Found" });
        }
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};


const createEmployees= async (req, res) => {
    try {
        const existingCompany = await db.findOne({ where: { name: req.body.name } });
        if (existingCompany) {
            return res.status(400).json({ message: "Company already exists" });
        }

        const newCompany = await db.create(req.body);
        res.status(201).json(newCompany);
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

const updateEmployees = async (req, res) => {
    try {
        const company = await db.findOne({ where: { id: req.params.id } });
        if (!company) {
            return res.status(404).json({ message: "Company Not Found" });
        }

        await db.update(req.body, { where: { id: req.params.id } });
        res.status(200).json({ message: "Company Updated Successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};


const deleteEmployees = async (req, res) => {
    try {
        const company = await db.findOne({ where: { id: req.params.id } });
        if (!company) {
            return res.status(404).json({ message: "Company Not Found" });
        }

        await db.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: "Company Deleted Successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

module.exports = {
    getAllEmployees,
    getEmployeesById,
    createEmployees,
    updateEmployees,
    deleteEmployees
};
