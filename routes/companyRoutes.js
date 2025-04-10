const express = require("express");
const {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
} = require("../controllers/companyController");

const router = express.Router();

router.post("/create", createCompany);
router.get("/list", getCompanies);
router.get("/list/:id", getCompanyById);
router.put("/edit/:id", updateCompany);
router.delete("/delete/:id", deleteCompany);

module.exports = router;
