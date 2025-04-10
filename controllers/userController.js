const { User, Company } = require("../models");

const createUser = async (req, res) => {
  try {
    const { name, email, phoneNumber, companyId ,password } = req.body;

    const company = await Company.findByPk(companyId);
    if (!company) return res.status(404).json({ error: "User not found" });

    const user = await User.create({ name, email, phoneNumber, companyId , password });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({ include: { model: Company, as: "company" } });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, { include: { model: Company, as: "company" } });
    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phoneNumber, companyId } = req.body;
    
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: "User not found" });

    if (companyId) {
      const company = await Company.findByPk(companyId);
      if (!company) return res.status(404).json({ error: "Company not found" });
    }

    await user.update({ name, email, phoneNumber, companyId });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: "User not found" });

    await user.destroy();
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
