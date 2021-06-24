//"use strict";
let  roof, roof1, roofpatch1, roofpatch2;
let cube, cube1, cube3, cube4, inside_wall, cube11, cube12, cube33, cube44, inside_wall1;
let front_topwall1, front_topleftwall1, front_toprightwall1, front_topbackwall1, insidewall11, insidewall12;
let front_topwall2, front_topleftwall2, front_toprightwall2, front_topbackwall2, insidewall21, insidewall22;

function house(){
	
const insideWallcolor = 0xFFD68A;
const roofcolor = "red";
const roofcolor2 = 0xd3d3d3;
const color1 = "orange";
const color2 = "green";
// for creating the house
	const houseTexture = new THREE.TextureLoader().load("image/wall.jpg");
	
		const Texture = new THREE.TextureLoader().load("image/wall2.jpg");
		function house1(){
			//front wall
			const shape = new THREE.BoxGeometry(1,40,135);
			const material = new THREE.MeshPhongMaterial({color: color1, map:houseTexture});
			 cube = new THREE.Mesh(shape, material);
			cube.receiveShadow = true;
			cube.castShadow = true;
			
			
			// right wall from the view of facing left
			const shape2 = new THREE.BoxGeometry(120,40,1);
		 const material2 = new THREE.MeshPhongMaterial({color: color1, map:houseTexture});
			 cube1 = new THREE.Mesh(shape2, material2);
			cube1.receiveShadow = true;
			cube1.castShadow = true;
			
			
			// left wall
				const shape3 = new THREE.BoxGeometry(120,40,1);
		 const material3 = new THREE.MeshPhongMaterial({color: color1, map:houseTexture});
			 cube3 = new THREE.Mesh(shape2, material2);
			cube3.receiveShadow = true;
			cube3.castShadow = true;
			
			
			//back wall
			const shape4 = new THREE.BoxGeometry(1, 40, 190);
			const material4 = new THREE.MeshPhongMaterial({color:  color1, map:houseTexture});
			 cube4 = new THREE.Mesh(shape4, material4);

			
			
			//roof
			const roofGeometry = new THREE.BoxGeometry(138,1, 124.5);
			const roofColor = new THREE.MeshPhongMaterial({color: roofcolor2});
			 roof = new THREE.Mesh(roofGeometry, roofColor);
			
			 //the small roof patxh
			 const roofpatchGeometry2 = new THREE.BoxGeometry(50,1, 56);
			const roofpatchColor2 = new THREE.MeshPhongMaterial({color: roofcolor2});
			 roofpatch2 = new THREE.Mesh(roofpatchGeometry2, roofpatchColor2);
			
			
			// inside wall
			const shape5 = new THREE.BoxGeometry(90, 40, 1);
			const material5 = new THREE.MeshPhongMaterial({color:  color1, map: houseTexture});
			 inside_wall = new THREE.Mesh(shape5, material5);
			
			//position
			
			// roof
			roof.position.y = -35;
			roof.position.z = -33;
			roof.position.x = -150;
							
			// roof patch
			roofpatch2.position.y = -35;
			roofpatch2.position.z = 56.5;
			roofpatch2.position.x = -90;
			
			//left wall
			cube3.position.y = -15;
			cube3.position.z = 85;
			cube3.position.x = -140;
			
			// right wall from the view of facing left
			cube1.position.y = -15;
			cube1.position.z = -95;
			cube1.position.x = -140;
			
			//front wall
			cube.position.y = -15;
			cube.position.z = 17;
			cube.position.x = -80.5;

			// back wall
			cube4.position.y = -15;
			cube4.position.z = -2;
			cube4.position.x = -200.5;
			
			//inside wall
			inside_wall.position.y = -15;
			inside_wall.position.z = 27;
			inside_wall.position.x = -155.5;
			
			
			collideObject.push(cube, cube1, cube3, cube4, roof, inside_wall, roofpatch2);
			scene.add(cube, cube1, cube3, cube4, roof, inside_wall, roofpatch2);
		}
		house1();
			
			function house2(){
			  //front wall
			  	 const shape11 = new THREE.BoxGeometry(1,40,155);
			  const material11 = new THREE.MeshPhongMaterial({color: color2, map:houseTexture});
			   cube11 = new THREE.Mesh(shape11, material11);
			  cube11.receiveShadow = true;
			  cube11.castShadow = true;
			  
			  
			  // right wall
			  const shape22 = new THREE.BoxGeometry(120,40,1);
			 const material22 = new THREE.MeshPhongMaterial({color: color2, map:houseTexture});
			  cube12 = new THREE.Mesh(shape22, material22);
			  cube12.receiveShadow = true;
			  cube12.castShadow = true;
			  
			  
			  // left wall
			    const shape33 = new THREE.BoxGeometry(120,40,1);
			 const material33 = new THREE.MeshPhongMaterial({color: color2, map:houseTexture});
			   cube33 = new THREE.Mesh(shape33, material33);
			  cube33.receiveShadow = true;
			  cube33.castShadow = true;
			  
			  
			  //back wall
			  const shape44 = new THREE.BoxGeometry(1, 40, 20);
			  const material44 = new THREE.MeshPhongMaterial({color: color2, map:houseTexture});
			  cube44 = new THREE.Mesh(shape44, material44);
			  
			  
			  //roof
			  const roofGeometry1 = new THREE.BoxGeometry(138,1, 145);
			  const roofColor1 = new THREE.MeshPhongMaterial({color: roofcolor});
			   roof1 = new THREE.Mesh(roofGeometry1, roofColor1);
			   
			   
			   //the small roof patxh
			   const roofpatchGeometry1 = new THREE.BoxGeometry(50,1, 54);
			  const roofpatchColor1 = new THREE.MeshPhongMaterial({color: roofcolor});
			   roofpatch1 = new THREE.Mesh(roofpatchGeometry1, roofpatchColor1);
			  
			  // inside wall
			  const shape55 = new THREE.BoxGeometry(90, 40, 1);
			  const material55 = new THREE.MeshPhongMaterial({color: roofcolor});
			   inside_wall1 = new THREE.Mesh(shape55, material55);
			  
			  //position
			  
			  // roof
			  roof1.position.y = -35;
			  roof1.position.z = 12;
			  roof1.position.x = 150;
			  
			  // roof patch
			  roofpatch1.position.y = -35;
			  roofpatch1.position.z = -87.5;
			  roofpatch1.position.x = 90;
			  
			  //left wall
			  cube33.position.y = -15;
			  cube33.position.z = 85;
			  cube33.position.x = 140;
			  // right wall
			  cube12.position.y = -15;
			  cube12.position.z = -114;
			  cube12.position.x = 140;
			  //front wall
			  cube11.position.y = -15;
			  cube11.position.z = -37;
			  cube11.position.x = 80.5;

        // back wall
        cube44.position.y = -15;
        cube44.position.z = -14;
        cube44.position.x = 200.5;
			  
			  //inside wall
			  inside_wall1.position.y = -15;
			  inside_wall1.position.z = -56;
			  inside_wall1.position.x = 155.5;
			  
			  
			  scene.add(cube12, cube11, roof1, cube33, inside_wall1, cube44, roofpatch1);
			  
			  collideObject.push(cube12, cube11, roof1, cube33, inside_wall1, cube44, roofpatch1);
			}
			house2();
			
			
			//this is for the first house second floor
			function tophouse1(){
  		  // the front top of the hpuse
  		  const front_topwallGeometry2 = new THREE.BoxGeometry(1, 40, 144);
			  const front_topwallMaterial2 = new THREE.MeshPhongMaterial({color: color1, map: houseTexture});
			   front_topwall2 = new THREE.Mesh(front_topwallGeometry2, front_topwallMaterial2);
  		  
  		// the top left wall of the house
  		  const front_topleftwallGeometry2 = new THREE.BoxGeometry(120, 40, 1);
			  const front_topleftwallMaterial2 = new THREE.MeshPhongMaterial({color: color1, map: houseTexture});
			  
			    front_topleftwall2 = new THREE.Mesh(front_topleftwallGeometry2, front_topleftwallMaterial2);
			   
			   // the top right wall of the house
  		  const front_toprightwallGeometry2 = new THREE.BoxGeometry(120, 40, 1);
			  const front_toprightwallMaterial2 = new THREE.MeshPhongMaterial({color: color1, map: houseTexture});
			  
			    front_toprightwall2 = new THREE.Mesh(front_toprightwallGeometry2, front_toprightwallMaterial2);
  		  
  		  // the top back wall
  		   const front_topbackwallGeometry2 = new THREE.BoxGeometry(1, 40, 140);
			  const front_topbackwallMaterial2 = new THREE.MeshPhongMaterial({color: color1, map: houseTexture});
			   front_topbackwall2 = new THREE.Mesh(front_topbackwallGeometry2, front_topbackwallMaterial2);
  		  
  		  //inside wall 1
  		  const insidewallGeometry11 = new THREE.BoxGeometry(1, 30, 55);
  		  const insidewallMaterial11 = new THREE.MeshPhongMaterial({color: insideWallcolor});
  		  insidewall11 = new THREE.Mesh(insidewallGeometry11, insidewallMaterial11);
  		  
  		  const insidewallGeometry12 = new THREE.BoxGeometry(55, 30, 1);
  		  const insidewallMaterial12 = new THREE.MeshPhongMaterial({color: insideWallcolor});
  		  insidewall12 = new THREE.Mesh(insidewallGeometry12, insidewallMaterial12);
  		  
  		  
  		// position
  		// the front top wall
  		front_topwall2.position.x = -81;
  		front_topwall2.position.y = -53;
  		front_topwall2.position.z = -25;
  		
  		//the top left wall
		  front_topleftwall2.position.x = -140;
		  front_topleftwall2.position.y = -53;
		  front_topleftwall2.position.z = 85;
  		  
  		  // the top right wall
		  front_toprightwall2.position.x = -140;
		  front_toprightwall2.position.y = -53;
		  front_toprightwall2.position.z = -95;
  		  
  		  		// the front top wall
  		front_topbackwall2.position.x = -200;
  		front_topbackwall2.position.y = -53;
  		front_topbackwall2.position.z = -24;
  		  
  		  // the first inside wall of the top house1 that faces the outside
  		  insidewall11.position.y = -50.5;
  		  insidewall11.position.x = -115;
  		  insidewall11.position.z = 57;
  		  
  		    		  // the second inside wall of the top house1 that faces the inside next to the ladder going into the balcony
  		  insidewall12.position.y = -50.5;
  		  insidewall12.position.x = -142;
  		  insidewall12.position.z = 29;
  		  
  		  
  		  scene.add(front_topwall2, front_topleftwall2, front_toprightwall2, front_topbackwall2, insidewall11, insidewall12);
			collideObject.push(front_topwall2, front_topleftwall2, front_toprightwall2, front_topbackwall2, insidewall11, insidewall12);
			}
			tophouse1();
  		  
			
			
			
			
			// top first house on the second house
			
			function tophouse2(){
  		  // the front top of the hpuse
  		  const front_topwallGeometry = new THREE.BoxGeometry(1, 40, 156);
			  const front_topwallMaterial = new THREE.MeshPhongMaterial({color: color2, map: houseTexture});
			   front_topwall1 = new THREE.Mesh(front_topwallGeometry, front_topwallMaterial);
  		  
  		// the top left wall of the house
  		  const front_topleftwallGeometry = new THREE.BoxGeometry(120, 40, 1);
			  const front_topleftwallMaterial = new THREE.MeshPhongMaterial({color: color2, map: houseTexture});
			  
			    front_topleftwall1 = new THREE.Mesh(front_topleftwallGeometry, front_topleftwallMaterial);
			   
			   // the top right wall of the house
  		  const front_toprightwallGeometry = new THREE.BoxGeometry(120, 40, 1);
			  const front_toprightwallMaterial = new THREE.MeshPhongMaterial({color: color2, map: houseTexture});
			  
			    front_toprightwall1 = new THREE.Mesh(front_toprightwallGeometry, front_toprightwallMaterial);
  		  
  		  // the top back wall
  		   const front_topbackwallGeometry = new THREE.BoxGeometry(1, 40, 156);
			  const front_topbackwallMaterial = new THREE.MeshPhongMaterial({color: color2, map: houseTexture});
			   front_topbackwall1 = new THREE.Mesh(front_topbackwallGeometry, front_topbackwallMaterial);
			   
			     		  //inside wall 1
  		  const insidewallGeometry21 = new THREE.BoxGeometry(1, 30, 55);
  		  const insidewallMaterial21 = new THREE.MeshPhongMaterial({color: insideWallcolor});
  		  insidewall21 = new THREE.Mesh(insidewallGeometry21, insidewallMaterial21);
  		  
  		  const insidewallGeometry22 = new THREE.BoxGeometry(55, 30, 1);
  		  const insidewallMaterial22 = new THREE.MeshPhongMaterial({color: insideWallcolor});
  		  insidewall22 = new THREE.Mesh(insidewallGeometry22, insidewallMaterial22);
  		  
  		// position
  		// the front top wall
  		front_topwall1.position.x = 81;
  		front_topwall1.position.y = -53;
  		front_topwall1.position.z = 8;
  		
  		//the top left wall
		  front_topleftwall1.position.x = 140;
		  front_topleftwall1.position.y = -53;
		  front_topleftwall1.position.z = 85;
  		  
  		  // the top right wall
		  front_toprightwall1.position.x = 140;
		  front_toprightwall1.position.y = -53;
		  front_toprightwall1.position.z = -114;
  		  
  		  		// the front top wall
  		front_topbackwall1.position.x = 200;
  		front_topbackwall1.position.y = -53;
  		front_topbackwall1.position.z = 8;
  		  
  		    		  // the first inside wall of the top house2 that faces the outside
  		  insidewall21.position.y = -50.5;
  		  insidewall21.position.x = 115;
  		  insidewall21.position.z = -86;
  		  
  		    		  // the second inside wall of the top house2 that faces the inside next to the ladder going into the balcony
  		  insidewall22.position.y = -50.5;
  		  insidewall22.position.x = 142;
  		  insidewall22.position.z = -60;
  		  
  		  
  		  scene.add(front_topwall1, front_topleftwall1, front_toprightwall1, front_topbackwall1, insidewall21, insidewall22);
				collideObject.push(front_topwall1, front_topleftwall1, front_toprightwall1, front_topbackwall1, insidewall21, insidewall22);
			}
			tophouse2();
			
			
			// the small yellow house
			
			function hut(){
			  const hut_frontwall = new THREE.Mesh(new THREE.BoxGeometry(90,100,50),new THREE.MeshBasicMaterial({color:"yellow"}));
			
			const hut_roof = new THREE.Mesh(new THREE.BoxGeometry(1, 60, 60), new THREE.MeshBasicMaterial({color:"grey"}));
			
			const hut_roof2 = new THREE.Mesh(new THREE.BoxGeometry(1, 60, 60), new THREE.MeshBasicMaterial({color:"grey"}))
			
			const hut_f = new THREE.Mesh(new THREE.BoxGeometry(80,30,1), new THREE.MeshBasicMaterial({color:"grey"}));
			
			// the position
			hut_frontwall.position.z = 330;
			hut_frontwall.position.y = -4;
			
			//the hut roof
			hut_roof.position.z = 330;
			hut_roof.position.y = -67;
			hut_roof.position.x = -20;
			
			// the second side of the roof basiclly the left side from a straight view
			hut_roof2.position.z = 330;
			hut_roof2.position.y = -67;
			hut_roof2.position.x = 20;
			
			// the front
			hut_f.position.z = 300;
			hut_f.position.y = -67;
			hut_f.position.x = 5;
			
			//the rotation
			hut_roof.rotation.z = 20;
			//the second roof
			hut_roof2.rotation.z = -20;
			
			
			  scene.add(hut_frontwall, hut_roof, hut_roof2, hut_f);
			  collideObject.push(hut_frontwall, hut_roof, hut_roof2, hut_f);
			}hut();

		} house();