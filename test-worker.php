<?php
$url = 'https://secti-territorios-functions.arthurfaleta52.workers.dev/api/sharepoint';
$response = file_get_contents($url);
if ($response === false) {
    echo "Erro ao acessar o Worker";
} else {
    echo "Resposta do Worker:\n";
    echo $response;
}
?>