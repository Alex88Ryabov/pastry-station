<?php

$data = json_decode(file_get_contents('php://input'), true);
$body = "<table border='0' cellpadding='0' cellspacing='0' bgcolor='#cae5ff' style='margin-bottom: 20px;'>
            <tr>
                <td style='padding: 10px 0px 10px 15px; min-width: 450px; font-size: 20px;' align='left' valign='top'>Ім'я:</td>
                <td style='padding: 10px 0px 10px 15px; min-width: 450px; font-size: 20px;' align='left' valign='top'>{$data['user_name']}</td>
            </tr>
            <tr>
                <td style='padding: 10px 0px 10px 15px; min-width: 450px; font-size: 20px;' align='left' valign='top'>Пошта:</td>
                <td style='padding: 10px 0px 10px 15px; min-width: 450px; font-size: 20px;' align='left' valign='top'>{$data['email']}</td>
            </tr>
            <tr>
                <td style='padding: 10px 0px 10px 15px; min-width: 450px; font-size: 20px;' align='left' valign='top'>Телефон:</td>
                <td style='padding: 10px 0px 10px 15px; min-width: 450px; font-size: 20px;' align='left' valign='top'>{$data['phone']}</td>
            </tr>
            <tr>
                <td style='padding: 10px 0px 10px 15px; min-width: 450px; font-size: 20px;' align='left' valign='top'>Адреса:</td>
                <td style='padding: 10px 0px 10px 15px; min-width: 450px; font-size: 20px;' align='left' valign='top'>{$data['adress']}</td>
            </tr>
        </table>";
        
if ($data['comment'] !== '') {
     $body .= "<table border='0' cellpadding='0' cellspacing='0' style='margin-bottom: 20px;'>
                    <tr>
                        <td style='padding: 10px 0px 10px 15px; font-size: 20px; min-width: 450px' align='left' valign='top'>Коментар:</td>
                        <td style='padding: 10px 0px 10px 15px; font-size: 20px; min-width: 450px' valign='top'>{$data['comment']}</td>
                    </tr>
                </table>";
};


 $body .= "<table border='0' cellpadding='0' cellspacing='0' bgcolor='#cae5ff'>
            <tr>
                <td style='padding: 10px 0px 10px 15px; font-size: 20px; min-width: 295px' align='left' valign='top'>Назва</td>
                <td style='padding: 10px 0px 10px 15px; font-size: 20px; min-width: 295px' align='left' valign='top'>Кількість</td>
                <td style='padding: 10px 0px 10px 15px; font-size: 20px; min-width: 295px' align='left' valign='top'>Вартість</td>
            </tr>
        ";
$totalPrice = 0;
foreach ($data['list'] as $order) {
    $totalPrice += $order['price'] * $order['quantity'];
    $body .=  "<tr>
                    <td style='padding: 10px 0px 10px 15px; font-size: 20px;' align='left' valign='top'>{$order['name']}</td>
                    <td style='padding: 10px 0px 10px 15px; font-size: 20px;' align='left' valign='top'>{$order['quantity']}</td>
                    <td style='padding: 10px 0px 10px 15px; font-size: 20px;' align='left' valign='top'>{$order['price']} грн.</td>
                </tr>";
                
};
    $body .=  "<tr>
                    <td style='padding: 10px 0px 10px 15px; min-width: 295px' align='left' bgcolor='yellow' valign='top'></td>
                    <td style='padding: 10px 0px 10px 15px; font-size: 20px; min-width: 295px' align='left' bgcolor='yellow' valign='top'>Загальна вартість:</td>
                    <td style='padding: 10px 0px 10px 15px; font-size: 20px; min-width: 295px' align='left' bgcolor='yellow' valign='top'>{$totalPrice} грн.</td>
                </tr>";       
$body .= "</table>";


$headers = 'From: pastrystationkyiv@gmail.com' . "\r\n";
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

if (mail( "pastrystationkyiv@gmail.com", "Заявка с сайта", $body, $headers))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}

?>