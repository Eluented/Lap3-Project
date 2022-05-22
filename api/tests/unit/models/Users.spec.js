const User = require("../../../models/Users");
const { MongoClient } = require("mongodb");

const connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = await connection.db(globalThis.__MONGO_DB_NAME__);

describe("User", () => {
  beforeEach(() => jest.clearAllMocks());

  afterAll(() => jest.resetAllMocks());

  describe("all", () => {
    test("it resolves with user on successful db query", async () => {
      jest.spyOn(db, "query").mockResolvedValueOnce();
      const all = await User.all;
      expect(all).toHaveLength(3);
    });
  });

  describe("findById", () => {
    test("it resolves with user on successful db query", async () => {
      let userData = { username: "onur", score: 4 };
      jest.spyOn(db, "query").mockResolvedValueOnce(userData);
      const result = await User.findUserById(1);
      expect(result).toBeInstanceOf(User);
    });
  });
});
