<?php
$connect = new mysqli('localhost','root','','Hostel');

if(isset($_POST['login']) && isset($_POST['password']))
{
$login = ($_POST['login']);
$password = $_POST['password'];

    $queryLogin = "SELECT login FROM `Users` WHERE login = '$login';";
    $resualtLogin = $connect->query($queryLogin);

    $queryPassword = "SELECT login FROM `Users` WHERE password = '$password';";
    $resualtPassword = $connect->query($queryPassword);

    if($resualtPassword->num_rows && $resualtLogin->num_rows == 1)
    {
    echo file_get_contents("C:\Game\OSPanel\domains\Hotel\session.html");
    }   
    else
    {
        echo "not";
    }
}
else{
echo "not";
}

if(isset($_POST['FIO'])
&& isset($_POST['number_room'])
&& isset($_POST['status_pay']) 
&& isset($_POST["number_telephone"]))
{
$FIO = ($_POST['FIO']);
$number_room = $_POST['number_room'];
settype($number_room,"int");
$status_pay = $_POST['status_pay'];
$number_telephon = $_POST['number_telephone'];

        $query = "INSERT INTO `Guests` (`Id`, `FIO`, `number_room`, `status_pay`, `number_telephone`) VALUES
        (null,`$FIO`,$number_room,`$status_pay`,`$number_telephon`);";
    $resualt = $connect->query($query);
}
?>




