function checkTouching(a, d) {
  this.a = a;
  this.d = d;
  
  //the collision part
  
  this.work = function(){
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

  return moveForward = false, moveRight = false, moveLeft = false;
  }
  this.work();

}

function animatingIfThereIscollision() {
  collision = requestAnimationFrame(animatingIfThereIscollision);
  //green.position.x--

  /* on un comment this for debugging document.getElementById("c").innerHTML =*/
  // collision detection for the walls of the first house
  checkTouching(player, cube);
  checkTouching(player, cube1);
  checkTouching(player, cube3);
  checkTouching(player, cube4);
  checkTouching(player, inside_wall);
  
  /*collision detection for the house on top of the first house*/
  checkTouching(player, front_topwall1);
  checkTouching(player, front_topleftwall1);
  checkTouching(player, front_toprightwall1);
  checkTouching(player, front_topbackwall1);
  checkTouching(player, insidewall11);
  checkTouching(player, insidewall12);
  
  /*collision detection for the second house*/
  checkTouching(player, cube11);
  checkTouching(player, cube12);
  checkTouching(player, cube33);
  checkTouching(player, cube44);
  checkTouching(player, inside_wall1);
    
  /*collision detection for the house on top of the second house*/
  checkTouching(player, front_topwall2);
  checkTouching(player, front_topleftwall2);
  checkTouching(player, front_toprightwall2);
  checkTouching(player, front_topbackwall2);
  checkTouching(player, insidewall21);
  checkTouching(player, insidewall22);

    /* on un comment this for debugging document.getElementById("c").innerHTML =*/
  /*collision detection for the fence left fence*/
  checkTouching(player, fence);
  checkTouching(player, box1);
  checkTouching(player, box2);
  checkTouching(player, fence2);
  checkTouching(player, fence3);
  checkTouching(player, fence4);
  
    /*collision detection for the fence right fence*/
  checkTouching(player, fence11);
  checkTouching(player, box11);
  checkTouching(player, box12);
  checkTouching(player, fence25);
  checkTouching(player, fence33);
  checkTouching(player, fence44);
}
animatingIfThereIscollision();
