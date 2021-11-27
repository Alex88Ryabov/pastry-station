<?php

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

if (mail( "artem.girda@gmail.com", "Заявка с сайта", "message from my php", "From: ryabovalex88@gmail.com"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}

?>