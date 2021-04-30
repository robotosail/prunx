
// const startingbullet = 2;
let bullettime = 2 * 15;
const bulletcounter = document.getElementById("ammo");
const bulletimage = document.getElementById("ammo-icon");

/* set the timer to count down for every nano*/
let bulletInterval = setInterval(counter2, 30);
let bulletseconds;

function counter2(){
 if(leftclick){
       bulletcounter.innerHTML = "30 / 30";
    /* the minute*/
  /* the second*/
   bulletseconds = Math.floor(bullettime % 30);
  /*adding the count down to show in the html*/
  bulletcounter.innerHTML = `${bulletseconds} / 30`;
  
  /* decreaseaing the timer*/
  bullettime--;
  /* if the timer is less than 0 it should stop*/
  if(bullettime <= 0){
    setInterval(id, 10);
    clearInterval(bulletInterval, 10);
    bulletcounter.innerHTML = "0 / 30";
    bulletseconds = 0;
    leftclick = false;
  }
 }
}


controls.addEventListener("lock", function(e){
  bulletcounter.style.display = "block";
  bulletimage.style.display = "block";
});

controls.addEventListener("unlock", function(e){
    bulletcounter.style.display = "none";
  bulletimage.style.display = "none";
});