function wallMap2(){
  // the left wall
  const material = new THREE.TextureLoader().load("../image/darkwall.jpg");
  const blockMesh1 = new THREE.BoxGeometry(10, 300, 1006);
  const blockMat1 = new THREE.MeshBasicMaterial({color: 0x706955, map:material});
  let left_wallMap2 = new THREE.Mesh(blockMesh1, blockMat1);

  //the right wall
   const blockMesh2 = new THREE.BoxGeometry(10, 300, 1006);
  const blockMat2 = new THREE.MeshBasicMaterial({color: 0x706955, map:material});
  let right_wallMap2 = new THREE.Mesh(blockMesh2, blockMat2);

  const blockMesh3 = new THREE.BoxGeometry(1006, 300, 10);
  const blockMat3 = new THREE.MeshBasicMaterial({color: 0x706955, map:material});
  let front_wallMap2 = new THREE.Mesh(blockMesh3, blockMat3);

  const blockMesh4 = new THREE.BoxGeometry(1006, 300, 10);
  const blockMat4 = new THREE.MeshBasicMaterial({color: 0x706955, map:material});
  let  back_wallMap2 = new THREE.Mesh(blockMesh4, blockMat4);

  scene.add(left_wallMap2, right_wallMap2, front_wallMap2, back_wallMap2);

  //the position
  //the front wall
  front_wallMap2.position.x = -1;
  front_wallMap2.position.y = -90;
  front_wallMap2.position.z = -1050;
  //the left wall
  left_wallMap2.position.x = 1050;
  left_wallMap2.position.y = -90;
  left_wallMap2.position.z = -1;
  //the back wall
  back_wallMap2.position.x = 1;
  back_wallMap2.position.y = -90;
  back_wallMap2.position.z = 1050;
  //the right wall
  right_wallMap2.position.x = -1050;
  right_wallMap2.position.y = -90;
  right_wallMap2.position.z = 1;
}

function building2(){
  //the stairs base
const baseGeometry = new THREE.BoxGeometry(950, 100, 300);
const baseMaterial = new THREE.MeshBasicMaterial({color:"blue"});
let base1 = new THREE.Mesh(baseGeometry, baseMaterial);

//the spawn spot
const spawnGeometry1 = new THREE.BoxGeometry(1, 300, 100);
const spawnMaterial1 = new THREE.MeshBasicMaterial({color:"red"});
let spawn1 = new THREE.Mesh(spawnGeometry1, spawnMaterial1);

//the back wall of the spawning 
const backGeometry1 = new THREE.BoxGeometry(100, 300, 1);
const backMaterial1 = new THREE.MeshBasicMaterial({color:"red"});
let back1 = new THREE.Mesh(backGeometry1, backMaterial1);

//the first building
const buildingGeometry1 = new THREE.BoxGeometry(100, 300, 100);
const buildingMaterial1 = new THREE.MeshBasicMaterial({color: "brown"});
let building1 = new THREE.Mesh(buildingGeometry1, buildingMaterial1);

const buildingGeometry2 = new THREE.BoxGeometry(200, 300, 200);
const buildingMaterial2 = new THREE.MeshBasicMaterial({color: "brown"});
let building2 = new THREE.Mesh(buildingGeometry2, buildingMaterial2);

const buildingGeometry3 = new THREE.BoxGeometry(200, 300, 200);
const buildingMaterial3 = new THREE.MeshBasicMaterial({color: "brown"});
let building3 = new THREE.Mesh(buildingGeometry3, buildingMaterial3);

const buildingGeometry4 = new THREE.BoxGeometry(200, 300, 200);
const buildingMaterial4 = new THREE.MeshBasicMaterial({color: "brown"});
let building4 = new THREE.Mesh(buildingGeometry4, buildingMaterial4);

//adding the materials to the scene
scene.add(base1, spawn1, back1, building1);

//position
base1.position.x = -1;
base1.position.y = -20;
base1.position.z = -850;

spawn1.position.x = -1;
spawn1.position.y = -120;
spawn1.position.z = -900;

back1.position.x = -90;
back1.position.y = -120;
back1.position.z = -900;

building1.position.x = 0;
building1.position.y = -120;
building1.position.z = -100;

building2.position.x = 0;
building2.position.y = -120;
building2.position.z = -100;

// building3.position.x = ;
// building3.position.y = -120;
// building3.position.z = ;

// building4.position.x = ;
// building4.position.y = -120;
// building4.position.z = ;
}
