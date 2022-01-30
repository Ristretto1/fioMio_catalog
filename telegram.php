<?php

/* https://api.telegram.org/bot5258808241:AAFS3uXDMDmlc_O_GzHZ-c_4s38t-gaiO_E/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$image = $_POST['image_url'];
$format = $_POST['format'];
$count = $_POST['count'];
$phone = $_POST['user_phone'];

$token = "5258808241:AAFS3uXDMDmlc_O_GzHZ-c_4s38t-gaiO_E";
$chat_id = "-629906995";
$arr = array(
  'Номер картинки: ' => $image,
  'Формат: ' => $format,
  'Количество' => $count,
  'Телефон' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>