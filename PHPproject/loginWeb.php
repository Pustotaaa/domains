<?php // login.php
 $hm = 'localhost';
 $db = 'LeagueOfsvin';
 $un = 'root';
 $pw = '';
 $host = 'localhost'; // Измените при необходимости
 $data = 'LeagueOfsvin'; // Измените при необходимости
 $user = 'root'; // Имените при необходимости
 $pass = ''; // Измените при необходимости
 $chrs = 'utf8mb4';
 $attr = "mysql:host=$host;dbname=$data;charset=$chrs";
 $opts =
 [
 PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
 PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
 PDO::ATTR_EMULATE_PREPARES => false,
 ];
?>