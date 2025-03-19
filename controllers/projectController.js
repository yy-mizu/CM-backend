const db = require("../models");

const getAllProjects = async (req, res) => {
    try {
        const projects = await db.Project.findAll();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

const getProjectById = async (req, res) => {
    try {
        const project = await db.Project.findOne({ where: { id: req.params.id } });
        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({ message: "Project Not Found" });
        }
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

const createProject = async (req, res) => {
    try {
        const newProject = await db.Project.create(req.body);
        res.status(201).json(newProject);
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

const updateProject = async (req, res) => {
    try {
        const project = await db.Project.findOne({ where: { id: req.params.id } });
        if (!project) {
            return res.status(404).json({ message: "Project Not Found" });
        }
        await db.Project.update(req.body, { where: { id: req.params.id } });
        res.status(200).json({ message: "Project Updated Successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

const deleteProject = async (req, res) => {
    try {
        const project = await db.Project.findOne({ where: { id: req.params.id } });
        if (!project) {
            return res.status(404).json({ message: "Project Not Found" });
        }
        await db.Project.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: "Project Deleted Successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

module.exports = {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
};
