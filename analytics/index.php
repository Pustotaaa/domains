<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="tablo">
    <p id="player">лучший тактик</p>
    <!-- <p class="info" style="">WinCount</p>
    <p class="info" style="">DMG</p>
    <p class="info" style="">GetGold</p> -->
   <?php
   $pw = '';
   $user = 'root';
   $basa = 'analytics';
   $host = 'localhost';
   $quere = 'SELECT distinct * FROM `statistics` ORDER BY WinCount DESC';
   $sql = new mysqli($host,$user,$pw,$basa);
   $result = $sql->query($quere);
   $masss = $result->num_rows; 
   echo '<p class="info" style="left: -40px; width: 10px;margin-left: 0px;margin-right: 10px;left: 6px;">№';
   for ($j = 1; $j <= $masss; $j++) {
    $o = $j -1;
    $result->data_seek($j);
    $mass = $result->fetch_array(MYSQLI_NUM);
    echo <<<_END
   <o id = "count$o"> $j</o> <br>
 _END;
 }
  echo '</p>';

   echo '<p class="info" style="left: -40px;margin-right: 0px;margin-left: 60px;width: 250px;">Name';
   for ($j = 0; $j < $masss; $j++) {
    $result->data_seek($j);
    $mass = $result->fetch_array(MYSQLI_NUM);
    echo <<<_END
   <o id = "count$j" style="text-align:left"> $mass[1]</o> <br>
 _END;
 if($j == 0){
  echo <<<_END
  <top id="tophidden" hidden> $mass[1]</top>
  _END;
 }
 }
  echo '</p>';

  echo '<p class="info" style="">Win Score';
   for ($j = 0; $j < $masss; $j++) {
    $result->data_seek($j);
    $mass = $result->fetch_array(MYSQLI_NUM);
    echo <<<_END
    <o id = "count$j"> $mass[2]</o> <br>
 _END;
 }
  echo '</p>';

  echo '<p class="info" style="">Total DMG';
   for ($j = 0; $j < $masss; $j++) {
    $result->data_seek($j);
    $mass = $result->fetch_array(MYSQLI_NUM);
    echo <<<_END
    <o id = "count$j"> $mass[3]</o> <br>
 _END;
 }
  echo '</p>';

  echo '<p class="info" style="">Total Gold';
   for ($j = 0; $j < $masss; $j++) {
    $result->data_seek($j);
    $mass = $result->fetch_array(MYSQLI_NUM);
    echo <<<_END
    <o id = "count$j"> $mass[4]</o> <br>
 _END;
 }
  echo '</p>';
  
 $result->close();
 $sql->close();

   ?>
  </div>
  <div class="glowing">
    
    <span style="--i:1;"></span>
    
    <span style="--i:2;"></span>
    
    <span style="--i:3;"></span>
    
  </div>
  
  <div class="glowing">
    
    <span style="--i:1;"></span>
    
    <span style="--i:2;"></span>
    
    <span style="--i:3;"></span>
    
  </div>
  
  <div class="glowing">
    
    <span style="--i:1;"></span>
    
    <span style="--i:2;"></span>
    
    <span style="--i:3;"></span>
    
  </div>
  
  <div class="glowing">
    
    <span style="--i:1;"></span>
    
    <span style="--i:2;"></span>
    
    <span style="--i:3;"></span>
    
  </div>
  <script src="c.js"></script>
</body>
</html>