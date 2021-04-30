let loader2 = new THREE.GLTFLoader();
let ak;
let activateakbtn = document.getElementById("ak");

activateakbtn.addEventListener("click", (e)=>{
loader2.load(
  
 "image/ak/ak.gltf",

function(gltf){
   ak = gltf.scene.children[0];
  scene.add(ak);
     
function gun(){
requestAnimationFrame(gun);
ak.position.y = -3; // start position - the tip of the weapon
  ak.quaternion.copy(camera.quaternion); // apply camera's
  //allows the gun to move with the camera
  ak.position.set(camera.position.x, camera.position.y + 3, camera.position.z);
ak.rotation.z = 10.8;
 ak.rotation.x = -30;
  
  ak.scale.set(0.5,0.5,0.5);
scene.remove(shotgun);
}
gun();
},

// this function is call when the image is successfully loaded
function(xhr){
  console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
},

function(error){
 console.log("An error happened" + error);
}
);
});