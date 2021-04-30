<?php
        if(isset($_GET["error"])){
                if($_GET["error"] == "invalidinput"){
                echo "<script>
                document.getElementById('display2').style.display ='block';
                </script>
                <div style='background-color:pink; border:2px solid red; opacity:60%; border-radius:5px; padding:10px;'>
                <div style='color:red;'>username and password must be filled in!</div>
                </div>";
                }
                }

?>