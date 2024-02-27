<!DOCTYPE html> <!-- 19.02 10 00 start-->
<html>

<head>
    <title>Engine</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">

</head>

<body>

    <!-- шапка сайта -->
   <?php include "header.html"?>
    <div id="player">
        <?php
     require_once "sqlLogin.php";
   $mysql = new mysqli($host,$user,$pw,$basa);
   $mysql->query("SET NAMES 'utf8'");
   (int)$animeID = $_GET["a"];
   $result = $mysql->query("SELECT * FROM `listAnime` Where id = " . (int)$animeID);
//    print_r("SELECT * FROM `listAnime` Where id = " . (int)$animeID);
$result->data_seek(1);
$mass = $result->fetch_array(MYSQLI_NUM);
echo '<pre style="color: #ff8b00;margin: 3%;font-size: 27px;">'
.$mass[1].'</pre>';
echo'<div class="img" style="background-image: url('
.$mass[5].'); width: 250px;height: 400px;background-size: cover;;
height: 400px;background-size: cover;"></div>';
echo '<div style="width:85%;margin:3%;margin-bottom:2%;text-align:center;color:#6c6c6c;font-size:22px"> Описание аниме '.'</div>';
echo '<div style="
display: inline-block;
width: 65%;
color: #6c6c6c;
font-size: 19px;">'.$mass[4].'</div>';
echo '<iframe  style="margin: 6%;" src="'.$mass[3].'" width="607" height="360" frameborder="0" AllowFullScreen allow="autoplay *; fullscreen *" ></iframe> 
';
    //  print_r($xml);
    ?>


    </div>
    <footer>ко</footer>
    <script src="jquery.js">
    </script>
    <script src="script.js"></script>
</body>

</html>