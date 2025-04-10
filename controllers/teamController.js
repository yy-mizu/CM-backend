const db = require("../models").Team;

const getAllTeam = async (req, res) => {
    try {
        const teams = await db.findAll();
        if (teams.length > 0) {
            res.status(200).json(teams);
        } else {
            res.status(404).json({ message: "No Team found" });
        }
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

const getTeamById = async (req, res) => {
    try {
        const team = await db.findOne({ where: { id: req.params.id } });
        if (team) {
            res.status(200).json(team);
        } else {
            res.status(404).json({ message: "Team Not Found" });
        }
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

const createTeam = async (req, res) => {
    try {
        const existingTeam = await db.findOne({ where: { teamName: req.body.teamName } });
        if (existingTeam) {
            return res.status(400).json({ message: "Team already exists" });
        }

        const newTeam = await db.create(req.body);
        res.status(201).json(newTeam);
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

const updateTeam = async (req, res) => {
    try {
        const team = await db.findOne({ where: { id: req.params.id } });
        if (!team) {
            return res.status(404).json({ message: "Team Not Found" });
        }

        await db.update(req.body, { where: { id: req.params.id } });
        res.status(200).json({ message: "Team Updated Successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

const deleteTeam = async (req, res) => {
    try {
        const team = await db.findOne({ where: { id: req.params.id } });
        if (!team) {
            return res.status(404).json({ message: "Team Not Found" });
        }

        await db.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: "Team Deleted Successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

module.exports = {
    getAllTeam,
    getTeamById,
    createTeam,
    updateTeam,
    deleteTeam
};