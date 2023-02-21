const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');

const httpServer = http.createServer(app);
const path = require('path');
const PORT = 8090;
const { Server: SocketIoServer } = require('socket.io'); // https://stackoverflow.com/questions/71866234/not-a-constructor-error-if-i-upgrade-socket-io
const io = new SocketIoServer(httpServer, {
  cors: {
    origin: '*',
  },
});

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

// serve index.html
app.get('/', (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../client/index.html'));
});

let mySocket;
io.on('connection', (socket) => {
  console.log('client connected');
  mySocket = socket;
});

app.get('/test', (req, res) => {
  console.log('http get request received on backend');
  mySocket.emit('serverEvent', 999);
  res.status(200).json({});
});

// start server
httpServer.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
