const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const port = process.env.PORT || 3000;
const world = require("./player_state");
const world2 = require("./bullet_state");
//getting the express function
const app = express();
//the client rooms
const { makeId } = require("./game")
const clientRooms = {};

//creating the server
const server = http.createServer(app);

//initating the folder
const clientPath = `${__dirname}/../client`;

app.use(express.static(clientPath));

const io = socketio(server);
io.setMaxListeners(0);

  console.log("A user joined");


  io.on("connection", (client) => {
    const id = client.id;
    console.log(`${id} joined`);
    
  //happens when the user joins the game.
  client.on("join", (text) => {
    client.emit("join", text);
  });

  //when the user enters the game
  client.on("entergame", (text) => {
    io.emit("entergame", text);
  });

  //when the user is chatting
  client.on("typing", (text) => {
    io.emit("typing", text);
  });

  //making the users see each other
  world.addPlayer(id);

  //creating the player connection
  let player = world.playerForId(id);
  client.emit("createPlayer", player);

  //brodcasting the other player
  client.broadcast.emit("addOtherPlayer", player);

  client.on("requestOldPlayers", function () {
    for (let i = 0; i < world.players.length; i++) {
      if (world.players[i].playerId !== id)
        client.emit("addOtherPlayer", world.players[i]);
    }
  });

//updating the position of the player
  client.on("updatePosition", function (data) {
    let newData = world.updatePlayerData(data);
    client.broadcast.emit("updatePosition", newData);
  });


//making the players see the other players bullet
world2.addBullet(id);

//creating the bullet connection
let bullet = world2.bulletForId(id);
client.emit("createBullet", bullet);

//brodcasting the other players bullet
client.broadcast.emit("addOtherBullet", bullet);

client.on("requestOldBullets", function () {
  for (let i = 0; i < world2.bullets.length; i++) {
    if (world2.bullets[i].bulletId !== id)
      client.emit("addOtherBullet", world2.bullets[i]);
  }
});

//updating the position of the bullets
client.on("updateBulletPosition", function (data) {
  let newData2 = world2.updateBulletData(data);
  client.broadcast.emit("updateBulletPosition", newData2);
});



//when the user wants to create a new game
client.on("newGame", function handleNewGame(){
 let roomName = makeId(7);
 clientRooms[client.id] = roomName;
  client.emit("gameCode", roomName);
  client.join(roomName);
  client.number = 1;
});

//when the user wants to join a game
client.on("joinGame", function handleJoinGame(gameCode){
  const room = io.sockets.adapter.rooms[gameCode];

  let allUsers;
  if(room){
  allUsers = room.sockets;
  }

  let numClients = 0;
  if (allUsers){
    numClients = Object.keys(allUsers).length;
  }

  if(numClients === 0){
    client.emit("unknownGame");
    return;
  }
  else if(numClients < 6){
    client.emit("tooManyPlayers");
    return;
  }

  clientRooms[client.id] = gameCode;
  client.number = 2;
  client.join(gameCode);
});

  //when the user leaves
  client.on("disconnect", (client) => {
    console.log(`${id} left the game`);
    io.emit("LeaveGame", `someone left the game`);
    //removing the player when they leave
    io.emit("removeOtherPlayer", player);
    world.removePlayer(player);
      //removing the bullet when player leaves
      io.emit("removeOtherBullet", bullet);
      world2.removeBullet(bullet);
  });
});


/*putting it at the end or begining of the connect 
function will prevent it from glitching
when user refreshes page
*/
  //the timer mech
  let interval;
  let countdownTimer, remaingSeconds;
const startingMinutes = 4;
let time = startingMinutes * 60;
/* set the timer to count down for every sec*/
interval = setInterval(counter, 1000);

function counter(){
  /* the minute*/
  let minutes = Math.floor(time / 60);
  /* the second*/
  let seconds = time % 60;
  /* if the seconds is less than 10 then it should display 0 to the next number*/
  seconds = seconds < 10 ? "0" + seconds : seconds;
  /*adding the count down to show in the html*/
  io.emit("timer", `${minutes} : ${seconds}`);
  
  /* decreaseaing the timer*/
  time--;
  console.log(time);
   /* if the timer is less than 0 it should stop*/
  if(time <= startingMinutes){
    clearInterval(interval);
    //setting the map time to 0
    time = 0;

    //the data to change the map
    io.emit("stoptimer", "0 : 00");
  
     countdownTimer = setInterval(displayMapTimer, 1000);
  }
}

let seconds = 60;

function displayMapTimer(){
  let minutes = Math.round((seconds - 30) / 60);
 remaingSeconds = seconds % 60;

//showing the timer
io.emit("showBreakTimer");
  
if(remaingSeconds < 10){
  remaingSeconds = "0" + remaingSeconds;
}

seconds --;
console.log("seconds:" + seconds);
//updating the timer
io.emit("updateBreakTimer", minutes + ":" + remaingSeconds);

if(seconds <= 0){
  seconds = 0;
  remaingSeconds = 0;
  //removing the timer
  clearInterval(countdownTimer);
  io.emit("endBreakTimer");
  }

    io.emit("changeMap");
}

io.on("newmap", function(){
  clearInterval(countdownTimer);
  seconds = 0;
console.log("yes");
})

// when an error happens on the server
server.on("error", (err) => {
  console.error("An error Happened please fix it and try again" + err);
});

//letting the server listen on a port
server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
