const app = require("./app");
const userRoutes = require("./routes/user.routes");

app.use("/api/users", userRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "UP", service: "user-service" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});
