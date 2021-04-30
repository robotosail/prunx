let serverbtn = document.getElementById("server-text");

function showservers(){
let server_display = document.getElementById("server-category");

  if(server_display.style.display === "block"){
    server_display.style.display = "none";
    }
    else{
      server_display.style.display = "block";
    }
if(server_display.style.display === "block"){
document.getElementById("code_container").style.display = "none";
document.getElementById("display2").style.display = "none";
document.getElementById("display1").style.display = "none";
document.getElementById("weapon-display").style.display = "none"; 
}
}

serverbtn.addEventListener("click", showservers);

controls.addEventListener("lock", function(){
  serverbtn.style.display = "none";
});

controls.addEventListener("unlock", function(){
  serverbtn.style.display = "block";
});