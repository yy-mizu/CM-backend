const express = require('express');
const router = express.Router();
const EmployeesController = require('../controllers/employeesController');

router.get('/list', employeesController.getAllEmployees);  // Get all users
router.get('/:id', employeesController.getEmployeesById);  // Get a single user by ID
router.post('/create', employeesController.createEmployees);  // Create user
router.put('/edit/:id', employeesController.updateEmployees);  // Update user
router.delete('/delete/:id', employeesController.deleteEmployees);  // Delete user

module.exports = router;