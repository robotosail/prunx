<?php

if(isset( $_SESSION['username'])){
                echo "<script src='../js/profile.js'></script>";
                echo $_SESSION['username'];
                  }
                  else{
                  header("location:http://probot.c1.biz");
                  exit();
                  }
?>