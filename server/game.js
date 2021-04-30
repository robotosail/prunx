module.exports = {
makeId
}

function makeId(length){
  let result = "";
  let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  for(let i = 0; i < length; i++){
    result += character.charAt(Math.floor(Math.random() * character.length));
  }
  return result;
}