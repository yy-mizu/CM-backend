const express = require("express");
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/create", createUser);
router.get("/list", getUsers);
router.get("/list/:id", getUserById);
router.put("/edit/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
