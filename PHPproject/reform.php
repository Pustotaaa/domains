<?php 
require_once "loginWeb.php";
try
 {
 $pdo = new PDO($attr, $user, $pass, $opts);
 }
 catch (PDOException $e)
 {
 throw new PDOException($e->getMessage(), (int)$e->getCode());
 }
 if (isset($_POST['delete']) && isset($_POST['Id']))
 {  
 $Id = get_post($pdo, 'Id');
 $query = "DELETE FROM good WHERE id=$Id";
 $result = $pdo->query($query);
 }
 if (isset($_POST['Id']) &&
 isset($_POST['Name']) &&
 isset($_POST['price']))
 {
 $Id = get_post($pdo, 'Id');
 $Name = get_post($pdo, 'Name');
 $price = get_post($pdo, 'price');
 $query = "INSERT INTO good VALUES" .
 "($Id, $Name, $price)";
 $result = $pdo->query($query);
}
 echo <<<_END
 <form action="index.php" method="post"><pre>
 Id <input type="text" name="Id">
 Name <input type="text" name="Name">
 price <input type="text" name="price">
 user name <input type="text" name="User">
 Adres self <input type="text" name="Adres">
 <input type="submit" value="Добавить запись"> 
 </pre></form>
_END;
 $query = "SELECT * FROM good";
 $result = $pdo->query($query);
 while ($row = $result->fetch())
 {
 $r0 = htmlspecialchars($row['Id']);
 $r1 = htmlspecialchars($row['Name']);
 $r2 = htmlspecialchars($row['price']);
 echo <<<_END
 <pre>
 Id $r0
 Name $r1
 price $r2
 </pre>
 <form action='sqltest.php' method='post'>
 <input type='hidden' name='delete' value='yes'>
 <input type='hidden' name='Id' value='$r4'>
 <input type='submit' value='DELETE RECORD'></form>
_END;
 }
 function get_post($pdo, $var)
 {
 return $pdo->quote($_POST[$var]);
 }
?>