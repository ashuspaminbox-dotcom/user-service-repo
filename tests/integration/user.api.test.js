const request = require("supertest");
const app = require("../../src/app");

describe("User API Integration Tests", () => {

  test("GET /health should return status UP", async () => {
    const res = await request(app).get("/health");

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("UP");
  });

  test("GET /api/users should return all users", async () => {
    const res = await request(app).get("/api/users");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("GET /api/users/1 should return Alice", async () => {
    const res = await request(app).get("/api/users/1");

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Alice");
  });

  test("GET /api/users/999 should return 404", async () => {
    const res = await request(app).get("/api/users/999");

    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe("User not found");
  });

  test("POST /api/users should create user", async () => {
    const res = await request(app)
      .post("/api/users")
      .send({ name: "David" });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("David");
  });

});
