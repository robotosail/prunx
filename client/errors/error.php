<?php
        if(isset($_GET["error"])){
                if($_GET["error"] == "invaliduser"){
                echo "<script>
                document.getElementById('display2').style.display ='block';
                </script>
                <div style='background-color:pink; border:2px solid red; opacity:60%; border-radius:5px; padding:10px;'>
                <div style='color:red;'>Username or password is wrong!</div>
                </div>";
                  }
                }

?>