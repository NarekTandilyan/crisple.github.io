<?php
    $msg_box = "";
    if($_POST["btn_submit"]){
        $errors = array();
        if($_POST["name"] == "") $errors[] = "Error!";
        if($_POST["tel"] == "") $errors[] = "Error!";
        if($_POST["email"] == "") $errors[] = "Error!";
        if($_POST["message"] == "") $errors[] = "Error!";

        if(empty($errors)){
            $message = "Nombre: " . $_POST['name'] . "<br/>";
            $message .= "Tel: " . $_POST['tel'] . "<br/>";
            $message .= "Email: " . $_POST['email'] . "<br/>";
            $message = "Messaje: " . $_POST['message'];
            send_mail($message);
            $msg_box = "OK";
        }else{
            $msg_box = "Error..";
            foreach($errors as $one_error){
                $msg_box .= "<span>$one_error</span><br/>"
            }
        }
    }
    function send_mail($message){
        $mail_to = "crisple.ec@gmail.com";
        $subject = "Nuevo messaje!"
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $headers .= "From: crisple.eu\r\n";

        mail($mail_to, $subject, $message, $headers);
    }
?>