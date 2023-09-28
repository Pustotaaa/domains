<?php // testfile.php
//$like = fopen('test.txt', 'r+') or die ("eror");
//$file = fread($like,999);
//fclose($like);
//echo $file;
 ?>
 <br>
 <br>
 <br>
 
 <form method='post' action='curect.php' enctype='multipart/form-data'>
 Выберите файл: <input type='file' name='filename' size='100'>
 <input type='submit'value ='Хрю!' >
 </form


 <?php
 if ($_FILES)
 {
 $name = $_FILES['filename']['name'];
 $name = strtolower(mb_ereg_replace("[^A-Za-z0-9.]", "", $name));
 move_uploaded_file($_FILES['filename']['tmp_name'], $name);
 //echo "Загружаемое изображение '$name'<br><img src='$name'>";
 }
 echo "</body></html>";
?>