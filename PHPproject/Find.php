<?php
require_once "loginWeb.php";
/* $conn = new mysqli($hm, $un, $pw, $db);
    if ($conn->connect_error) die($conn->connect_error);
    $result = $conn->query($query);
    if (!$result) die($conn->error);
    $rows = $result->num_rows;
    for ($j = 0; $j < $rows; ++$j) {
        $result->data_seek($j);
        echo '<br>' . 'id: ' . $result->fetch_assoc()['Id'] . '<br>';
        $result->data_seek($j);
        echo 'name: ' . $result->fetch_assoc()['Name'] . '<br>';
        $result->data_seek($j);
        echo 'prise: ' . $result->fetch_assoc()['price'] . '<br>';
    }
    $result->close();
    $conn->close(); */

    global $query2, $hm, $un, $pw, $db;
    $connection = new mysqli($hm, $un, $pw, $db);
    $result = $connection->query($query2);
    $number = $result->num_rows;
    for ($i = 0; $i < $number; $i++) {
        $result->data_seek($i);
        $mass = $result->fetch_array(MYSQLI_ASSOC);
        echo '<br>' . 'id: ' . $mass['Id'] . '<br>';
        echo  'name: ' . $mass['Name'] . '<br>';
        echo  'price: ' . $mass['price'] . '<br>';

        echo <<<_END
    <form action="Index.php" method="post">
    <input type="text" name="SelectId"  >`
    <input type="submit" value="получить" >
    _END;
    }
    $result->close();
    $connection->close();

