import React, { useEffect } from 'react';
import io from 'socket.io-client';

let mySocket;

function App() {
  useEffect(() => {
    mySocket = io.connect('http://localhost:8090/');
    console.log('emitting "join room" to server');
  }, []);

  return <h1>Hello sdfasdf</h1>;
}

export default App;
