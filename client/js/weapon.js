// "use strict";

let leftclick = false;
// let id, a;
// let bullet;
// let bulletId, speed;
// let bulletData;
// let otherBullets = [],
// otherBulletsId = [];
// let bulletspeed = 500;
// let bullets = [];
// // let bullet;
let emitter = new THREE.Object3D();
emitter.position.set(-0.1, -0.5, -1.5);
camera.add(emitter);

// function gun(){
// //creating the gun
// let weapon = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 2), new THREE.MeshBasicMaterial({
//   color: "aqua"
// }));

// scene.add(weapon);
// // weapon's position
// weapon.position.copy(emitter.getWorldPosition()); // start position - the tip of the weapon
// weapon.position.z = camera.position.z; // start position - the tip of the weapon
  
// weapon.position.y = camera.position.y + 1; // start position - the tip of the weapon
//   weapon.quaternion.copy(camera.quaternion); // apply camera's
  
// setInterval(function(){
// scene.remove(weapon);
  
// }, 0.01);
// }
// setInterval(gun, 0.01);

let bullet, bulletId, movSpeed, tunSpeed;

let bulletData;

let otherBullets = [],
  otherBulletsId = [];

let createBullet = function (data) {
  let bullet_geometry = new THREE.BoxGeometry(data.bulletsizeX, data.bulletsizeY, data.bulletsizeZ);
  let bullet_material = new THREE.MeshBasicMaterial({
  color: "purple"
});
bullet = new THREE.Mesh(bullet_geometry, bullet_material);

  bulletData = data;

  bullet.rotation.set(0, 0, 0);
  bullet.position.x = data.bulletx;
  bullet.position.y = data.bullety;
  bullet.position.z = data.bulletz;

  bulletId = data.bulletId;
  movSpeed = data.speed;
  // tunSpeed = data.turnSpeed;

  updateCameraPosition2();

  scene.add(bullet);
};

let updateCameraPosition2 = function () {
  bullet.position.x = camera.position.x;
  bullet.position.y = camera.position.y;
  bullet.position.z = camera.position.z - 10;

// when the bullet rotates
  bullet.rotation.x = camera.rotation.x;
  bullet.rotation.y = camera.rotation.y;
  bullet.rotation.z = camera.rotation.z;
};

let updateBulletPosition = function (data) {
  let someBullet = bulletForId(data.bulletId);
  
  someBullet.position.x = data.bulletx;
  someBullet.position.y = data.bullety;
  someBullet.position.z = data.bulletz;

  someBullet.rotation.x = data.bulletr_x;
  someBullet.rotation.y = data.bulletr_y;
  someBullet.rotation.z = data.bulletr_z;
};

let updateBulletData = function () {
  bulletData.bulletx = bullet.position.x;
  bulletData.bullety = bullet.position.y;
  bulletData.bulletz = bullet.position.z;

  bulletData.bulletr_x = bullet.rotation.x;
  bulletData.bulletr_y = bullet.rotation.y;
  bulletData.bulletr_z = bullet.rotation.z;
};

let addOtherBullet = function (data) {
  let cube_geometry2 = new THREE.BoxGeometry(data.bulletsizeX, data.bulletsizeY, data.bulletsizeZ);
  let cube_material2 = new THREE.MeshBasicMaterial({
    color: "blue"
  });
  let otherBullet = new THREE.Mesh(cube_geometry2, cube_material2);

  otherBullet.position.x = data.bulletx;
  otherBullet.position.y = data.bullety;
  otherBullet.position.z = data.bulletz;

  otherBulletsId.push(data.bulletId);
  otherBullets.push(otherBullet);
  scene.add(otherBullet);
};

let removeOtherBullet = function (data) {
  scene.remove(bulletForId(data.bulletId));
};

let bulletForId = function (id) {
  let index;
  for (let i = 0; i < otherBulletsId.length; i++) {
    if (otherBulletsId[i] == id) {
      index = i;
      break;
    }
  }
  return otherBullets[index];
};


function shoot(e){
  switch(e.button){
  
  case 0:
  leftclick = true;
    break;
  }
}
function shoot2(e){
  switch(e.button){
  
  case 0:
  leftclick = false;
    break;
  }
}
window.addEventListener("mousedown", shoot);
window.addEventListener("mouseup", shoot2);

let bullets = [];

function checkBulletState(){
  for(let i = 0; i<bullets.length; i+=1){
    if(bullets[i] === undefined) continue;
    if(bullets[i].alive === false){
      bullets.splice(i,1);
      continue;
    }
  }

if(leftclick){
  //setting the position for the bullet
  bullet.position.copy(emitter.getWorldPosition()); // start position - the tip of the weapon
  bullet.quaternion.copy(camera.quaternion); // apply camera's quaternion
  //removing the bullet every 1sec
  setTimeout(function(){
  // bullet.alive = false;
  scene.remove(bullet);
//updating the bullet position
  updateBulletData();
  sock.emit("updateBulletPosition", bulletData);
  }, 1000);
  //pushing the bullet to the array.
  bullets.push(bullet);
  scene.add(bullet);
  updateBulletData();
  sock.emit("updateBulletPosition", bulletData);
  }
 }


function bulletAnimation(bullet){
requestAnimationFrame(bulletAnimation);
  if(bullet){
    checkBulletState();

  let bulletspeed = 500;
  let clock = new THREE.Clock();
  let delta = 0;
  
  // making a function for the bullet
    delta = clock.getDelta();
    bullets.forEach(b => {
      b.translateZ(-bulletspeed * delta); // move along the local z-axis
    updateBulletData();
    sock.emit("updateBulletPosition", bulletData);
    });
  }
}
bulletAnimation();