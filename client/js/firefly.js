
function map2(e){
  //removing the renderer from the html
  //or deleting the renderer
  //clearing the renderer
renderer.clear();
  document.body.removeChild(renderer.domElement);

  function loadmap(){
      init();
      scene.remove(floor);
      renderer.setClearColor(0x7f8199);
      movespeed = 0.4;
      controlers();
      wallMap2();
    }
    loadmap();
  }

