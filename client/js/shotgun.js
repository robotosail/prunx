//"use strict";

const loader = new THREE.GLTFLoader();
let shotbtn = document.getElementById("shotgun");
let shotgun;
// Load a glTF resource
shotbtn.addEventListener("click", function(e){

loader.load(
	// resource URL
	"image/shotgun/shotgun.gltf",
	// called when the resource is loaded
	function ( gltf ) {

    
    shotgun = gltf.scene.children[0];
		scene.add( shotgun );
		// gltf.animations; // Array<THREE.AnimationClip>
		// gltf.scene; // THREE.Group
		// gltf.scenes; // Array<THREE.Group>
		// gltf.cameras; // Array<THREE.Camera>
		// gltf.asset; // Object
               
                scene.remove(ak);
                
                function gun(){
        requestAnimationFrame(gun);
          //allows the gun to move with the camera
          shotgun.position.set(camera.position.x - 1, camera.position.y +3, camera.position.z);
          shotgun.rotation.z = 10.8;
           
      // shotgun.position.set(camera.position.x, -4, camera.position.z);
                shotgun.scale.y = -5;
                shotgun.scale.z = -5;
                shotgun.scale.x = -5;
}
gun();
	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened ' + error );

	}
);
  
});