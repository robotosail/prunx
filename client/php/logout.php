<?php
session_start();

  if(isset($_SESSION["username"])){
    session_destroy();
    unset($_SESSION["username"]);
    header("location:http://probot.c1.biz");
  }
  else{
    header("location:http://probot.c1.biz");
  }
?>