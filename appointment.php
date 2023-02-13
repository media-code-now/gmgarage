<?php

	$name = trim($_POST['name']);
	$surname = trim($_POST['surname']);
	$email = trim($_POST['email']);
	$subject = trim($_POST['subject']);
	$message = trim($_POST['message']);

	if(empty($name) AND  empty($surname) AND empty($email)  AND  empty($subject) AND empty($message)) 
	{
		exit;
	}
	else 
	{
		$recipient = 'gmgaragedoorleads@gmail.com';
		
		$mail_body =
            "Name: " . $name  ."\r\n" .
            "Surname: " . $surname ."\r\n" .
            "E-mail: " . $email . "\r\n" .
            "Subject: " . $subject . "\r\n" .
            "Message:" . $message;

         $header = "From: " . $name . " <" . $recipient . ">\r\n";
            mail($recipient, $subject, $mail_body, $header);
            
    	echo 'Send';
	}

