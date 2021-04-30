function create_random_string(string_length){
  //empty string that displays the new generated random string.
  let gameCode = "";
  
  // creating a variable to hold random string
  let codeCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123567890abcdefghijklmnopqrstuvwxyz";
  
  // a loop that generates the random string.
  for(let i = 0; i< string_length; i++){
    gameCode += codeCharacters.charAt(Math.floor(Math.random() * codeCharacters.length));
  }
  //console loging the new generated string
  return gameCode;
}
  document.getElementById("string_inner_container").innerHTML =   create_random_string(7);
  
  
function reload(e){
  if(e.keyCode == 82){
    document.location.reload();
  }
}
document.addEventListener("keydown", reload);