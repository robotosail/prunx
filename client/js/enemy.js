/*the variables
array of enemies
*/
let enemyHead;
let enemyBody;
let enemies = [];
let enemypos = {
  position: {
    x: -20,
    y: -7,
    z: -3
      },
      
    rotation: {
     x: -20,
    y: -7,
    z: -3
    }
      };
      
let espeed = 1;


//functions
function enemy(pos1x, pos1y, pos1z, color1, pos2x, pos2y, pos2z, color2){
  
  let enemyHeadGeometry = new THREE.BoxGeometry(2,2,2);
  let enemyHeadMaterial = new THREE.MeshBasicMaterial({color: color1});
   enemyHead = new THREE.Mesh(enemyHeadGeometry, enemyHeadMaterial);
  
  //the body
  let enemyBodyGeometry = new THREE.BoxGeometry(4,4,2);
  let enemyBodyMaterial = new THREE.MeshBasicMaterial({color: color2});
   enemyBody = new THREE.Mesh(enemyBodyGeometry, enemyBodyMaterial);
  
  enemyHead.position.x = pos1x;
  enemyHead.position.y = pos1y;
  enemyHead.position.z = pos1z;
  
  enemyBody.position.x = pos2x;
  enemyBody.position.y = pos2y;
  enemyBody.position.z = pos2z;
  
  return scene.add(enemyBody), enemyBody.add(enemyHead), enemies.push(enemyBody, enemyHead);
}

enemy(0, -3, 0, "blue", 20, -7, -30, "brown");
enemy(0, -3, 0, "purple", -50, -7, -28, "pink");
enemy(0, -3, 0, "green", -50, -7, 60, "red");
enemy(0, -3, 0, "orange", 70, -7, -70, "coral");
enemy(0, -3, 0, "brown", 199, -7, 60, "yellow");
enemy(0, -3, 0, "red", enemypos.position.x, enemypos.position.y, enemypos.position.z, "green");