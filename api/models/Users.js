const { getDb, connectToDb } = require('../db')
const { ObjectId } = require('mongodb');

connectToDb(() => {
  db = getDb()
})


class User {
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
    this.score = data.score;
  }

  static get all() {
    return new Promise(async (res, rej) => {
      try {
        const dbData = await db.collection('users').find({}).toArray();
        //wait for us to find all of the users, not specifying anything in curly brackets. convert JSON object to a list (array).  

        const users = dbData.map((d) => new User(d));
        //for each record, make a JS user object. turn each one into an user so you can send it back

        if (!users.length) {
          throw new Error('Could Not Find Any Users!');
        }

        res(users);
      } catch (err) {
        rej(`Error retrieving habits: ${err.message}`);
      }
    });
  }

  static create({ username, score }) {
    return new Promise(async (res, rej) => {
      try {
        let newUser = {
          username: username,
          score: score
        };

        const createUser = await db
          .collection('users')
          .insertOne(newUser);

        let user = new User(createUser);

        res(user);
      } catch (err) {
        rej(`Error Creating User: ${err}`);
      }
    });
  }

  static findByUsername(username) {
    return new Promise(async (res, rej) => {
      try {
        const findUser = await db
          .collection('users')
          .findOne({ username: username });

        res(new User(findUser));
      } catch (err) {
        rej(`Error Retrieving User: ${err}`);
      }
    });
  }

  static updateScore(username, score) {
    return new Promise(async (res, rej) => {
      try {
        const updateUser = await db
          .collection('users')
          .updateOne(
            { username: username },
            { $set: score }
          );

        res(User(updateUser));
      } catch (err) {
        rej(`Error Updating User: ${err}`);
        console.log(err)
      }
    });
  }

  static deleteByUser(username) {
    return new Promise(async (res, rej) => {
      try {
        const deleteUser = await db
          .collection('users')
          .deleteOne(
            { username: username },
          );

        res(new User(deleteUser));
      } catch (err) {
        rej(`Error Updating User: ${err}`);
        console.log(err)
      }
    });
  }
};

module.exports = User;
