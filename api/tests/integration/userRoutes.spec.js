const app = require("../../app.js");

describe("users endpoints", () => {
  let api;

  beforeAll(async () => {
    api = app.listen(3001, () =>
      console.log("Test server running on port 3001")
    );
  });

  afterAll(async () => {
    console.log("Gracefully stopping test server");
    await api.close();
  });

  it("should return a list of all users in database", async () => {
    const res = await request(api).get("/users");
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(3);
  });

  it("should create a new user", async () => {
    const res = await request(api).post("/users").send({
      username: "onur",
      score: 5,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
  });

  it("should create a new user by a new author", async () => {
    const res = await request(api).post("/users").send({
      username: "onur",
      score: 5,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
    // console.log(res);
  });

  // it('should delete a user', async () => {
  //     const res = await request(api)
  //         .delete('/users/onur')
  //     expect(res.statusCode).toEqual(204);

  // });
});
