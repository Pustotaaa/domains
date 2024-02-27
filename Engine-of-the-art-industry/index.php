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
    <?php include "header.html";?>
    <!-- центр сайта -->
    <div id="content">
        <div id="about" style="font-size: 20px;"> <pre style="font-size: 24px">Engine art</pre> <br>это небольшой проэк просмотра контента</div>

        <!-- <div id="popular">
            <div class="carts"></div>
            <div class="carts"></div>
            <div class="carts"></div>
            <div class="carts"></div>
            <div class="carts"></div>
            <div class="carts"></div>
            <div class="carts"></div>
            <div class="carts"></div>
            <div class="carts"></div>
            <div class="carts"></div>
            <div class="carts"></div>
            <div class="carts"></div>
            <div class="carts"></div>
            <div class="carts"></div>
            <div class="carts"></div>
            <div class="carts"></div>
        </div> -->

        <div id="randomAnimeCard">
            <?php 
                include "generateCart.php"; ?>
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