//"use strict";

let texture = new THREE.TextureLoader().load("image/fence.jpg");
let texture2 = new THREE.TextureLoader().load("image/crate.jpg");
let fence,
  box1,
  box2,
  fence2,
  fence3,
  fence4,
  fence11,
  box11,
  box12,
  fence25,
  fence33,
  fence44;

  function fences(){

function leftside() {
  // the front left of the fence
  function fence11() {
    fence = new THREE.Mesh(
      new THREE.BoxGeometry(250, 40, 1),
      new THREE.MeshPhongMaterial({ color: "orange", map: texture })
    );
    collideObject.push(fence);

    scene.add(fence);
    fence.position.y = -7;
    fence.position.x = 200;
    fence.position.z = -200;

    box1 = new THREE.Mesh(
      new THREE.BoxGeometry(9, 10, 9),
      new THREE.MeshPhongMaterial({ map: texture2, color: 0x876710 })
    );

    collideObject.push(box1);
    scene.add(box1);
    box1.position.y = -4;
    box1.position.z = -194;
    box1.position.x = 80;

    box2 = new THREE.Mesh(
      new THREE.BoxGeometry(9, 10, 9),
      new THREE.MeshPhongMaterial({ map: texture2, color: 0x876710 })
    );

    collideObject.push(box2);
    scene.add(box2);
    box2.position.y = -14;
    box2.position.z = -194;
    box2.position.x = 80;
  }
  fence11();

  // the 1 front left panel of the fence
  function fence12() {
    fence2 = new THREE.Mesh(
      new THREE.BoxGeometry(1, 40, 40),
      new THREE.MeshPhongMaterial({ color: "orange", map: texture })
    );

    fence2.position.y = -7;
    fence2.position.x = 200;
    fence2.position.z = -220;

    collideObject.push(fence2);
    scene.add(fence2);
  }
  fence12();

  // the 2 front left side panel of the fence
  function fence13() {
    fence3 = new THREE.Mesh(
      new THREE.BoxGeometry(1, 40, 40),
      new THREE.MeshPhongMaterial({ color: "orange", map: texture })
    );
    collideObject.push(fence3);

    fence3.position.y = -7;
    fence3.position.z = -220;
    fence3.position.x = 270;

    scene.add(fence3);
  }
  fence13();

  //the left side of the fence
  function fence14() {
    fence4 = new THREE.Mesh(
      new THREE.BoxGeometry(1, 40, 500),
      new THREE.MeshPhongMaterial({ color: "orange", map: texture })
    );
    collideObject.push(fence4);

    fence4.position.y = -7;
    fence4.position.z = 60;
    fence4.position.x = 320;

    scene.add(fence4);
  }
  fence14();
}
leftside();

// the other fence

function rightside() {
  // the front of the fence
  function fence21() {
    fence11 = new THREE.Mesh(
      new THREE.BoxGeometry(250, 40, 1),
      new THREE.MeshPhongMaterial({ color: "orange", map: texture })
    );
    collideObject.push(fence11);

    scene.add(fence11);
    fence11.position.y = -7;
    fence11.position.x = -200;
    fence11.position.z = -200;

    box11 = new THREE.Mesh(
      new THREE.BoxGeometry(9, 10, 9),
      new THREE.MeshPhongMaterial({ map: texture2, color: 0x876710 })
    );

    collideObject.push(box11);
    scene.add(box11);
    box11.position.y = -4;
    box11.position.z = 94;
    box11.position.x = -40;

    box12 = new THREE.Mesh(
      new THREE.BoxGeometry(9, 10, 9),
      new THREE.MeshPhongMaterial({ map: texture2, color: 0x876710 })
    );

    collideObject.push(box12);
    scene.add(box12);
    box12.position.y = -14;
    box12.position.z = 94;
    box12.position.x = -40;
  }
  fence21();

  // the front 1 right side panel of the fence
  function fence22() {
    fence25 = new THREE.Mesh(
      new THREE.BoxGeometry(1, 40, 60),
      new THREE.MeshPhongMaterial({ color: "orange", map: texture })
    );

    fence25.position.y = -7;
    fence25.position.x = -74;
    fence25.position.z = -171;

    collideObject.push(fence25);
    scene.add(fence25);
  }
  fence22();

  // the front 2 right panel of the fence
  function fence23() {
    fence33 = new THREE.Mesh(
      new THREE.BoxGeometry(1, 40, 20),
      new THREE.MeshPhongMaterial({ color: "orange", map: texture })
    );
    collideObject.push(fence33);

    fence33.position.y = -7;
    fence33.position.z = -210;
    fence33.position.x = -200;

    scene.add(fence33);
  }
  fence23();

  // the front right side of the fence
  function fence24() {
    fence44 = new THREE.Mesh(
      new THREE.BoxGeometry(1, 40, 500),
      new THREE.MeshPhongMaterial({ color: "orange", map: texture })
    );
    collideObject.push(fence44);

    fence44.position.y = -7;
    fence44.position.z = 60;
    fence44.position.x = -320;

    scene.add(fence44);
  }
  fence24();
}
rightside();
}
fences();