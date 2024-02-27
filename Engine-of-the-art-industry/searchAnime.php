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
    <!-- центр сайта -->
    <div id="content">
        <div id="about" style="font-size: 20px;"> Engine art это небольшой проэк просмотра контента</div>
        <div id="randomAnimeCard">
            <?php
             if(!isset($_POST["search"])){
                exit;
            }
                $searchForm = $_POST["search"];
                require_once "sqlLogin.php";;
             $mysql = new mysqli($host,$user,$pw,$basa);
             $mysql->query("SET NAMES 'utf8'");
            $result =  $mysql->query("SELECT * FROM `listAnime` WHERE nameEng LIKE '%$searchForm%' or nameRus LIKE '%$searchForm%';");
            $rows = $result->num_rows;
           
            if($rows < 1){
                echo '<pre style=" text-align: center;"> по запросу "'.$searchForm.'" нечего нету попробуйте иначе?</pre>';
                exit;
            }
            for ($i=0; $i < $rows; $i++) { 
                $result->data_seek($i);
                $mass = $result->fetch_array(MYSQLI_NUM);
                echo <<<_END
                <div class="carts">
                <div class="imageCarts">
            
                    <a href="Anime.php?a=$mass[0]">
                        <div style="background-image: url($mass[5]); width: 100%; height: 100%;background-size: cover;"></div>
                    </a>
                </div>
                <a href="Anime.php?a=$mass[0]">
                   $mass[1]
                </a>
                </div>
                _END;
            }
                ?>
        </div>

    </div>
    <!-- конец сайта -->
    <footer>footer</footer>
    <!-- js -->
    <script src="jquery.js">
    </script>
    <script src="script.js"></script>

</body>

</html>