//"use strict";

function righthands(){
let right = new THREE.BoxGeometry(1,1,2);
let hand = new THREE.MeshBasicMaterial({color:0x9c6b1c});
let righthand = new THREE.Mesh(right, hand);

scene.add(righthand);


righthand.position.copy(emitter.getWorldPosition()); // start position -

  righthand.quaternion.copy(camera.quaternion); // apply camera's
righthand.position.x = camera.position.x -2.5;
righthand.position.z = camera.position.z -1;
righthand.position.y = -3;



// the wrist
  let rwrist = new THREE.BoxGeometry(0.9,1,0.5);
let rwristcolor = new THREE.MeshBasicMaterial({color:0xf5d98e});
let rightwrist = new THREE.Mesh(rwrist, rwristcolor);

righthand.add(rightwrist);

rightwrist.position.z = -1.3;

setInterval(function(){
  scene.remove(righthand)
  
}, 0.1);
}
// setInterval(righthands, 0.1)



// the left hand
function lefthands(){
  let left = new THREE.BoxGeometry(1,1,2);
let hands = new THREE.MeshBasicMaterial({color: 0x9c6b1c});
let lefthand = new THREE.Mesh(left, hands);

scene.add(lefthand);

lefthand.position.copy(emitter.getWorldPosition()); // start position - the tip of the weapon
  lefthand.quaternion.copy(camera.quaternion); // apply camera's
  
lefthand.position.x = camera.position.x +3;
lefthand.position.z = camera.position.z -1;
lefthand.position.y = -3;
// the rotation

// the wrist

  let wrist = new THREE.BoxGeometry(0.9,1,0.5);
let wristcolor = new THREE.MeshBasicMaterial({color:0xf5d98e});
let leftwrist = new THREE.Mesh(wrist, wristcolor);

lefthand.add(leftwrist);

leftwrist.position.z = -1.3;

setInterval(function(){
  scene.remove(lefthand)
  
}, 0.1);
}
// setInterval(lefthands, 0.1)

