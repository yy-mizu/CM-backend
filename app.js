const express = require('express');
const app = express();
const port = 2244;

// Import routes
const companyRoutes = require("./routes/companyRoutes");
const userRoutes = require("./routes/userRoutes");
const teamRoutes = require("./routes/teamRoutes");
const authRoutes = require("./routes/authRoutes");
const employeesRoutes = require("./routes/EmployeesRoutes");
const projectRoutes = require("./routes/projectRoutes");
const personalRoutes = require("./routes/personalRoutes");
const a_objectiveRoutes = require("./routes/a_objectiveRoutes");
const a_vehiclesRoutes = require("./routes/a_vehiclesRoutes");
const vehiclesRoutes = require("./routes/vehiclesRoutes");
const objectiveROutes = require("./routes/objectiveRoutes");

// Middleware
app.use(express.json());

// Route definitions
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/companies", companyRoutes);
app.use("/team", teamRoutes);
app.use("/employees", employeesRoutes);
app.use("/projects", projectRoutes);
app.use("/personal", personalRoutes);
app.use("/a_objective", a_objectiveRoutes);
app.use("/a_vehicles", a_vehiclesRoutes);
app.use("/vehicles", vehiclesRoutes);
app.use("/objective",objectiveROutes)
// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
