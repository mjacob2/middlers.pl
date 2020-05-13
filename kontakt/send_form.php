<?php
header("content-type: application/json; charset=utf-8");
$name=isset($_POST['name']) ? $_POST['name'] : "";
$email=isset($_POST['email']) ? $_POST['email'] : "";
$phone=isset($_POST['phone']) ? $_POST['phone'] : "";
$message=isset($_POST['message']) ? $_POST['message'] : "";
$czekboks=isset($_POST['czekboks']) ? $_POST['czekboks'] : "";

if($name && $email && $phone && $message && $czekboks){
 $headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=utf-8\r\nContent-Transfer-Encoding: 8bit";
 $message_body="Formularz kontaktowy ze strony middlers.pl\n";
 $message_body.="Imię i nazwisko: $name\n";
 $message_body.="Adres email: $email\n";
 $message_body.="Numer telefonu: $phone\n\n";
 $message_body.=$message;
 if(mail("jakubicki.m@gmail.com","Formularz kontaktowy",$message_body,$headers)){
 $json=array("status"=>1);
 }
 else{
 $json=array("status"=>0,"msg"=>"<p class='status_err'>Wystąpił problem z wysłaniem formularza.</p>"); 
 }
}
else{
 $json=array("status"=>0,"msg"=>"<p class='status_err'>Proszę wypełnić wszystkie pola przed wysłaniem.</p>"); 
}
echo json_encode($json);
exit;
?>