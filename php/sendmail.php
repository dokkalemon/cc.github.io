<?php

$to = 'dottori.roberto@gmail.com';

$name = trim(stripslashes($_POST["name"]));
$mail = trim(stripslashes($_POST["mail"]));
$message = trim(stripslashes($_POST["message"]));

$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';
$headers[] = '<style>
body {font-family: sans-serif;}
p {font-size: 16px}
</style>';



$emailForMe = "<html>
<div>
    <h1>{$name} ti ha scritto!</h1>
    <hr>
</div>

<div>
    <p>{$message}</p>
</div>

<div>
    <ul>
        <li>Nome: {$name}</li>
        <li>Email: {$mail}</li>
        <hr>
    </ul>
</div>
</html>";


$emailForOther = "
    <div>
    <h1>Grazie per avermi Contattato {$name};</h1>
    <p>Ti risponderemo il prima possibile!</p>
    <p>Dimora 50</p>
    </div>

";

mail($to, "Email da www.dimora50.it", $emailForMe, implode("\r\n", $headers));
mail($mail, "Dimora50: Grazie per averci contattato!", $emailForOther, implode("\r\n", $headers));

header("location: https://www.dimora50.it/")

?>