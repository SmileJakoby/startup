const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const scoreCollection = db.collection('score');
const globalScoreCollection = db.collection('globalScore');

(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connected to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(username) {
  return userCollection.findOne({ username: username });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ username: user.username }, { $set: user });
}

async function addScore(score) {
  return scoreCollection.insertOne(score);
}

async function updateScore(score) {
  return scoreCollection.updateOne({username: score.username}, { $set: score});
}

function getHighScores() {
  const query = { score: { $gt: 0} };
  const options = {
    sort: { score: -1 },
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}

async function createGlobalScore(globalScore) {
    await globalScoreCollection.insertOne(globalScore);
}

async function getGlobalScore() {
  return globalScoreCollection.findOne({ theKey: 'global' });
}

async function updateGlobalScore(globalScore) {
  return scoreCollection.updateOne({theKey: 'global'}, { $set: globalScore});
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addScore,
  updateScore,
  getHighScores,
  createGlobalScore,
  getGlobalScore,
  updateGlobalScore,
};