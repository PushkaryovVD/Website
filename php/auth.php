<?php
    $email = $_POST['umail'];
    $pass=$_POST['upass'];

    $mysql=new mysqli('website','root','','surfrider');

    
    $result = $mysql->query("SELECT * FROM `user` WHERE `email` = '$email' AND `password` = '$pass'");
    $user = $result->fetch_assoc();
    
    if ($user==0) {
        echo "Нет пользователя";
        exit();
    }

    
    $mysql->close();
    header('Location: /');
?>
