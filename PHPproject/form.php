<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<?php
require_once 'loginWeb.php';
require_once 'index.php';
$conn = new mysqli($hm, $un, $pw, $db);
if ($conn->connect_error) die($conn->connect_error);
if (isset($_POST['delete']) && isset($_POST['Id'])) {
    $Id = get_post($conn, 'Id');
    $query = "DELETE FROM good WHERE Id='$Id'";
    $result = $conn->query($query);

    $query2 = "DELETE FROM test2 WHERE Id='$Id'";
    $result2 = $conn->query($query2);
    if (!$result) echo "Сбой при удалении данных: $query<br>" . $conn->error . "<br><br>";
}
if (
    isset($_POST['Id']) &&
    isset($_POST['Name']) &&
    isset($_POST['price'])
) {
    $Name = get_post($conn, 'Name');
    $price = get_post($conn, 'price');
    $Id = get_post($conn, 'Id');
    $user = get_post($conn, 'User');
    $Adres = get_post($conn, 'Adres');
    $query = "INSERT INTO `good` (`Id`, `Name`, `price`) VALUES ('$Id', '$Name', '$price')";
    $query2 = "INSERT INTO `test2` (`Id`, `User`, `Adres`) VALUES ('$Id', '$user', '$Adres')";

    $result = $conn->query($query);
    $result2 = $conn->query($query2);
    if (!$result) echo "Сбой при вставке данных: $query<br>" .
        $conn->error . "<br><br>";
}
?>
<div class="form-wrap">
    <form class="form" action="index.php" method="post">
        <pre>
 Id <input type="text" name="Id">
 Name <input type="text" name="Name">
 price <input type="text" name="price">
 user name <input type="text" name="User">
 Adres self <input type="text" name="Adres">
 <input type="submit" value="Добавить запись"> 
 </pre>
    </form>

</div>

<?php
$query = "SELECT * FROM `good`";
$result = $conn->query($query);

$query2 = "SELECT * FROM `test2`";
$result2 = $conn->query($query2);
if (!$result) die("Сбой при доступе к базе данных: " . $conn->error);
$rows = $result->num_rows;
for ($j = 0; $j < $rows; $j++) {
    $result->data_seek($j);
    $row = $result->fetch_array(MYSQLI_NUM);

    $result2->data_seek($j);
    $row2 = $result2->fetch_array(MYSQLI_NUM);

    echo <<<_END
 <pre>
 Id $row[0]
 Name $row[1]
 price $row[2]
 User name $row2[0]
 Adres $row2[1]
 </pre>
 <form action="index.php" method="post">
 <input type="hidden" name="delete" value="yes">
 <input type="hidden" name="Id" value="$row[0]">
 <input type="submit" value="Удалить запись"></form> 
 _END;
}


$result->close();
$conn->close();
function get_post($conn, $var)
{
    return $conn->real_escape_string($_POST[$var]);
}
