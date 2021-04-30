  //the second stairs on the second house;
  
  function stairs2(){
    let stairs12 = new THREE.Mesh(new THREE.BoxGeometry(90,5,57), new THREE.MeshBasicMaterial({color: color}));
  
    let stairs22 = new THREE.Mesh(new THREE.BoxGeometry(83,5,57), new THREE.MeshBasicMaterial({color: color}));
    
    let stairs32 = new THREE.Mesh(new THREE.BoxGeometry(80,5,57), new THREE.MeshBasicMaterial({color: color}));
  
    let stairs42 = new THREE.Mesh(new THREE.BoxGeometry(75,5,57), new THREE.MeshBasicMaterial({color: color}));
  
    let stairs52 = new THREE.Mesh(new THREE.BoxGeometry(69,5,57), new THREE.MeshBasicMaterial({color: color}));
  
    let stairs62 = new THREE.Mesh(new THREE.BoxGeometry(65,5,57), new THREE.MeshBasicMaterial({color: color}));
  
    let stairs72 = new THREE.Mesh(new THREE.BoxGeometry(57,5,57), new THREE.MeshBasicMaterial({color: color}));
    
    let stairs82 = new THREE.Mesh(new THREE.BoxGeometry(54,5,57), new THREE.MeshBasicMaterial({color: color}));
    
    let stairs92 = new THREE.Mesh(new THREE.BoxGeometry(52,5,57), new THREE.MeshBasicMaterial({color: color}));
    
    let stairs120 = new THREE.Mesh(new THREE.BoxGeometry(50,5,57), new THREE.MeshBasicMaterial({color: color}));
    
    let stairs121 = new THREE.Mesh(new THREE.BoxGeometry(46,5,57), new THREE.MeshBasicMaterial({color: color}));
    
    let stairs122 = new THREE.Mesh(new THREE.BoxGeometry(43,5,57), new THREE.MeshBasicMaterial({color: color}));
    
  
  
  //the position for the stairs
    stairs12.position.x = 154;
    stairs12.position.z = -85;
    stairs12.position.y = -2.5;
    
    stairs22.position.x = 156;
    stairs22.position.z = -85;
    stairs22.position.y = -6;
    
    stairs32.position.x = 160;
    stairs32.position.z = -85;
    stairs32.position.y = -10;
    
    stairs42.position.x = 162;
    stairs42.position.z = -85;
    stairs42.position.y = -13;
  
    stairs52.position.x = 166;
    stairs52.position.z = -85;
    stairs52.position.y = -15;
    
    stairs62.position.x = 167;
    stairs62.position.z = -85;
    stairs62.position.y = -18;
    
    stairs72.position.x = 169;
    stairs72.position.z = -85;
    stairs72.position.y = -20;
    
    stairs82.position.x = 171;
    stairs82.position.z = -85;
    stairs82.position.y = -23;
    
    stairs92.position.x = 174;
    stairs92.position.z = -85;
    stairs92.position.y = -25;
    
    stairs120.position.x = 175;
    stairs120.position.z = -85;
    stairs120.position.y = -27;
  
    stairs121.position.x = 177;
    stairs121.position.z = -85;
    stairs121.position.y = -29;
  
    stairs122.position.x = 179;
    stairs122.position.z = -85;
    stairs122.position.y = -31;
  
  
    
    scene.add(stairs12, stairs22, stairs32, stairs42, stairs52, stairs62, stairs72, stairs82, stairs92, stairs120, stairs121, stairs122);
    collideObject.push(stairs12, stairs22, stairs32, stairs42, stairs52, stairs62, stairs72, stairs82, stairs92, stairs120, stairs121, stairs122);
    
    function checkstairs2(a, d) {
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
  
    function animie12(){
      requestAnimationFrame(animie12);
      checkstairs2(player, stairs12);
      checkstairs2(player, stairs22);
      checkstairs2(player, stairs32);
      checkstairs2(player, stairs42);
      checkstairs2(player, stairs52);
      checkstairs2(player, stairs62);
      checkstairs2(player, stairs72);
      checkstairs2(player, stairs82);
      checkstairs2(player, stairs92);
      checkstairs2(player, stairs120);
      checkstairs2(player, stairs121);
      checkstairs2(player, stairs122);
    }
    animie12();
    
  }stairs2();
    
    