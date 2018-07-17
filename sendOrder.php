<?php
// Email Submit
// Note: filter_var() requires PHP >= 5.2.0
if (isset($_POST['name']) && isset($_POST['tel'])) {
    /*    && isset($_POST['format']) && isset($_POST['place']) && filter_var($_POST['date']) && filter_var($_POST['people']) && filter_var($_POST['services']) && filter_var($_POST['message'])*/

    // detect & prevent header injections
    $test = "/(content-type|bcc:|cc:|to:)/i";
    foreach ($_POST as $key => $val) {
        if (preg_match($test, $val)) {
            exit;
        }
    }

    $headers = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
    //

    $to = 'workglebov@gmail.com,exclusivebar@mail.ru,antoxa_min@tut.by';
    /* тема/subject */
    $subject = 'Exclusivebar -' . $_POST["name"] . $_POST["tel"] . ' ';

    /* сообщение */
    $message = 'Формат мероприятия- ' . $_POST["format"] . "\r\n" .
        'Место проведения- ' . $_POST["place"] . "\r\n" .
        'Дата- ' . $_POST["date"] . "\r\n" .
        'Количество людей- ' . $_POST["people"] . "\r\n" .
        'Доп. услуги- ' . $_POST["services"] . "\r\n" .
        'Сообщение- ' . $_POST["message"] . "\r\n" . $subject;

    mail($to, $subject, $message, $headers);

    //			^
    //  Replace with your email
}
?>
