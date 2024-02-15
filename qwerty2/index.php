<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport">
  <title>Document45</title>
</head>
<body>
  <form action="" method="post">
    <input type="text" name="name"  required>
    <input type="text" name="host"  required>
    <input type="submit">
  </form>
  <?php
  $pw = '';
  $user = 'root';
  $basa = 'LeagueOfsvin';
  $host = 'localhost';
  $sql = new mysqli($host,$user,$pw,$basa);

  $query = "SELECT user,host from mysql.user;";
  $result = $sql->query($query);
  $j = $result->num_rows;

  for ($i = 0; $i < $j; $i++) {
      $result->data_seek($i);
      $mass = $result->fetch_array(MYSQLI_NUM);
      echo 'name = '.$mass[0] . '  host = '.$mass[1]. '<br>';
   }
 
if(isset($_POST["name"]) & isset($_POST["host"])){
  
  
  $name = $_POST["name"];
  $host = $_POST["host"];
  // echo $name ." a ". $host;

  $query = "CREATE USER '$name'@'$host' IDENTIFIED WITH caching_sha2_password BY '000';";

  $sql->query($query);
  $query = "GRANT SELECT, UPDATE, DELETE ON *.* TO '$name'@'$host';";
  $sql->query($query);
 }

// for ($i=0; $i < count($finance); $i++) { 
//   // echo 'user '.$i. ":    ";
//   echo 'id = ' . $finance[$i]->id . " ";
//   echo 'id_user = ' .$finance[$i]->id_user. " ";
//   echo 'cash = ' .$finance[$i]->cash . '<br>';
// } 
// $u = new finance(0,0,0);

// print_r($u->getALL($finance));
/////
// class Users extends finance{};
  ?>
  
</body>
</html>
1



<!-- 
//  class User{
//   public $name;
//   public $password;
//   public $email;
//   public $data;
//   public function __construct ($name, $password, $email, $data) {
//     $this->name = $name;
//     $this->password = $password;
//     $this->email = $email;
//   

  // $this->data = $data;
// }
// public function view()
// {
//   echo $this->name . $this->password . $this->email . $this->data;
// }
// }
// $user1 = new User('no ',' 321q234e3 ','email ','13.04');


// $user2 = new User('nato ',' 321q46e3 ','email ','13.04');


// $user3 = new User('papor ',' 31qe3 ','email ','13.03');
// // $user3->view();

// for ($i=0; $i < 5; $i++) { 
//   $user1->view();
//   echo '<br>';
// }






//    -->