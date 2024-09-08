<?php
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = "Hey Allyssa, someone sent you a message from your personal portfolio. " + $name + ", " + $email + " says \n\n\n" + $_POST["message"];

mail(
    'allyssapoul@outlook.com',
    $subject,
    $message,
    ):
?>
