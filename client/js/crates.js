//"use strict";

function box() {
  //creates the crate to be in random position
  let z = Math.floor(Math.random() * 60) + 1;
  let x = Math.floor(Math.random() * 50) + 1;

  for (let i = 0; i < 10; i++) {
    let textures = new THREE.TextureLoader().load("image/crate.jpg");
    let b = new THREE.BoxGeometry(4, 4, 4);
    let c = new THREE.MeshPhongMaterial({ map: textures });
    let crate = new THREE.Mesh(b, c);

    crate.position.set(z, -10, x);
    crate.receiveShadow = true;
    crate.castShadow = true;
    scene.add(crate);
    collideObject.push(crate);
  }
}
box();
