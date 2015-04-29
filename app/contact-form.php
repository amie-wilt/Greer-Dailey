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

$fullName = $firstName . ' ' . $lastName;

//Email Body
$emailBody = '';
$emailBody = $emailBody . '<div style="padding:bottom:5px;border-bottom:1px solid #d9dcdd;margin-bottom:5px;"><span><strong style="color:#F3600C;">First Name: </strong></span> <span>' . $firstName . '</span></div><br>';
$emailBody = $emailBody . 'Last Name: ' . $lastName . '<br>';
$emailBody = $emailBody . 'Email: ' . $email . '<br>';
$emailBody = $emailBody . 'Comments/Questions: ' . $message;

$mail->SetFrom($email, $fullName);
$address = $to;
$to_emails = explode(',',$to);
    foreach($to_emails as $to_email){
        $mail->AddAddress($to_email);
    }
$mail->Subject = 'Greer Daily Form Submission | ' . $fullName;

$mail->MsgHTML($emailBody);

$mail->Send();

?>



