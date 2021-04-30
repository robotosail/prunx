//"use strict";

// profile

// variables for the display
const display2 = document.getElementById("display2");
const profile = document.getElementById("profile");


// variables for the display
const weapondisplay = document.getElementById("weapon-ui");
const weapon_display = document.getElementById("weapon-button");
const display = document.getElementById("display1");
const settings = document.getElementById("setting");
const ui = document.getElementById("Ui");
const controls_button = document.getElementById("cutcon");
const setin = document.getElementById("set");
const controlpanel = document.getElementById("controlspanel");

// to make the ui disappear
controls.addEventListener('unlock',function(){
  ui.style.display = 'block';
  weapon_display.style.display = "block";
  weapondisplay.style.display = "none";
});

// to make the ui and other stuff disappear when clicked
controls.addEventListener('lock', function(){
  ui.style.display = 'none';
  display.style.display = 'none';
  display2.style.display = 'none';
  weapon_display.style.display = "none";
  controlpanel.style.display = "none";
  
});


// function to display the settings
function display1(){
  display.style.display = "block";
  display2.style.display = "none";
  weapondisplay.style.display = "none";
}

//event listener for when it is clicked
settings.addEventListener("click", display1);

window.addEventListener("load", function(){
  display.style.display = "none";
  weapondisplay.style.display = "none";
});



// function to display the profile
function show(){
  display2.style.display = "block";
  display.style.display = "none";
  weapondisplay.style.display = "none";
}

//event listener for when it is clicked
profile.addEventListener("click", show);


// the weapon display

function weapon_ui(){
  weapondisplay.style.display = "flex";
  display.style.display = "none";
  display2.style.display = "none";
  
}



function controlspanel(e){
 
    display.style.display = "none";
  controlpanel.style.display = "block";
}


function goback(e){
    
  controlpanel.style.display = "none";
 
 display.style.display = "block";
}


weapon_display.addEventListener("click", weapon_ui);


controls_button.addEventListener("click", controlspanel);
setin.addEventListener("click", goback);