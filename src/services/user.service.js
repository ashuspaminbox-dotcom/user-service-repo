let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

exports.getUsers = () => users;

exports.getUserById = (id) => {
  return users.find(u => u.id == id);
};

exports.createUser = (data) => {
  const newUser = {
    id: users.length + 1,
    name: data.name
  };

  users.push(newUser);
  return newUser;
};
exports.__resetUsers = () => {
  users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];
};
