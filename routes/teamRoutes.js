const express = require('express');
const router = express.Router();
const TeamController = require('../controllers/teamController');

router.get('/list', TeamController.getAllTeam);  // Get all users
router.get('/:id', TeamController.getTeamById);  // Get a single user by ID
router.post('/create', TeamController.createTeam);  // Create user
router.put('/edit/:id', TeamController.updateTeam);  // Update user
router.delete('/delete/:id', TeamController.deleteTeam);  // Delete user

module.exports = router;