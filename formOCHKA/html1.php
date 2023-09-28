
<?php
  
  $query = "SELECT * FROM `books`";
  $result = $conn->query($query);
  $masss = $result->num_rows;   

for ($j = 0; $j < $masss; $j++) {
    $result->data_seek($j);
    $mass = $result->fetch_array(MYSQLI_NUM);
    echo <<<_END
 <pre>
 Id $mass[0] 
 Name $mass[1]
 Content $mass[2]
 </pre>
 <form action="index.php" method="post" id="form3">
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