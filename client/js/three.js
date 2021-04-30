let scene, camera, controls, renderer, collideObject, floor;

collideObject = [];
collideObject.receiveShadow = true;
collideObject.castShadow = true;

function init() {
  // the scene
  scene = new THREE.Scene();

  //	the camera
  camera = new THREE.PerspectiveCamera(
    200,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z =
    Math.floor(Math.random() * -347) + 1 ||
    Math.floor(Math.random() * 338) + 1 ||
    Math.floor(Math.random() * -345) + 1 ||
    Math.floor(Math.random() * 340) + 1;
    camera.position.x =
    Math.floor(Math.random() * -344) + 1 || Math.floor(Math.random() * 344) + 1 || Math.floor(Math.random() * -331) + 1 || Math.floor(Math.random() * 345) + 2;
  camera.position.y = -7;

  //light
  let ambient = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambient);

  //makes the light shine
  let light = new THREE.PointLight(0xffffff, 0.5, 20);
  light.position.set(-2, -20, -3);
  light.castShadow = true;
  light.shadow.camera.near = 0.1;
  light.shadow.camera.far = 25;
  scene.add(light);

  //the renderer
  renderer = new THREE.WebGLRenderer({ antialias:true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  // sets the color of the renederer
  renderer.setClearColor("skyblue");
  renderer.setPixelRatio(window.devicePixelRatio);

  renderer.shadowMap.enable = true;
  renderer.shadowMap.type = THREE.BasicShadowMap;
  document.body.appendChild(renderer.domElement);

  //pointer lock controls for camera
  controls = new THREE.PointerLockControls(camera, renderer.domElement);
  let clock = new THREE.Clock();

  let btn = document.getElementById("button");

  btn.addEventListener("click", () => {
    controls.lock();
    player.position.y = -7;
  });
  // to make the ui and other stuff disappear when clicked
  controls.addEventListener("lock", function () {
    btn.style.display = "none";
  });

  controls.addEventListener("unlock", function () {
    btn.style.display = "block";
  });

  //  event listner for change
  controls.addEventListener("change", render);

  //this makes the floor
  floor = new THREE.Mesh(
    new THREE.PlaneGeometry(700, 700, 50, 50, 50),
    new THREE.MeshPhongMaterial({ color: 0x808080, wireframe: false })
  );
  floor.rotation.x += Math.PI / 2;

  floor.receiveShadow = true;
  scene.add(floor);
  collideObject.push(floor);

  // for(let i = 0; i < crate.geometry.length; i++){
  //   if(camera.position.z)
  // }
  animate();
}
init();

// animate function
function animate() {
  requestAnimationFrame(animate);

  render();
}


function clearconsole() {
  requestAnimationFrame(clearconsole);
  console.clear();
} //clearconsole();

//when window is resized
window.addEventListener("resize", windowresize, false);
//when window is resized
function windowresize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

//rendering the trackball
function render() {
  renderer.render(scene, camera);
}

//plys the music
function music(e) {
  let media = new Audio("audio/backgroundsound.wav");
  if (e.keyCode == 75) {
    let listener = new THREE.AudioListener();
    let audio = new THREE.Audio(listener);
    media.loop = true;

    media.play();
  } else if (media.play && e.keyCode == 75) {
    media.pause();
  }
}
// window.addEventListener("keydown", music);

// mouse position
window.addEventListener("mousemove", mouse);
let mouseX = 0;
let mouseY = 0;

function mouse(e) {
  //  console.log(mouseX, mouseY);
  mouseX = e.clientX - window.innerWidth / 2;
  mouseY = e.clientY - window.innerHeight / 2;
}

// the fps
let fps = new Stats();
//displays the stats
fps.domElement.style.position = "absolute";
fps.domElement.style.left = "92%";
fps.domElement.style.top = "3%";
fps.domElement.style.opacity = "100%";
document.body.appendChild(fps.domElement);

//animate function
requestAnimationFrame(function loop() {
  fps.update();
  requestAnimationFrame(loop);
});
