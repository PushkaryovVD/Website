<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $pass=$_POST['pass'];
    $vpass=$_POST['vpass'];
    if (mb_strlen($email)<2) {
        echo 'Длина меньше 2 символов';
        exit();
    }
    else{
        if ($pass!=$vpass) {
            echo "Пароли не совпадают";exit();
        }
    }
    $mysql=new mysqli('website','root','','surfrider');
    $mysql->query("INSERT INTO `user` (`name`,`email`,`password`) VALUES ('$name','$email','$pass')");

    $mysql->close();
    header('Location: /')
?>