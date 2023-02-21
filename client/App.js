import React, { useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

let mySocket;

function App() {
  useEffect(() => {
    mySocket = io.connect('http://localhost:8090/');
    console.log('emitting "join room" to server');

    mySocket.on('serverEvent', () => {
      console.log('server sent an event to the client');
    });
  }, []);

  return (
    <>
      <h1>Websocket template</h1>
      <button
        onClick={() => {
          axios({
            method: 'get',
            withCredentials: true,
            url: `http://localhost:8090/test`,
          });
        }}
      >
        send request
      </button>
    </>
  );
}

export default App;
