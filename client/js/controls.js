//"use strict";
let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;
let crouch = false;
let movespeed = 0.4;
let jumpspeed = 1;
let jumpHeight = 20;
let w = 87;
let a = 65;
let d = 68;
let s = 83;
let shift = 16;
let space = 32;

// // creates a function for movement
let btn = document.getElementById("button");

let  controlers = function(){
btn.addEventListener("click", () => {
  controls.lock();
  controler();
});

function controler() {
  const move = function (e) {
    // alert(e.keyCode);
    switch (e.keyCode) {
      case w: // w
      case 38: // up
        moveForward = true;
        break;
      case a: // a
      case 37: // left
        moveRight = true;
        break;
      case s: // s
      case 40: // back
        moveBackward = true;
        break;
      case d: // d
      case 39: // right
        moveLeft = true;
        break;
      case shift: //shift
        crouch = true;
        break;
      case space: // space
        canJump = true;
        break;
    }
  };

  const move2 = function (e) {
    switch (e.keyCode) {
      case w: // w
      case 38: // up
        moveForward = false;
        break;
      case a: // a
      case 37: // left
        moveRight = false;
        break;
      case s: // s
      case 40: // back
        moveBackward = false;
        break;
      case d: // d
      case 39: // right
        moveLeft = false;
        break;
      case space: // space
        canJump = false;
        break;
      case shift: // shift
        crouch = false;
        break;
    }
  };

  function checkKeyStates() {
    if (moveForward) {
      controls.moveForward(movespeed);
      updatePlayerData();
      sock.emit("updatePosition", playerData);
    }
    if (moveBackward) {
      controls.moveForward(-movespeed);
      updatePlayerData();
      sock.emit("updatePosition", playerData);
    }
    if (moveRight) {
      controls.moveRight(movespeed);
      updatePlayerData();
      sock.emit("updatePosition", playerData);
    }
    if (moveLeft) {
      controls.moveRight(-movespeed);
      updatePlayerData();
      sock.emit("updatePosition", playerData);
    }

    // allows the player to jump
    if (canJump && camera.position.y >= -jumpHeight) {
      camera.position.y -= jumpspeed;
      updatePlayerData();
      sock.emit("updatePosition", playerData);
    setTimeout(function(){
      canJump = false;
    }, 800.5);
    }
    //to make the player come back down after jumping
    else if (canJump === false && camera.position.y <= -7) {
      camera.position.y += jumpspeed;
      updatePlayerData();
      sock.emit("updatePosition", playerData);
    }
    //the crouch
    if (crouch && camera.position.y <= -3) {
      camera.position.y += jumpspeed;
      updatePlayerData();
      sock.emit("updatePosition", playerData);
    }
    //stop crouching
    else if (crouch === false && camera.position.y >= -7) {
      camera.position.y -= jumpspeed;
      updatePlayerData();
      sock.emit("updatePosition", playerData);
    }
  }


  function animatePlayer(data) {
    requestAnimationFrame(animatePlayer);
    // detectcontrols();

    if (player) {
      updateCameraPosition();

      checkKeyStates();
      // camera.lookAt(player.position);
      player.position.set(
        camera.position.x,
        camera.position.y,
        camera.position.z
      );
    }
  }
  animatePlayer();

  // event listener for jumping
  window.addEventListener("keydown", move, false);
  window.addEventListener("keyup", move2, false);
}
}
controlers();
// to make the ui and other stuff disappear when clicked
controls.addEventListener("lock", function () {
  btn.style.display = "none";
  movespeed = 0.4;
  moveForward = false;
  moveBackward = false;
  moveLeft = false;
  moveRight = false;
  canJump = false;
  crouch = false;
  jumpspeed = 1;
});

controls.addEventListener("unlock", function () {
  btn.style.display = "block";
  movespeed = 0;
  moveForward = false;
  moveBackward = false;
  moveLeft = false;
  moveRight = false;
  canJump = false;
  crouch = false;
  jumpspeed = 0;
  scope.style.display = "none";
});

//allowing uses to customize controls
function customization() {
const key_press1 = document.getElementById("k-1");
const key_press2 = document.getElementById("k-2");
const key_press3 = document.getElementById("k-3");
const key_press4 = document.getElementById("k-4");
const key_press5 = document.getElementById("k-5");
const key_press6 = document.getElementById("k-6");


  const kp1 = document.getElementById("kp-1");
  const kp2 = document.getElementById("kp-2");
  const kp3 = document.getElementById("kp-3");
  const kp4 = document.getElementById("kp-4");
  const kp5 = document.getElementById("kp-5");
  const kp6 = document.getElementById("kp-6");

  
  function custom1(e){
    const status = e.key;
    w = e.keyCode;
    kp1.innerHTML = status;
    // if the key the user press is space instead of the html being blank set it to space
    if(e.key === " "){
      kp1.innerHTML = "space";
    }
    console.log(w);
    }

    function custom2(e){
      const status  = e.key;
      s = e.keyCode;
      kp2.innerHTML = status;
    // if the key the user press is space instead of the html being blank set it to space
    if(e.key === " "){
      kp2.innerHTML = "space";
    }
      console.log(s);
      }

    function custom3(e){
     const status = e.key;
      a = e.keyCode;
      kp3.innerHTML = status;
    // if the key the user press is space instead of the html being blank set it to space
    if(e.key === " "){
      kp3.innerHTML = "space";
    }
      console.log(a);
    }

    function custom4(e){
     const status = e.key;
      d = e.keyCode;
      kp4.innerHTML = status;
    // if the key the user press is space instead of the html being blank set it to space
    if(e.key === " "){
      kp4.innerHTML = "space";
    }
      console.log(d);
    }

    function custom5(e){
     const status = e.key;
      space = e.keyCode;
      kp5.innerHTML = status;
     // if the key the user press is space instead of the html being blank set it to space
    if(e.key === " "){
      kp5.innerHTML = "space";
    }
      console.log(space);
    }

    function custom6(e){
     const status = e.key;
      shift = e.keyCode;
      kp6.innerHTML = status;
    // if the key the user press is space instead of the html being blank set it to space
    if(e.key === " "){
      kp6.innerHTML = "space";
    }
      console.log(shift);
    }

    key_press1.addEventListener("keydown", custom1);
    key_press2.addEventListener("keydown", custom2);
    key_press3.addEventListener("keydown", custom3);
    key_press4.addEventListener("keydown", custom4);
    key_press5.addEventListener("keydown", custom5);
    key_press6.addEventListener("keydown", custom6);    
  }
customization();
