<?php
# happens when the user uses the login button to log in
$host = 'fdb27.biz.nf';
$dbusername =  '3522096_registrationform';
$dbpass = 'probot.c1.bizrobotosailninja323';

if(isset($_POST["login"])){
$con = mysqli_connect($host, $dbusername, $dbpass);

mysqli_select_db($con, '3522096_registrationform');

$name = $_POST['user'];
$pass = $_POST['password'];

$password = md5($pass);

$s = " select * from usertable where name = '$name' && password = '$password' ";

$result = mysqli_query($con, $s);

$num = mysqli_num_rows($result);

if($num == 1 ){
session_start();
$_SESSION['username'] = $name;
    header("location:http://probot.c1.biz?error=none");
exit();
}
else{
header("location:http://probot.c1.biz?error=invaliduser");
exit();
}
}
else{
header("location:http://probot.c1.biz");
exit();
}

?>
 