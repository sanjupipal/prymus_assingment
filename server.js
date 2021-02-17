const { sequelize, user } = require("./models");
const express = require("express");

const app = express();
app.use(express.json());

app.get("/users/:department", async (req, res) => {
  const { department } = req.params;
  try {
    const users = await user.findAll({ where: { department } });
    return res.json(users);
  } catch (error) {
    console.error(error.message);
    res.send("Server error");
  }
});
app.get("/users", async (req, res) => {
  try {
    const users = await user.findAll();
    return res.json(users);
  } catch (error) {
    console.error(error.message);
    res.send("Server error");
  }
});

app.get("/department", async (req, res) => {
  try {
    const users = await user.findAll({
      group: ["department"],
      attributes: [
        "department",
        [sequelize.fn("COUNT", "department"), "departmentCount"],
      ],
    });
    return res.json(users);
  } catch (error) {
    console.error(error.message);
    res.send("Server error");
  }
});

app.listen({ port: 5000 }, async () => {
  console.log("Server up at 5000");
  await sequelize.authenticate();
  console.log("Database Connected");
});
