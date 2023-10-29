<?php
   
   $name =  $_POST["Name"];
   $winscore =  $_POST["WinScore"];
   $totaldmg =  $_POST["totalDmg"];
   $totalgold =  $_POST["totalGold"];
   
   $pw = '';
   $user = 'root';
   $basa = 'analytics';
   $host = 'localhost';
   $have = true;

   $sql = new mysqli($host,$user,$pw,$basa);
   $quere = "SELECT * FROM `statistics`";
   $result = $sql->query($quere);
   for($j = 1; $j < $result->num_rows; $j++){
    $result->data_seek($j);
    $mass = $result->fetch_array(MYSQLI_NUM);
    echo $mass[1],$name;
    if(strtolower($mass[1]) == strtolower($name)){
      $have = false;
      echo '11';
     if($mass[2] < $winscore){
      echo '5646';
      $sql->query("UPDATE statistics SET WinCount=$winscore, Name = '$name', DMG = $totaldmg, GetGold = $totalgold WHERE Name='$name';");
      $sql->close();
     }
    }
   }
   if($have){
      echo 'have';
      $quere = "INSERT INTO `statistics` (`Id`, `Name`, `WinCount`, `DMG`, `GetGold`)
      VALUES (NULL, '$name', '$winscore', '$totaldmg', '$totalgold');";
     $sql->query($quere);
     $sql->close();
   }
//  ?>