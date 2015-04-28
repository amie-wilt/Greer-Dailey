<?php

error_reporting(E_ALL);

require_once("class.phpmailer.php");
$mail = new PHPMailer(true);

//Submission Data
$ipaddress = $_SERVER['REMOTE_ADDR'];

//Form Data
$firstName = $_POST['first-name'];
$lastName = $_POST['last-name'];
$email = $_POST['email'];
$message = $_POST['questions-comments'];
$to = $_POST['to'];

//Email Body
$emailBody = '';
$emailBody = $emailBody . 'First Name: ' . $firstName . '<br>';
$emailBody = $emailBody . 'Last Name: ' . $lastName . '<br>';
$emailBody = $emailBody . 'Email: ' . $email . '<br>';
$emailBody = $emailBody . 'Comments/Questions: ' . $message;

$mail->SetFrom($email, $lastName);
$address = $to;
$mail->AddAddress($address, 'Greer | Dailey');
$mail->Subject = 'Greer Daily Form Submission | ' . $firstName . ' ' . $lastName;

$mail->MsgHTML($emailBody);

$mail->Send();


//$subject = 'Contact Form Submission From: ' . $firstName . " " . $lastName;
//
//$headers = 'Content-Type: text/html' . '\r\n';
//$headers.= $_POST['contact'] . '\r\n';
////    mail( $_POST['email'], $usersubject, $emailBody, $headers);
//mail($to, $subject, $emailBody, $headers);

//header('Location: contact-thanks.html');

?>



