//"use strict";

let scope = document.getElementById("scope");
let rightclick = false;

function mousedetect(e){
  switch(e.button){
    case 2:
    rightclick = true;
    break;
  }
}

function mousenotdown(e){
  switch(e.button){
    case 2:
      rightclick = false;
      break;
  }
}
window.addEventListener("mousedown", mousedetect);
window.addEventListener("mouseup", mousenotdown);

function mouseisdown(){
    let crosstop = document.getElementById("top");
  let crossleft = document.getElementById("left");
  let crossright = document.getElementById("right");
  let crossbottom = document.getElementById("bottom");
  
  if(rightclick){
    
    scope.style.display = "block";
    camera.scale.z = document.getElementById("range").value + 1;

  crosstop.style.display = "none";
  crossleft.style.display = "none";
  crossright.style.display = "none";
  crossbottom.style.display = "none";
  }
  else{
  camera.scale.z = document.getElementById("range").value;
  crosstop.style.display = "block";
  crossleft.style.display = "block";
  crossright.style.display = "block";
  crossbottom.style.display = "block";
  scope.style.display = "none";
  }
}



function scopeanimate(){
  requestAnimationFrame(scopeanimate);
  mouseisdown();
}

scopeanimate();