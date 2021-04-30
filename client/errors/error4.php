    <?php
                if(isset($_GET["error"])){
                if($_GET["error"] == "success"){
                echo "<script>
                document.getElementById('display2').style.display ='block';
                </script>
                <div style='background-color:lightgreen; border:2px solid green; opacity:60%; border-radius:5px; padding:10px;'>
                <div style='color:green;'>you have registered success fully!</div>
                <p style='color:green;'>sign in to you account now!</p>
                </div>";
                }
                }
        ?>