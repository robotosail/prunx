//"use strict";

let activate = document.getElementById("mic-icon");

  let mic = document.getElementById("mic");
// accessing the webcam using js
function web(e){
    // setting the constraint to hold the mic
  let constraints = {audio: true};
  
  navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream){
    
      //allows video to play
  mic.srcObject = mediaStream;
  mic.play();
  
   /*occurs when there is an error*/
  }).catch(function(err){
    alert("This site cannot use your webcam because: " + err.message+ " please fix it and try again");
    document.getElementById("mic").remove();
  });
}

activate.addEventListener("mousedown", web);