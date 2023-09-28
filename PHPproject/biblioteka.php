<?php
function lost($count, $str)
{
    return  $count . "    " . $str;
}
function first($count, $str)
{
    return  $count . "   " . $str;
}
function existg()
{
    foreach ($_POST['Id'] as $h)
    {
        if($_POST['SelectId'] == $h){
        return true; 
        exit();}
        else
        return false;
    }
}
function MethodQuery($id)
{
    
    if (isset($_POST['SelectId']))
        $id = $_POST['SelectId'];
    
    global $query2;
    $query2 = "SELECT * FROM good where Id = $id";
    if($query2)
    echo 'lol';
    else
    return $query2;
    
}
class userfull
{
    public $elo, $lp;
    function mmr($elo2, $lp2)
    {
        switch ($elo2) {
            case "s":
                $lp2 += 100;
                break;
            case "g":
                $lp2 += 200;
                break;
            case "p":
                $lp2 += 300;
                break;
            case "d":
                $lp2 += 400;
                break;
        }
        return $lp2;
    }

    function __construct($name)
    {
        global $mymy;
        $mymy = $name;
    }
    function __destruct()
    {
        global $mymy;
        echo $mymy;
    }
}
