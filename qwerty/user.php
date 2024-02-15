<?php
class user {
    public $id;
    public $name;

    public function save(){
    global $sql;
     $sql->query("INSERT INTO `user` (`Id`, `name`) VALUES (NULL, '$this->name')");
    }
    public function __construct ($id,$name) {
       $this->id = $id;
       $this->name = $name;
    }
    public function getALL($table){
      $result = array();
      for ($i=0; $i < count($table); $i++) { 
      array_push($result,$table[$i]->id_user);
      }
      return $result;
    }
   }
   ?>