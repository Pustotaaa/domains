<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ABYSS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php
    $a;
    $b;
    $i;
    $result;
?>

<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
</ul>

<a href="#" class="btn">Hover Me</a>

<form action="index.php" method="post">
    <input type="text" name="post">
    <input type="submit">
</form>
<?php
$eee=isset($_POST['post']);
if(isset($_POST['post'])){
echo <<<_END
$eee+$eee
_END;
}
?>

<div id="fafafa">
     <video src="rol.mp4" id="fafafa1" autoplay controls ></video> 
     <script src="js.js" defer></script> 
</div>
</body>
</html>