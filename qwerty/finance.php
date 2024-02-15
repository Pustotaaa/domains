<?php
  class finance {
    public $id;
    public $id_user;
    public $cash;

    public function save(){
    global $sql;
     $sql->query("INSERT INTO `finance` (`Id`, `id_user`, `cash`) 
     VALUES (NULL, '$this->id_user', '$this->cash')");
    }
    public function __construct ($id,$id_user,$cash) {
       $this->id = $id;
       $this->id_user = $id_user;
       $this->cash = $cash;
    }
    public function getALL($table){
      $result = array();
      for ($i=0; $i < count($table); $i++) { 
      array_push($result,$table[$i]->id_user);
      }
      return $result;
    }
   }
  