const path = require('path');
const PORT = 8090;
const cors = require('cors');

// Create express server
const express = require('express');
const app = express();

// Set up cors middleware
// otherwise socket.io will run into cors errors
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

// Create http server
// socket.io should be attached to an http server, not an express server
// We explicitly create the httpServer here. Alternatively, you can also do
//   `const httpServer = app.listen(PORT, () => {...})`
const http = require('http');
const httpServer = http.createServer(app);

// Initialize the socket.io server
// Note that this changed in socket.io v4
// https://stackoverflow.com/questions/71866234/not-a-constructor-error-if-i-upgrade-socket-io
const { Server } = require('socket.io');
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

// // serve index.html
// app.get('/', (req, res) => {
//   return res
//     .status(200)
//     .sendFile(path.resolve(__dirname, '../client/index.html'));
// });

// create socket interface
let mySocket;
io.on('connection', (socket) => {
  console.log('client connected to backend');
  mySocket = socket;
});

// when a client sends a get request to /test route, emit 'serverEvent' to all clients
app.get('/test', (req, res) => {
  console.log('back received get request, emitting 999 to all clients');
  mySocket.emit('serverEvent', 999);
  res.status(200).json({});
});

// set http server to listen to PORT
// Note that socket.io is attached to http server, so we need http server to listen for socket connection to work
// Also note that http server was created from express server and we do not need a separate listener for app
// Alternatively, we could have also done:
//   `const httpServer = app.listen(PORT, () => {...})`
// Howevever, aesthetically I like putting listen at the end of the file
httpServer.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
