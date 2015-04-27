<?php



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
$emailBody = $emailBody . 'First Name: ' . $firstName . '\n';
$emailBody = $emailBody . 'Last Name: ' . $lastName . '\n';
$emailBody = $emailBody . 'Email: ' . $email . '\n';
$emailBody = $emailBody . 'Comments/Questions: ' . $message;

$subject = 'Contact Form Submission From: ' . $firstName . " " . $lastName;

$headers = 'Content-Type: text/html' . '\r\n';
$headers.= $_POST['contact'] . '\r\n';
//    mail( $_POST['email'], $usersubject, $emailBody, $headers);
mail($to, $subject, $emailBody, $headers);

header('Location: contact-thanks.html');

?>






//    $subject = "Contact Form Submission";
//
//    $usersubject = 'Thank you! from the-girlfriends.com';
//    $userbody.= '<div><h1 style="text-align: center;color:#F3600C;margin-bottom: 20px;">Thank you for your submission!</h1></div>';
//
//    $body = '<div style="padding:bottom:5px;border-bottom:1px solid #d9dcdd;margin-bottom:5px;"><span><strong style="color:#F3600C;">First Name:</strong></span> <span>'.$_POST['contact-form-first-name'].'</span></div>';
//    $body.= '<div style="padding:bottom:5px;border-bottom:1px solid #d9dcdd;margin-bottom:5px;"><span><strong style="color:#F3600C;">Last Name:</strong></span> <span>'.$_POST['contact-form-last-name'].'</span></div>';
//    $body.= '<div style="padding:bottom:5px;border-bottom:1px solid #d9dcdd;margin-bottom:5px;"><span><strong style="color:#F3600C;">Email:</strong></span> <span>'.$_POST['contact-form-email'].'</span></div>';
//    $body.= '<div><span><strong style="color:#F3600C;">Comments/Questions:</strong></span> <span>'.$_POST['questions-comments'].'</span></div>';
//
//    $headers = 'Content-Type: text/html' . "\r\n";
//    $headers.= $_POST['contact'] . "\r\n";
//    mail( $_POST['email'], $usersubject, $body, $headers);
//    mail( $_POST['contact'], $subject, $body, $headers) or die('test');


