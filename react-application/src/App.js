import './App.css';
import { FaceMesh } from '@mediapipe/face_mesh';
import * as Facemesh from '@mediapipe/face_mesh';
import * as cam from '@mediapipe/camera_utils';
import Webcam from 'react-webcam';
import React, { useEffect, useRef } from 'react'

function App() {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)
  const connect = window.drawConnectors;
  var camera=null;
  function onResults(results) {
    // const video = webcamRef.current.video;
    // const videoWidth = webcamRef.current.video.videoWidth;
    // const videoHeight = webcamRef.current.video.videoHeight;
    // Set canvas width
    canvasRef.current.width = webcamRef.current.video.videoWidth;
    canvasRef.current.height = webcamRef.current.video.videoHeight;
    // canvasRef.current.width =canvasRef.current;
    // canvasRef.current.height = canvasRef.current;

    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );
    if (results.multiFaceLandmarks) {
      for (const landmarks of results.multiFaceLandmarks) {
        // connect(canvasCtx, landmarks, Facemesh.FACEMESH_TESSELATION, {
        //   color: "#C0C0C070",
        //   lineWidth: 1,
        // });
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_RIGHT_EYE, {
          color: "green",  lineWidth: 2
        });
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_RIGHT_EYEBROW, {
          color: "green", lineWidth: 2
        });
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_LEFT_EYE, {
          color: "green", lineWidth: 2
        });
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_LEFT_EYEBROW, {
          color: "green", lineWidth: 2
        });
        // connect(canvasCtx, landmarks, Facemesh.FACEMESH_FACE_OVAL, {
        //   color: "#E0E0E0",
        // });
        // connect(canvasCtx, landmarks, Facemesh.FACEMESH_LIPS, {
        //   color: "#E0E0E0",
        // });
      
      }
    
    }
    canvasCtx.restore();
  

  }
  useEffect(() => {
    
    return () => {
      const faceMesh=new FaceMesh
      ({
        
        locateFile:(file)=>{
          return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
        }
      })
      console.log("facceMesh",faceMesh);
     
      faceMesh.setOptions({
        maxNumFaces: 1,
        refineLandmarks: true,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
        selfieMode:true,
      });
      faceMesh.onResults(onResults);
     if (typeof webcamRef.current !== 'undefined' && webcamRef.current!==null){
       camera=new cam.Camera(webcamRef.current.video,{
         onFrame:async()=>{
           await faceMesh.send({image:webcamRef.current.video})
         },
         width: 640,
         height: 480
       })
       camera.start();
     }
    }
  },[])

  return (
    <>
    
      <Webcam   ref={webcamRef}style={{
        position: 'absolute', 
        marginRight: 'auto',
        marginLeft: 'auto',
         left: 0, 
         right: 0,
          textAlign: 'center', 
          zIndex: 9, 
          Width: 640,
           height: 480
      }} />
      <canvas  ref={canvasRef} style={{
        position: 'absolute', 
        marginRight: 'auto',
        marginLeft: 'auto',
         left: 0, 
         right: 0,
          textAlign: 'center', 
          zIndex: 9, 
          Width: 640,
           height: 480
      }}/>
    </>
  );
}

export default App;
