//"use strict";
// the players body
// let playerBody = new THREE.Mesh(
//   new THREE.BoxGeometry(3, 5, 3),
//   new THREE.MeshBasicMaterial({ color: 0x0ffff0 })
// );

// playerBody.receiveShadow = true;
// playerBody.castShadow = true;

// // position of the player
// function animation() {
//   requestAnimationFrame(animation);
//   playerBody.position.set(
//     camera.position.x,
//     camera.position.y + 1,
//     camera.position.z
//   );
// }
let player, playerId, moveSpeed, turnSpeed;

let playerData;

let otherPlayers = [],
  otherPlayersId = [];

let createPlayer = function (data) {
  let player_geometry = new THREE.BoxGeometry(data.sizeX, data.sizeY, data.sizeZ);
  let player_material = new THREE.MeshBasicMaterial({
  color: "blue"
});
player = new THREE.Mesh(player_geometry, player_material);

  playerData = data;

  player.rotation.set(0, 0, 0);
  player.position.x = data.x;
  player.position.y = data.y;
  player.position.z = data.z;

  playerId = data.playerId;
  moveSpeed = data.speed;
  turnSpeed = data.turnSpeed;

  updateCameraPosition();

  camera.add(player);
  // camera.lookAt(player.position);
};

let updateCameraPosition = function () {
  player.position.x = camera.position.x;
  player.position.y = camera.position.y;
  player.position.z = camera.position.z;

// when the player rotates
  player.rotation.x = camera.rotation.x;
  player.rotation.y = camera.rotation.y;
  player.rotation.z = camera.rotation.z;
};

let updatePlayerPosition = function (data) {
  let somePlayer = playerForId(data.playerId);

  somePlayer.position.x = data.x;
  somePlayer.position.y = data.y;
  somePlayer.position.z = data.z;

  somePlayer.rotation.x = data.r_x;
  somePlayer.rotation.y = data.r_y;
  somePlayer.rotation.z = data.r_z;
};

let updatePlayerData = function () {
  playerData.x = player.position.x;
  playerData.y = player.position.y;
  playerData.z = player.position.z;

  playerData.r_x = player.rotation.x;
  playerData.r_y = player.rotation.y;
  playerData.r_z = player.rotation.z;
};

let addOtherPlayer = function (data) {
  let cube_geometry = new THREE.BoxGeometry(data.sizeX, data.sizeY, data.sizeZ);
  let cube_material = new THREE.MeshBasicMaterial({
    color: "red"
  });
  let otherPlayer = new THREE.Mesh(cube_geometry, cube_material);

  otherPlayer.position.x = data.x;
  otherPlayer.position.y = data.y;
  otherPlayer.position.z = data.z;

  otherPlayersId.push(data.playerId);
  otherPlayers.push(otherPlayer);
  scene.add(otherPlayer);
};

let removeOtherPlayer = function (data) {
  scene.remove(playerForId(data.playerId));
};

let playerForId = function (id) {
  let index;
  for (let i = 0; i < otherPlayersId.length; i++) {
    if (otherPlayersId[i] == id) {
      index = i;
      break;
    }
  }
  return otherPlayers[index];
};

// the players legs
let leg1 = new THREE.Mesh(
  new THREE.BoxGeometry(1.2, 2, 1),
  new THREE.MeshBasicMaterial({ color: 0x8b4513 })
);

// the leg position
leg1.position.set(camera.position.x - 0.6, -5, camera.position.z);

camera.add(leg1);

leg1.receiveShadow = true;
leg1.castShadow = true;

// the players second legs
let leg2 = new THREE.Mesh(
  new THREE.BoxGeometry(1.2, 2, 1),
  new THREE.MeshBasicMaterial({ color: 0x8b4513 })
);

// the leg position
leg2.position.set(camera.position.x + 0.6, -5, camera.position.z);

camera.add(leg2);

// outline1
let outline = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2, 1),
  new THREE.MeshBasicMaterial({ color: 0x00f })
);

// the leg position
outline.position.set(camera.position.x - 0.1, -5, camera.position.z);

camera.add(outline);

//outline2
let outline2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 0.2, 1),
  new THREE.MeshBasicMaterial({ color: 0x00f })
);

// the leg position
outline2.position.set(camera.position.x - 0.1, -7, camera.position.z);

camera.add(outline2);

// outline3
let outline3 = new THREE.Mesh(
  new THREE.BoxGeometry(2.5, 0.2, 1),
  new THREE.MeshBasicMaterial({ color: 0x00f })
);

// the leg position
outline3.position.set(camera.position.x - 0.001, -6, camera.position.z);

camera.add(outline3);
