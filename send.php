<?php
$name = $_POST['f-name'];
$phone = $_POST['f-phone'];
$email = $_POST['f-email'];

$name = trim($name);
$phone = trim($phone);
$email = trim($email);

$to  = "<b2bfinanceua@gmail.com>";

$subject = "B2BFinance Заявка с нового сайта"; 

$message = 
	"<p>Заявка с нового сайта B2BFinance</p>  
	<p>От:<b> $name </b></p>
	<p>Телефон:<b> $phone </b></p>
	<p>E-mail:<b> $email </b></p>";

$headers  = "Content-type: text/html; charset=\"utf-8\" \r\n"; 
$headers  .= "From: NewB2BFinance \r\n";

if($name == "Joe" || $name == "" || $email == ""){
	header("location: thankyou-ru.html");
} elseif(mail($to, $subject, $message, $headers)){
	header("location: thankyou-ru.html");
}
else{
	echo 'something not quite right, server error, did not sent';
}

?>