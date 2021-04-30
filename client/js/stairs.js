//"use strict";
let color = "gray";
//the first house
function stairs(){
  let stairs1 = new THREE.Mesh(new THREE.BoxGeometry(90,5,57), new THREE.MeshBasicMaterial({color: color}));

  let stairs2 = new THREE.Mesh(new THREE.BoxGeometry(83,5,57), new THREE.MeshBasicMaterial({color: color}));
  
  let stairs3 = new THREE.Mesh(new THREE.BoxGeometry(80,5,57), new THREE.MeshBasicMaterial({color: color}));

  let stairs4 = new THREE.Mesh(new THREE.BoxGeometry(75,5,57), new THREE.MeshBasicMaterial({color: color}));

  let stairs5 = new THREE.Mesh(new THREE.BoxGeometry(69,5,57), new THREE.MeshBasicMaterial({color: color}));

  let stairs6 = new THREE.Mesh(new THREE.BoxGeometry(65,5,57), new THREE.MeshBasicMaterial({color: color}));

  let stairs7 = new THREE.Mesh(new THREE.BoxGeometry(57,5,57), new THREE.MeshBasicMaterial({color: color}));
  
  let stairs8 = new THREE.Mesh(new THREE.BoxGeometry(54,5,57), new THREE.MeshBasicMaterial({color: color}));
  
  let stairs9 = new THREE.Mesh(new THREE.BoxGeometry(52,5,57), new THREE.MeshBasicMaterial({color: color}));
  
  let stairs10 = new THREE.Mesh(new THREE.BoxGeometry(50,5,57), new THREE.MeshBasicMaterial({color: color}));
  
  let stairs11 = new THREE.Mesh(new THREE.BoxGeometry(46,5,57), new THREE.MeshBasicMaterial({color: color}));
  
  let stairs12 = new THREE.Mesh(new THREE.BoxGeometry(43,5,57), new THREE.MeshBasicMaterial({color: color}));
  


//the position for the stairs
  stairs1.position.x = -154;
  stairs1.position.z = 56;
  stairs1.position.y = -2.5;
  
  stairs2.position.x = -156;
  stairs2.position.z = 56;
  stairs2.position.y = -6;
  
  stairs3.position.x = -160;
  stairs3.position.z = 56;
  stairs3.position.y = -10;
  
  stairs4.position.x = -162;
  stairs4.position.z = 56;
  stairs4.position.y = -13;

  stairs5.position.x = -166;
  stairs5.position.z = 56;
  stairs5.position.y = -15;
  
  stairs6.position.x = -167;
  stairs6.position.z = 56;
  stairs6.position.y = -18;
  
  stairs7.position.x = -169;
  stairs7.position.z = 56;
  stairs7.position.y = -20;
  
  stairs8.position.x = -171;
  stairs8.position.z = 56;
  stairs8.position.y = -23;
  
  stairs9.position.x = -174;
  stairs9.position.z = 56;
  stairs9.position.y = -25;
  
  stairs10.position.x = -175;
  stairs10.position.z = 56;
  stairs10.position.y = -27;

  stairs11.position.x = -177;
  stairs11.position.z = 56;
  stairs11.position.y = -29;

  stairs12.position.x = -179;
  stairs12.position.z = 56;
  stairs12.position.y = -31;


//   //addig the stairs to the map
  scene.add(stairs1, stairs2, stairs3, stairs4, stairs5, stairs6, stairs7, stairs8, stairs9, stairs10, stairs11, stairs12);
  collideObject.push(stairs1, stairs2, stairs3, stairs4, stairs5, stairs6, stairs7, stairs8, stairs9, stairs10, stairs11, stairs12);
  
  //the stairs collision detection
  function checkstairs(a, d) {
  let b1 = a.position.y - a.geometry.parameters.height / 2;
  let t1 = a.position.y + a.geometry.parameters.height / 2;
  let r1 = a.position.x + a.geometry.parameters.width / 2;
  let l1 = a.position.x - a.geometry.parameters.width / 2;
  let f1 = a.position.z - a.geometry.parameters.depth / 2;
  let g1 = a.position.z + a.geometry.parameters.depth / 2;
  let b2 = d.position.y - d.geometry.parameters.height / 2;
  let t2 = d.position.y + d.geometry.parameters.height / 2;
  let r2 = d.position.x + d.geometry.parameters.width / 2;
  let l2 = d.position.x - d.geometry.parameters.width / 2;
  let f2 = d.position.z - d.geometry.parameters.depth / 2;
  let g2 = d.position.z + d.geometry.parameters.depth / 2;
  if (t1 < b2 || r1 < l2 || b1 > t2 || l1 > r2 || f1 > g2 || g1 < f2) {
    
    return  false;
  }
  return camera.position.y --;
}
//updating the stairs collision with the camera everytime;
  function animie(){
    requestAnimationFrame(animie);
    checkstairs(player, stairs1);
    checkstairs(player, stairs2);
    checkstairs(player, stairs3);
    checkstairs(player, stairs4);
    checkstairs(player, stairs5);
    checkstairs(player, stairs6);
    checkstairs(player, stairs7);
    checkstairs(player, stairs8);
    checkstairs(player, stairs9);
    checkstairs(player, stairs10);
    checkstairs(player, stairs11);
    checkstairs(player, stairs12);
  }
  animie();
  
}stairs();
  
