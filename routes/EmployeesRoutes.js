const express = require('express');
const router = express.Router();
const EmployeesController = require('../controllers/employeesController');

router.get('/list', EmployeesController.getAllEmployees);  // Get all users
router.get('/:id', EmployeesController.getEmployeesById);  // Get a single user by ID
router.post('/create', EmployeesController.createEmployees);  // Create user
router.put('/edit/:id', EmployeesController.updateEmployees);  // Update user
router.delete('/delete/:id', EmployeesController.deleteEmployees);  // Delete user

module.exports = router;