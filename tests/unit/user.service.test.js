const service = require("../../src/services/user.service");

describe("User Service Unit Tests", () => {

  test("should return all users", () => {
    const users = service.getUsers();

    expect(users.length).toBe(2);
    expect(users[0].name).toBe("Alice");
  });

  test("should get user by id", () => {
    const user = service.getUserById(1);

    expect(user).toBeDefined();
    expect(user.name).toBe("Alice");
  });

  test("should return undefined for invalid user", () => {
    const user = service.getUserById(999);

    expect(user).toBeUndefined();
  });

  test("should create new user", () => {
    const newUser = service.createUser({ name: "Charlie" });

    expect(newUser.name).toBe("Charlie");
    expect(newUser.id).toBeDefined();
  });

});
