/* the fov*/

function rangeval(value) {
  document.getElementById("rangeValue").innerHTML = value;
  camera.scale.z = value;
}
/* if the mouse is moved the resolution is set to what it is*/
function res(value) {
  renderer.setPixelRatio(value);
  document.getElementById("resValue").innerHTML = value;
}

/*toggle the fps bar*/
function showfps(checked) {
  const checkbox = document.getElementById("checkbox");
  if (checked === true) {
    fps.domElement.style.display = "block";
  } else {
    fps.domElement.style.display = "none";
  }
}

/* to change the color of the ui*/
let colorWell;
const defaultColor = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector("#ui-color");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.select();
}

function updateFirst(event) {
  const p = document.getElementById("display1");
  const q = document.getElementById("display2");
  const r = document.getElementById("weapon-ui");
  const d = document.getElementById("controlspanel");

  if (p) {
    p.style.background = event.target.value;
    q.style.background = event.target.value;
    r.style.background = event.target.value;
    d.style.background = event.target.value;
  }
}

/* to change the crosshair color*/
let crosshaircolor;

window.addEventListener("load", changecolor, false);

function changecolor() {
  crosshaircolor = document.querySelector("#cross-color");
  crosshaircolor.value = defaultColor;
  crosshaircolor.addEventListener("input", updatecolor, false);
  crosshaircolor.select();
}

let cross = document.getElementById("crosshair");
function updatecolor(event) {
  let crosstop = document.getElementById("top");
  let crossleft = document.getElementById("left");
  let crossright = document.getElementById("right");
  let crossbottom = document.getElementById("bottom");

  if (cross) {
    crosstop.style.background = event.target.value;
    crossleft.style.background = event.target.value;
    crossright.style.background = event.target.value;
    crossbottom.style.background = event.target.value;
  }
}
controls.addEventListener("unlock", function (e) {
  cross.style.display = "none";
});
controls.addEventListener("lock", function (e) {
  cross.style.display = "block";
});

/*chamging the size of the croshair*/

function crosssize(value) {
  let lsize = document.getElementById("left");
  let rsize = document.getElementById("right");
  let bsize = document.getElementById("bottom");
  let tsize = document.getElementById("top");

  lsize.style.width = value + "%";

  tsize.style.height = value + "%";

  bsize.style.height = value + "%";

  rsize.style.width = value + "%";

  document.getElementById("crValue").innerHTML = value;
}

/* the ui size*/

function uisize(value) {
  const displ1 = document.getElementById("display1");
  const displ2 = document.getElementById("display2");
  const wea = document.getElementById("weapon-ui");
  const displ4 = document.getElementById("controlspanel");

  displ1.style.width = value + "%";

  displ2.style.width = value + "%";

  displ4.style.width = value + "%";

  wea.style.width = value + "%";

  document.getElementById("uiValue").innerHTML = value;
}

/*x out the settings*/

function xout() {
  const x = document.getElementsByClassName("x");
  const display1 = document.getElementById("display1");
  const display2 = document.getElementById("display2");
  const display3 = document.getElementById("weapon-ui");
  const display4 = document.getElementById("controlspanel");
  if (x) {
    display1.style.display = "none";
    display2.style.display = "none";
    display3.style.display = "none";
    display4.style.display = "none";
  }
}

function movechat() {
  const chat = document.getElementById("chat");
  chat.style.left = "0.5%";
  chat.style.height = "35%";
  chat.style.top = "57%";
}

function chatOriginalpos() {
  const chat = document.getElementById("chat");
  chat.style.left = "11%";
  chat.style.height = "50%";
  chat.style.top = "52%";
}

controls.addEventListener("lock", movechat);
controls.addEventListener("unlock", chatOriginalpos);

/* creates div into the parent every time there is an input*/
const log = function (text) {
  const parent = document.getElementById("message-Area");
  const el = document.createElement("div");
  el.innerHTML = text;

  el.style.background = "white";
  el.style.border = "2px solid green";
  parent.appendChild(el);

  if (el.innerHTML == "someone joined the game" || el.innerHTML == "someone left the game") {
    el.style.background = "purple";
  }
};

/*logs the text every time it is sumbitted*/
const onChatSubmitted = function (e) {
  e.preventDefault();

  const input = document.getElementById("inputmessage");
  const msg = document.getElementById("message-Area");
  const text = input.value;
  input.value = "";

  if (text == "") {
    return false;
  }

  if (text == " ") {
    return false;
  }

  sock.emit("typing", text);

  //unfocus from chat when submit text
  input.blur();

  //make chat scroll after every message
  setInterval(function(){
  msg.scrollTo(0,msg.scrollHeight);
  }, 1000);
};

/*logs welcome into the chat when the page is loaded*/
(() => {
  sock.emit("join", "welcome to prunx.io");
  sock.emit("entergame", "someone joined the game");

  //if it s text is true the when is is submitted it should log text
  if (text) {
    const chat = document.getElementById("chat");
    chat.addEventListener("submit", onChatSubmitted);
  }
})();

window.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    const chat = document.getElementById("inputmessage");
    chat.focus();
  }
});

/* custom scope*/
function customscope() {
  let url = document.getElementById("scope-url").value;
  scope.src = url;
  //if there is no input set default to image/scope.jpg
  if (url == "") {
    scope.src = "image/scope.jpg";
  }
}

/*the hp bar*/
const hpbar = document.getElementById("hp-bar");
function healthbarpos(e) {
  hpbar.style.display = "flex";
}

function healthbarpos2(e) {
  hpbar.style.display = "none";
}

controls.addEventListener("lock", healthbarpos);
controls.addEventListener("unlock", healthbarpos2);

/* disables the rightclick*/
window.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  return false;
});

function uidisplayagain(e) {
  // console.log(e.keyCode);
  if (e.keyCode === 27 && time <= startingMinutes) {
    const ui = document.getElementById("Ui");
    const weapon_button = document.getElementById("weapon-button");
    const chat = document.getElementById("chat");
    const logo = document.getElementById("logo");
    chat.style.left = "11%";
    chat.style.height = "50%";
    chat.style.top = "52%";

    logo.style.display = "block";
    ui.style.display = "block";
    weapon_button.style.display = "block";
  }
}
window.addEventListener("keydown", uidisplayagain);

/*the sniper button*/
let sniperbutton = document.getElementById("sniper");
let akbutton = document.getElementById("ak");
let semibutton = document.getElementById("semi");
let rocketbutton = document.getElementById("rocket");
let shotbutton = document.getElementById("shotgun");

function classselect1(e) {
  bullet = new THREE.Mesh(
    new THREE.BoxGeometry
    (0.2, 0.2, 0.5),
    new THREE.MeshBasicMaterial({
      color: "white"
    })
  );
  scope.src = "image/scope.jpg";
  scope.style.position = "absolute";
  scope.style.width = "40%";
  scope.style.height = "70%";
  scope.style.top = "15%";
  scope.style.left = "29.99%";
  scene.add(bullet);
  setInterval(inte, 5000);
}
sniperbutton.addEventListener("click", classselect1);

/*the ak function to make it activate*/
function classselect2(e) {
  bullet = new THREE.Mesh(
    new THREE.SphereGeometry(0.2, 0.2, 0.5),
    new THREE.MeshBasicMaterial({
      color: "blue"
    })
  );

  scene.add(bullet);
  setInterval(inte, 100);
  scope.src = "image/reticle.jpg";
  scope.style.position = "absolute";
  scope.style.width = "20px";
  scope.style.height = "20px";
  scope.style.top = "50%";
  scope.style.left = "50%";
  if (rightclick) {
    camera.scale.z = 10;
  }
}
akbutton.addEventListener("click", classselect2);

// the function that controls the behavour of the smei class.
function classsecet3(e) {
  bullet = new THREE.Mesh(
    new THREE.SphereGeometry(0.2, 0.2, 0.5),
    new THREE.MeshBasicMaterial({ color: "red" })
  );
  scene.add(bullet);
  setInterval(inte, 500);
  //set the scope to a reticle
  scope.src = "image/reticle.jpg";
  scope.style.position = "absolute";
  scope.style.width = "20px";
  scope.style.height = "20px";
  scope.style.top = "50%";
  scope.style.left = "50%";
  if (rightclick) {
    camera.scale.z = 10;
  }
}
semibutton.addEventListener("click", classsecet3);

// the function that controls the behavour of the rocket class.
function classsecet4(e) {
  bullet = new THREE.Mesh(
    new THREE.BoxGeometry
    (0.2, 0.2, 1),
    new THREE.MeshBasicMaterial({ color: "orange" })
  );
  scene.add(bullet);
  //set the scope to a reticle
  scope.src = "image/reticle.jpg";
  scope.style.position = "absolute";
  scope.style.width = "20px";
  scope.style.height = "20px";
  scope.style.top = "50%";
  scope.style.left = "50%";
  bulletspeed = 50;
}
rocketbutton.addEventListener("click", classsecet4);

/*the shotgun class*/
function classselect5(e) {
  bullet = new THREE.Mesh(
    new THREE.BoxGeometry
    (0.2, 0.2, 0.5),
    new THREE.MeshBasicMaterial({
      color: "white"
    })
  );

  let bullet2 = new THREE.Mesh(
    new THREE.SphereGeometry(1, 0.2, 0.5),
    new THREE.MeshBasicMaterial({
      color: "purple"
    })
  );

  let bullet3 = new THREE.Mesh(
    new THREE.SphereGeometry(0.2, 0.2, 0.5),
    new THREE.MeshBasicMaterial({
      color: "blue"
    })
  );
  scene.add(bullet, bullet2, bullet3);

  (function render() {
    requestAnimationFrame(render);
    bullet2.position.set(
      bullet.position.x - 10,
      bullet.position.y,
      bullet.position.z
    );

    //the thrid bullets
    bullet3.position.set(
      bullet.position.x + 10,
      bullet.position.y,
      bullet.position.z
    );
  })();
  bullets.push(bullet2);
  bullets.push(bullet3);

  scope.src = "image/reticle.jpg";
  scope.style.position = "absolute";
  scope.style.width = "20px";
  scope.style.height = "20px";
  scope.style.top = "50%";
  scope.style.left = "50%";
  scene.add(bullet);
  setInterval(function () {
    scene.remove(bullet, bullet2, bullet3);
  }, 100);

  setInterval(function () {
    scene.add(bullet, bullet2, bullet3);
  }, 200);
}
shotbutton.addEventListener("click", classselect5);

