const request = require("supertest");
const fs = require("fs");
const app = require("../../app.js");

// const resetTestDB = () => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       resolve("Test DB reset");
//     } catch (err) {
//       reject(`Test DB could not be reset: ${err} in ${err.file}`);
//     }
//   });
// };

global.request = request;
global.app = app;
// global.resetTestDB = resetTestDB;
global.port = process.env.PORT || 3001;
