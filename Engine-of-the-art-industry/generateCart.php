<?php 
      require_once "sqlLogin.php";
 $mysql = new mysqli($host,$user,$pw,$basa);
$mysql->query("SET NAMES 'utf8'");
$result =  $mysql->query("SELECT * FROM `listAnime`");

$rows = $result->num_rows;
$url = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];

for ($i=0; $i < $rows; $i++) { 
    $result->data_seek($i);
    $mass = $result->fetch_array(MYSQLI_NUM);
    echo <<<_END
    <div class="carts">
    <div class="imageCarts">    
        <a href="$url/Anime.php?a=$mass[0]">
            <div class="img" style="background-image: url($mass[5]); width: 100%; height: 100%;background-size: cover;"></div>
        </a>
    </div>
    <a href="$url/Anime.php?a=$mass[0]">
       $mass[1]
    </a>
    </div>
    _END;
}
 ?>