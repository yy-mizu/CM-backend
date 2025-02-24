const { User } = require("../models");

exports.login = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;

    // Find user by email (using Sequelize findOne)
    const user = await User.findOne({ where: { email } });
    
    if (!user && user.password !== password) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    
    // Compare the provided password with the plain text password stored in the database
    // if (user.password !== password) {
    //   return res.status(401).json({ error: "Invalid email or password" });
    // }
    
    // Remove password before sending user data
    const { password: _, ...userWithoutPassword } = user.dataValues;
    
    // Return the user object (or token, if implementing JWT)
    return res.status(200).json(userWithoutPassword);
    
  } catch (error) {
    console.error("Login error: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
