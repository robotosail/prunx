<?php

$host = 'fdb27.biz.nf';
$dbusername =  '3522096_registrationform';
$dbpass = 'probot.c1.bizrobotosailninja323';

if(isset($_POST["sign_up"])){
$con = mysqli_connect($host, $dbusername, $dbpass);

mysqli_select_db($con, '3522096_registrationform');

$name = $_POST['user'];
$pass = $_POST['password'];

$s = " select * from usertable where name = '$name' ";

$result = mysqli_query($con, $s);

$num = mysqli_num_rows($result);


if($name == " " || $pass == " " || $name == " " && $pass == " "){
header("location:http://probot.c1.biz?error=invalidinput");
exit();
}
# happens when username is taken
if($num == 1){
header("location:http://probot.c1.biz?error=taken");
exit();
}
else{
    $password = md5($pass);
  $reg = " insert into usertable(name , password) values('$name', '$password')";
  mysqli_query($con, $reg);
 header("location:http://probot.c1.biz?error=success");
}

}

else{
header("location:http://probot.c1.biz");
}

?>