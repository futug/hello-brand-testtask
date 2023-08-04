<?php


if ($_SERVER["REQUEST_METHOD"] === "POST") {
 
    $name = isset($_POST["name"]) ? $_POST["name"] : "";
    $phone = isset($_POST["phone"]) ? $_POST["phone"] : "";
    $email = isset($_POST["email"]) ? $_POST["email"] : "";
    $date = isset($_POST["date"]) ? $_POST["date"] : "";


    if (!empty($name) && !empty($phone) && !empty($email) && !empty($date)) {
   
        echo "Данные успешно получены";
    } else {

        echo "Ошибка: Заполните все поля";
    }
} else {

    echo "Ошибка: Неверный метод запроса";
}
?>
