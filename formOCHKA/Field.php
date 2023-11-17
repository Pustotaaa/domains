
<?php
require_once "loginSQL.php";
$conn = new mysqli($hm, $un, $pw, $db);

if (isset($_POST['delete']) && isset($_POST['Id']) && $_POST['action'] =='Удалить запись') {
    $Id = $conn->real_escape_string($_POST['Id']);
    $query = "DELETE FROM books WHERE Id='$Id'";
    $result = $conn->query($query);
    $query = "DELETE FROM Author WHERE Id='$Id'";
    $result = $conn->query($query);
}
global $field1;
global $field2;
if (isset($_POST['field1']) && isset($_POST['field2']) && isset($_POST['Id']) && isset($_POST['reset']) && $_POST['action'] =='Редактировать') 
{
   $Id = $conn->real_escape_string($_POST['Id']);
  //  $query = "DELETE FROM books WHERE Id='$Id'";
   // $result = $conn->query($query);
   $field1 = $_POST['field1'];

   $field2 = $_POST['field2'];
   echo <<<_END
<form align="center" action="index.php" method="post" id="form2">
<pre>
 Name <input type="text" name="name" value="$field1"> 
 Content <input type="text" name="content" value="$field2">
  <input type="submit" value="перезапись"> 
  <input type="hidden" name="Id" value="$Id">
  <input type="hidden" name="reset" value="yes">
  <input type="hidden" name="save_field1" value="$field1">
  <input type="hidden" name="save_field2" value="$field2">
 
 </pre> </form>
_END;
}//$_POST['save_field1']) && isset($_POST['save_field2'])
if (isset($_POST['reset']) && isset($_POST['Id']) && isset($_POST['name']) && isset($_POST['content'])) {
    $name = $conn->real_escape_string($_POST['name']);
    $id = $conn->real_escape_string($_POST['Id']);
    $content = $conn->real_escape_string($_POST['content']);
   // $save_field1 = $conn->real_escape_string($_POST['save_field1']);
  //  $save_field2 = $conn->real_escape_string($_POST['save_field2']);
    $query = "UPDATE `books` SET `name`='$name',`content`='$content' WHERE Id = $id";
    $conn->query($query);
    //$conn->query($query);
   // $query = "UPDATE `books` SET value = '$name' where name = '$save_field2'";
   // $conn->query($query);
}
if (
    isset($_POST['do']) &&
    isset($_POST['name']) &&
    isset($_POST['content'])&&
    isset($_POST['author'])&&
    isset($_POST['about'])
) {
    $name = $conn->real_escape_string($_POST['name']);
    $content = $conn->real_escape_string($_POST['content']);
    $author = $conn->real_escape_string($_POST['author']);
    $about = $conn->real_escape_string($_POST['about']);
    try
    {
       
        $query = "INSERT INTO `Author` (`author`, `about`) VALUES ('$author', '$about')";
        $result = $conn->query($query);
        $query = "INSERT INTO `books` (`name`, `content`) VALUES ('$name', '$content')";
        $result = $conn->query($query);
    } catch(Exception $result)
    {
        echo "Сбой при вставке данных проверьте поля!";
    }
}
function id_exsite($id)
{
    $query = "SELECT * from books where id = $id";
   // $result = $conn->query($query);
    return isset($result);
}
echo <<<_END
<form action="index.php" method="post" id="form">
<pre>
 Name <input type="text" name="name" > 
 Content <input type="text" name="content" >
 Author <input type="text" name="author" >
 About <input type="text" name="about" >
 <input type="hidden" name="do" value="yes">
 <input type="submit" value="запись"> 
 </pre> </form>
_END;
?>
<div id="form3">
<?php
 $query = "SELECT b.id, b.name, b.content, a.author, a.about FROM Author a, books b WHERE a.id = b.id;";
 $result = $conn->query($query);
 $masss = $result->num_rows;   
print_r($result->num_rows);
for ($j = 0; $j < $masss; $j++) {
   $result->data_seek($j);
   $mass = $result->fetch_array(MYSQLI_NUM);
   echo <<<_END
<pre>
Id $mass[0] 
Name $mass[1]
Content $mass[2]
Author $mass[3]
About $mass[4]
</pre>
<form action="index.php" method="post">
<input type="hidden" name="delete" value="yes">
<input type="hidden" name="Id" value="$mass[0]">
<input type="submit" name="action" value="Удалить запись">
<input type="hidden" name="reset" value="yes">
<input type="hidden" name="Id" value="$mass[0]">
<input type="hidden" name="field1" value="$mass[1]">
<input type="hidden" name="field2" value="$mass[2]">
<input type="submit" name="action" value="Редактировать">
</form> 
_END;

}

$result->close();
$conn->close();
?>
</div>