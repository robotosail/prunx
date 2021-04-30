const newGameBtn = document.getElementById("newGameButton");
const joinGameBtn = document.getElementById("joinGameButton");
const gameCodeInput = document.getElementById("gameCodeInput");
const gameCodeDisplay = document.getElementById("gameCodeDisplay");
const codebtn = document.getElementById("nGameButton");
const code_container = document.getElementById("code_container");

function showGameCode(){

if(code_container.style.display === "block"){
  code_container.style.display = "none";
}
//hide the update button
else{
  code_container.style.display = "block";
  }
  document.getElementById("server-category").style.display = "none";
document.getElementById("display2").style.display = "none";
document.getElementById("display1").style.display = "none";
document.getElementById("weapon-display").style.display = "none"; 
}

codebtn.addEventListener("click", showGameCode);

//hide update button when controls are locked
controls.addEventListener("lock", function(){
  codebtn.style.display = "none";
  code_container.style.display = "none";
});

//show update button when controls are unlocked.
controls.addEventListener("unlock", function(){
  codebtn.style.display = "block";
  code_container.style.display = "none";
});
sock.on("gameCode", handleGameCode)
sock.on("unknownGame", handleUknownGame);
sock.on("tooManyPlayers", handleTooManyPlayers);

newGameBtn.addEventListener("click", newGame);
joinGameBtn.addEventListener("click", joinGame);

function newGame(){
sock.emit("newGame");
init();
}

//creating the game code
function joinGame(){
  const code = gameCodeInput.value;
  sock.emit("joinGame", code);
  alert("joined game successfully")
}

function handleGameCode(gameCode){
gameCodeDisplay.innerText = gameCode;
}

function handleUknownGame(){
alert("unknown game code");
reset();
}

function handleTooManyPlayers(){	  
alert("This Game is full");
reset();
}

function reset(){
  gameCodeInput.value = "";
  gameCodeDisplay.innerText = "";
}