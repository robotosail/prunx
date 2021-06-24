
function map2(e){
  //removing the renderer from the html
  //or deleting the renderer
  //clearing the renderer
  
clearScene();
//canceling the animation on the collision
cancelAnimationFrame(collision);
//clearing the animation frame on the walls
cancelAnimationFrame(front_wall_animation);
cancelAnimationFrame(back_wall_animation);
cancelAnimationFrame(left_wall_animation);
cancelAnimationFrame(right_wall_animation);

//disposing the renderer
 renderer.dispose();
 document.body.removeChild(renderer.domElement);

 //loading the new map
 loadmap();
}

function loadmap(){
    init();
    scene.remove(floor);
    renderer.setClearColor(0x7f8199);
    floor = new THREE.Mesh(
      new THREE.PlaneGeometry(2000, 2000, 50, 50, 50),
      new THREE.MeshPhongMaterial({ color: 0x808080, wireframe: false })
    );
    floor.rotation.x += Math.PI / 2;
    scene.add(floor);
    movespeed = 0.4;
    controlers();
    wallMap2();
    building2();
  }
