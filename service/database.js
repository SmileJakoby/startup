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


async function updateScore(score) {
  prevScore = await scoreCollection.findOne({username: score.username});
  if (prevScore == null)
  {
    prevScore = score
    prevScore.score = 0;
  }
  prevScore.score = parseInt(prevScore.score) + parseInt(1);
  
  return scoreCollection.updateOne({username: score.username}, { $set: prevScore}, {upsert: true});
}

function getHighScores() {
  const query = { score: { $gt: 0} };
  const options = {
    sort: { score: -1 },
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}



async function getGlobalScore() {
  return globalScoreCollection.findOne({ theKey: 'global'});
}

async function updateGlobalScore(globalScore) {
  prevScore = await globalScoreCollection.findOne({theKey: 'global'});
  if (prevScore == null)
  {
    prevScore = globalScore
    prevScore.score = 0;
  }
  prevScore.score = parseInt(prevScore.score) + parseInt(1);
  
  return globalScoreCollection.updateOne({theKey: 'global'}, { $set: prevScore}, {upsert: true});
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  updateScore,
  getHighScores,
  getGlobalScore,
  updateGlobalScore,
};