<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="" method="post">
  id_user<input type="text" name="id_user" required>
  cash   <input type="text" name="cash" required>
        <input type="submit" value="отпр">
  </form>

  <form action="" method="post">
    name <input type="text" name="name" required>
    <input type="submit" value="отпр">
  </form>

  <?php
   $pw = '';
   $user = 'root';
   $basa = 'LeagueOfsvin';
   $host = 'localhost';
   $sql = new mysqli($host,$user,$pw,$basa);

  require_once("finance.php");
  require_once("user.php");
  
    
    $query = "select * from finance";
    $result = $sql->query($query);
    $j = $result->num_rows;
    // $mass = $result->fetch_array(MYSQLI_NUM);
 
    $finance =  array ();
    for ($i = 0; $i < $j; $i++) {
      $result->data_seek($i);
      $mass = $result->fetch_array(MYSQLI_NUM);
      $time = new finance($mass[0],$mass[1],$mass[2]);
      array_push($finance, $time);
   }
  //  print_r($good);
  //  echo $good[0]->nggame;

if(isset($_POST["id_user"]) & isset($_POST["cash"])){
  
  $id_user = $_POST["id_user"];
  $cash = $_POST["cash"];
  $time = new finance(null,$id_user,$cash);
  $time->save();
  

}

if(isset($_POST["name"])){
  $name = $_POST["name"];
  $time = new user(null,$name);
  $time->save();


}
for ($i=0; $i < count($finance); $i++) { 
  // echo 'user '.$i. ":    ";
  echo 'id = ' . $finance[$i]->id . " ";
  echo 'id_user = ' .$finance[$i]->id_user. " ";
  echo 'cash = ' .$finance[$i]->cash . '<br>';
} 

$u = new finance(0,0,0);
// print_r($u->getALL($finance));
/////
class Users extends finance{};
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