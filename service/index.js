const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

//A user includes the following:
//username, password, token
//let users = [];

//A score includes the following:
//username, score
let scores = [];
let globalCount = 0;

//Set the port to 4000
const port = process.argv.length > 2 ? process.argv[2] : 4000;
//Cause express static middleware to serve files from the public directory

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);


// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  console.log(`Create was hit. Username: ${req.body.username} Password: ${req.body.password}`);
  if (await findUser('username', req.body.username)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.username, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ username: user.username });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  console.log(`Login was hit. Username: ${req.body.username} Password: ${req.body.password}`);
  const user = await findUser('username', req.body.username);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      await DB.updateUser(user);
      setAuthCookie(res, user.token);
      res.send({ username: user.username });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
    DB.updateUser(user);
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

apiRouter.get('/checkauth', verifyAuth, (req, res) => {
  res.status(200).send({ msg: 'Authorized'})
})

// GetScores
apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});

// SubmitScore
apiRouter.post('/score', verifyAuth, (req, res) => {
  console.log(`Submit score was hit. Username: ${req.body.username} Score: ${req.body.score}`);
  scores = updateScores(req.body);
  res.send(scores);
});

apiRouter.get('/globalcount', (_req, res) => {
  res.send(globalCount);
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

//Updates a user's score, or creates a new row if this is the first time.
//Updates the globalCount.
function updateScores(newScore) {
  let found = false;
  let scoreDiff = 1;
  for (const [i, prevScore] of scores.entries()) {
    if (newScore.username == prevScore.username) {
      //scoreDiff = (newScore.score - prevScore.score);
      //prevScore.score = newScore.score;
      prevScore.score = parseInt(prevScore.score) + parseInt(1);
      found = true;
      globalCount = parseInt(globalCount) + parseInt(scoreDiff);
      break;
    }
  }
  if (!found) {
    newScore.score = 1;
    scores.push(newScore);
    globalCount = parseInt(globalCount) + parseInt(newScore.score);
  }
  console.log(`New global count: ${globalCount}`);
  

  return scores;
}

async function createUser(username, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: username,
    password: passwordHash,
    token: uuid.v4(),
  };
  //users.push(user);
  await DB.addUser(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;
  //return users.find((u) => u[field] === value);
  if (field === 'token') {
    return DB.getUserByToken(value);
  }
  return DB.getUser(value);

  
}

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});