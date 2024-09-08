<?php

if(isset($_POST['submit'])
    && !empty($_POST['name'])
    && !empty($_POST['email'])
    && !empty($_POST['message']) ) {
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = "Hey Allyssa, someone sent you a message from your personal portfolio. " . $name . ", " . $email . " says: \n\n\n" . $_POST['message'];
    mail(
         'allyssapoul@outlook.com',
         'Someone sent a message!',
         $message
    );
}

header("Location: ../index.html");

?>
