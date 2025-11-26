const { WebSocketServer } = require('ws');
const DB = require('./database.js');

class EventMessage {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value;
  }
}

function peerProxy(httpServer) {
  // Create a websocket object
  const socketServer = new WebSocketServer({ server: httpServer });

  let globalCount = {theKey: 'global', score: 0};

  socketServer.on('connection', (socket) => {
    socket.isAlive = true;
    console.log("received client");
    // Forward messages to everyone except the sender
    socket.on('message', function message(data) {
      socketServer.clients.forEach((client) => {
        if (client !== socket && client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      });
    });

    // Respond to pong messages by marking the connection alive
    socket.on('pong', () => {
      socket.isAlive = true;
    });
  });

  // Periodically send out a ping message to make sure clients are alive
  setInterval(() => {
    socketServer.clients.forEach(function each(client) {
      if (client.isAlive === false) return client.terminate();

      client.isAlive = false;
      client.ping();
    });
  }, 10000);

  async function updateCounter() {
  globalCount = await DB.getGlobalScore();
  }
  const intervalId = setInterval(updateCounter, 1000);

  setInterval(() => {
    const event = new EventMessage('theServer', 'receiveGlobalScore', globalCount.score);
    console.log("client count: %d", socketServer.clients.size);
    socketServer.clients.forEach(function each(client) {
      client.send(JSON.stringify(event));
    });
  }, 1000);
}

module.exports = { peerProxy };
