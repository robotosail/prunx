//"use strict";

//@Author: robotosail
// the wall texture
let wallTexture = new THREE.TextureLoader().load("image/wall2.jpg");
let front_wall_animation, left_wall_animation, right_wall_animation, back_wall_animation;


// the front wall
function front(loadingManager){
let frontwall = new THREE.Mesh(new THREE.BoxGeometry(706,100,1), new THREE.MeshBasicMaterial({color:"brown", map:wallTexture}));

scene.add(frontwall);
collideObject.push(frontwall);

frontwall.position.x = 3;
frontwall.position.y = -50;
frontwall.position.z = -350;

// attempt collision detection
function frontwalldetect(e){
  if(camera.position.z <= -350){
    camera.position.z = -342;
    camera.position.x += 2;
}
}

// animate to make it less glitchy
function toanimate(){
  front_wall_animation = requestAnimationFrame(toanimate);

  frontwalldetect();
}toanimate();
}
front();


function left(loadingManager){
  let leftwall = new THREE.Mesh(new THREE.BoxGeometry(1,100,700), new THREE.MeshBasicMaterial({color:"brown", map:wallTexture}));

scene.add(leftwall);
collideObject.push(leftwall);

leftwall.position.x = 350;
leftwall.position.y = -50;
leftwall.position.z = -1;

// attempt collision detection
function leftwalldetect(e){
  if(camera.position.x >= 350){
    camera.position.x = 340;
    camera.position.z += 2;
}
}

// to make less glitchy
function animate1(){
  left_wall_animation = requestAnimationFrame(animate1);
  leftwalldetect();
}
animate1();
}
left();

//back wall
function back(loadingManager){
  let backwall = new THREE.Mesh(new THREE.BoxGeometry(703,100,1), new THREE.MeshBasicMaterial({color:"brown", map:wallTexture}));

scene.add(backwall);
collideObject.push(backwall);

backwall.position.x = 1;
backwall.position.y = -50;
backwall.position.z = 350;

// attempt collision detection
function backwalldetect(e){
  if(camera.position.z >= 344){
    camera.position.z = 340;
    camera.position.x -= 2;
}
}

// to make less glitchy
function animate2(){
  back_wall_animation = requestAnimationFrame(animate2);
  backwalldetect();
}
animate2();
}
back();




// the right wall

function right(loadingManager){
  let rightwall = new THREE.Mesh(new THREE.BoxGeometry(1,100,700), new THREE.MeshBasicMaterial({color:"brown", map:wallTexture}));

scene.add(rightwall);
collideObject.push(rightwall);

rightwall.position.x = -350;
rightwall.position.y = -50;
rightwall.position.z = -0.5;

// attempt collision detection
function rightwalldetect(e){
  if(camera.position.x <= -350){
    camera.position.x = -340;
    camera.position.z -= 2;
}
}
// to make less glitchy
function animate3(){
  right_wall_animation = requestAnimationFrame(animate3);
  rightwalldetect();
}
animate3();
}
right();