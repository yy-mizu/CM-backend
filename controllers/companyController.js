const { Company } = require("../models");

const createCompany = async (req, res) => {
  try {
    const { name, address, phoneNumber, email } = req.body;
    const company = await Company.create({ name, address, phoneNumber, email });
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findByPk(id);
    if (!company) return res.status(404).json({ error: "Company not found" });
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, phoneNumber, email } = req.body;
    const company = await Company.findByPk(id);
    if (!company) return res.status(404).json({ error: "Company not found" });

    await company.update({ name, address, phoneNumber, email });
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findByPk(id);
    if (!company) return res.status(404).json({ error: "Company not found" });

    await company.destroy();
    res.status(200).json({ message: "Company deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
};
