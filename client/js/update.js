let showbtn = document.getElementById("version-btn");

function showUpdate(){
let update_container = document.getElementById("update-container");

if(update_container.style.display === "block"){
  update_container.style.display = "none";
}
//hide the update button
else{
  update_container.style.display = "block";
  }
}

showbtn.addEventListener("click", showUpdate);

//hide update button when controls are locked
controls.addEventListener("lock", function(){
  showbtn.style.display = "none";
});

//show update button when controls are unlocked.
controls.addEventListener("unlock", function(){
  showbtn.style.display = "block";
});