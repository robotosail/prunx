const sock = io();

function writeevent(text) {
  log(text);
}

//happens when the user connects to the game
sock.on("join", writeevent);
// happens when the user joins the game
sock.on("entergame", writeevent);
//happens when user leaves game
sock.on("LeaveGame", writeevent);
//happens when users are chatting
sock.on("typing", writeevent);
//shows the player when they connect
sock.on("connect", function () {
  sock.emit("requestOldPlayers", {});
  //the bullets
  sock.emit("requestOldBullets", {});
});
//happens when user moves
//it updates the players position
sock.on("updatePosition", function (data) {
  updatePlayerPosition(data);
});
//creates player every time someone joins
sock.on("createPlayer", function (data) {
  createPlayer(data);
});
//adds player when someone joins
sock.on("addOtherPlayer", function (data) {
  addOtherPlayer(data);
});
//removes player when someone leaves the game
sock.on("removeOtherPlayer", function (data) {
  removeOtherPlayer(data);
});
/**/
//when the user shoots
//it updates the players position
sock.on("updateBulletPosition", function (data) {
  updateBulletPosition(data);
});
//creates bullet every time player shoots
sock.on("createBullet", function (data) {
  createBullet(data);
});
//adds bullet when other player shoots 
sock.on("addOtherBullet", function (data) {
  addOtherBullet(data);
});
//removes player when someone leaves the game
sock.on("removeOtherBullet", function (data) {
  removeOtherBullet(data);
});
