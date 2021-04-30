function profilesetting(){
//initating the profile display
let profile = document.getElementById("display2");

profile.style.display = "block";

profile.innerHTML = "<img src='image/x.jpg' class='x' onclick='xout()'> <script src='profile.php'></script>";


}
profilesetting();
