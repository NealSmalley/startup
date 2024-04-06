/*const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const db = client.db('rental');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});
*/


const { MongoClient} = require('mongodb');
const config = require('./dbConfig.json');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('Start');
const userCollection = db.collection('user');
const employerCollection = db.collection('employer');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUserByToken(token) {
  return userCollection.findOne({ token: token})
}



function addEmployer(employer) {
  employerCollection.insertOne(employer);
}

function getUser(email) {
  console.log(email);
  return userCollection.findOne({ email: email });
}

async function createUser(email, password) {
  const hashed_password = await bcrypt.hash(password, 10);
  const token = uuid.v4();
  const user = {email: email, password: hashed_password, token: token};
  await userCollection.insertOne(user);
  return user;
}
module.exports = {
  getUser, createUser, addEmployer, getUserByToken
};