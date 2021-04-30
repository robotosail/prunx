function wallMap2(){
  // the left wall
  const material = new THREE.TextureLoader().load("../image/darkwall.jpg");
  const blockMesh1 = new THREE.BoxGeometry(10, 300, 706);
  const blockMat1 = new THREE.MeshBasicMaterial({color: 0x706955, map:material});
  let left_wallMap2 = new THREE.Mesh(blockMesh1, blockMat1);

  //the right wall
   const blockMesh2 = new THREE.BoxGeometry(10, 300, 706);
  const blockMat2 = new THREE.MeshBasicMaterial({color: 0x706955, map:material});
  let right_wallMap2 = new THREE.Mesh(blockMesh2, blockMat2);

  const blockMesh3 = new THREE.BoxGeometry(706, 300, 10);
  const blockMat3 = new THREE.MeshBasicMaterial({color: 0x706955, map:material});
  let front_wallMap2 = new THREE.Mesh(blockMesh3, blockMat3);

  const blockMesh4 = new THREE.BoxGeometry(706, 300, 10);
  const blockMat4 = new THREE.MeshBasicMaterial({color: 0x706955, map:material});
  let  back_wallMap2 = new THREE.Mesh(blockMesh4, blockMat4);

  scene.add(left_wallMap2, right_wallMap2, front_wallMap2, back_wallMap2);

  //the position
  //the front wall
  front_wallMap2.position.x = -1;
  front_wallMap2.position.y = -90;
  front_wallMap2.position.z = -350;
  //the left wall
  left_wallMap2.position.x = 350;
  left_wallMap2.position.y = -90;
  left_wallMap2.position.z = -1;
  //the back wall
  back_wallMap2.position.x = 1;
  back_wallMap2.position.y = -90;
  back_wallMap2.position.z = 350;
  //the right wall
  right_wallMap2.position.x = -350;
  right_wallMap2.position.y = -90;
  right_wallMap2.position.z = 1;
}