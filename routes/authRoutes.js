// routes/authRoutes.js

const express = require("express");
const router = express.Router();
const { login } = require("../controllers/loginController");

// Define a POST route for login
router.post("/login", login);

module.exports = router;
