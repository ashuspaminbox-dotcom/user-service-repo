const x = 10
const express = require("express");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(express.json());

// routes should go here
app.use("/api/users", userRoutes);

// health check
app.get("/health", (req, res) => {
  res.json({ status: "UP", service: "user-service" });
});

module.exports = app;
