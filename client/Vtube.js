import { useRef } from 'react';
import React from 'react';

/*
  When button is clicked, getUserMedia() is called
  getUserMedia() requests stream from media devices
  stream is assigend to React hook localVideoRef
  Hook updates <video> and plays webcam
*/
const DisplayWebcam = () => {
  // localVideoRef is a React hook
  const localVideoRef = useRef();
  // getUserMedia() requests a stream from the webcam and assigns it to localVideoRef
  const getUserMedia = () => {
    const constraints = {
      audio: false,
      video: true,
    };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        localVideoRef.current.srcObject = stream;
      })
      .catch((e) => {
        console.log('getUserMedia error ', e);
      });
  };

  return (
    <div className="App" style={{ margin: 10 }}>
      <button
        onClick={() => {
          getUserMedia();
        }}
      >
        Get access to camera and microphone
      </button>
      <video ref={localVideoRef} autoPlay></video>
    </div>
  );
};

export default DisplayWebcam;
