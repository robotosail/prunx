const fireflymap = document.getElementById("card-holder1");
let breakTimer = document.getElementById("breaktimer");
const mapholder = document.getElementById("map-container");

// let seconds = 5;

// function displayMapTimer(){
// let minutes = Math.round((seconds - 30) / 60);
// let remaingSeconds = seconds % 60;

// //showing the timer
// breakTimer.style.display = "block";

// if(remaingSeconds < 10){
//   remaingSeconds = "0" + remaingSeconds;
// }
// breakTimer.innerHTML = minutes + ":" + remaingSeconds;

// if(seconds === 0){
//   //removing the timer
//   breakTimer.innerHTML = "0:00";
//   seconds = 0;
//   breakTimer.style.display = "none";
//   mapholder.style.display = "none";
//   clearInterval(countdownTimer);
//   fireflymap.click();
// }
// else{
//   seconds --;

// }
// }

//triggered when the show timer event is ready
sock.on("showBreakTimer", showBreakTimer);
//triggered on the updateBreak Timer event
sock.on("updateBreakTimer", updateBreakTimer);
//triggered on the end Break Timer event
sock.on("endBreakTimer", endBreakTimer);
//triggered on the change map event.
sock.on("changeMap", loadNextMap);
//showing the timer
function showBreakTimer() {
  breakTimer.style.display = "block";
}

//updating the timer
function updateBreakTimer(data) {
  breakTimer.innerHTML = data;
}

//stoping the timer from continuing
function endBreakTimer() {
  breakTimer.style.display = "none";
  mapholder.style.display = "none";
  fireflymap.click();
}

//loading the next map
function loadNextMap() {
  //adding a click eventListener to the next map
  fireflymap.addEventListener("click", function () {
    console.log("it worked");
    document.getElementById("button").style.display = "block";
    setTimeout(map2, 1000);
    mapholder.style.display = "none";
    sock.emit("newmap");
  });
}
