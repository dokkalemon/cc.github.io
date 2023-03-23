<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = 'dottori.roberto@gmail.com';
    $name = htmlspecialchars(trim($_POST["name"]), ENT_QUOTES, 'UTF-8');
    $mail = htmlspecialchars(trim($_POST["email"]), ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars(trim($_POST["message"]), ENT_QUOTES, 'UTF-8');

    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-type: 'text/html'; charset=utf-8";

    $emailForMe = "
    <html>
    <body>
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
        </ul>
        <hr>
      </div>
    </body>
  </html>
    ";

    $emailForOther = "
    <html>
      <body>
        <div>
          <h1>Grazie per averci contattato, {$name}!</h1>
          <p>Ti risponderemo il prima possibile!</p>
          <p>Dimora 50</p>
        </div>
      </body>
    </html>
  ";

    //controllo sulla validità dell'indirizzo email inserito dall'utente
     if (filter_var($mail, FILTER_VALIDATE_EMAIL)) {
        if (mail($to, "Email da www.camillacoppi.it", $emailForMe, implode("\r\n", $headers))) {
            mail($mail, "Camilla Coppi: Grazie per avermi contattata", $emailForOther, implode("\r\n", $headers));
            header("Location: https://www.dimora50.it/");
            exit();
        } else {
            echo "Errore durante l'invio della email. Si prega di riprovare più tardi.";
        }
    } else {
        echo "Indirizzo email non valido. Si prega di riprovare.";
    };

    var_dump($emailForOther);
};
?>