const countdown = document.getElementById("countdown");
let countdownTimer;
const countdownimage = document.getElementById("clockimage");
let hp = document.getElementById("hp-bar");

//updates the timer for every second
sock.on("timer", Handle_timer);
//to stop and change the game to the next map.
sock.on("stoptimer", Stop_timer);

//is called on the timer event
function Handle_timer(data){
  countdown.innerHTML = data;
}

//is triggered when the timer reaches 0
function Stop_timer(data){
    const fireflymap = document.getElementById("card-holder1");
    const mapholder = document.getElementById("map-container");

    countdown.innerHTML = data;
    countdown.style.display = "none";
    countdownimage.style.display = "none";
    /*stop player from moving*/
    movespeed = 0;
    cross.style.display = "none";
    scope.style.display = "none";
    controls.disconnect();
    controls.unlock();
    hp.style.display = "none";
	  
    //displaying the
    mapholder.style.display = "flex";


  // countdownTimer = setInterval(, 1000);
}


controls.addEventListener("lock", function(e){
  countdown.style.display = "block";
  countdownimage.style.display = "block";
});

controls.addEventListener("unlock", function(e){
    countdown.style.display = "none";
  countdownimage.style.display = "none";
});