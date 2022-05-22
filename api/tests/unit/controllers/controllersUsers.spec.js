const usersController = require("../../../controllers/users");
const User = require("../../../models/Users");

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn((code) => ({
  send: mockSend,
  json: mockJson,
  end: jest.fn(),
}));
const mockRes = { status: mockStatus };

describe("Users controller", () => {
  beforeEach(() => jest.clearAllMocks());

  afterAll(() => jest.resetAllMocks());

  describe("index", () => {
    test("it returns user with a 200 status code", async () => {
      jest.spyOn(User, "all", "get").mockResolvedValue(["scralf", "test"]);
      await usersController.index(null, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockJson).toHaveBeenCalledWith(["scralf", "test"]);
    });
  });

  describe("show", () => {
    test("it returns a user with a 200 status code", async () => {
      let username = {
        username: "test",
        score: 4,
      };
      jest.spyOn(User, "findByUsername").mockResolvedValue(new User(username));

      const mockReq = { params: { id: 1 } };
      await usersController.show(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockJson).toHaveBeenCalledWith(new User(username));
    });
  });

  describe("create", () => {
    test("it returns a new user with a 201 status code", async () => {
      let username = {
        username: "tests",
        score: 5,
      };
      jest.spyOn(User, "create").mockResolvedValue(new User(username));

      const mockReq = { body: username };
      await usersController.create(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(201);
      expect(mockJson).toHaveBeenCalledWith(new User(username));
    });
  });

  // describe('destroy', () => {
  //     test('it returns a 204 status code on successful deletion', async () => {
  //         jest.spyOn(User.prototype, 'destroy')
  //             .mockResolvedValue('Deleted');

  //         const mockReq = { params: { username: "" } }
  //         await usersController.destroy(mockReq, mockRes);
  //         expect(mockStatus).toHaveBeenCalledWith(204);
  //     })
  // });
});
