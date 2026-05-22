const service = require("../services/user.service");

exports.getUsers = (req, res) => {
  res.json(service.getUsers());
};

exports.getUserById = (req, res) => {
  const user = service.getUserById(req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

exports.createUser = (req, res) => {
  const user = service.createUser(req.body);
  res.status(201).json(user);
};
