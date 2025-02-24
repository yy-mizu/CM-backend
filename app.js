const express = require('express');
const companyRoutes = require("./routes/companyRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello, Node!');
// });






app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/companies", companyRoutes);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
