<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $to = 'camilla.coppi@gmail.com';
  $name = htmlspecialchars(trim($_POST["name"]), ENT_QUOTES, 'UTF-8');
  $mail = htmlspecialchars(trim($_POST["email"]), ENT_QUOTES, 'UTF-8');
  $message = htmlspecialchars(trim($_POST["message"]), ENT_QUOTES, 'UTF-8');

  $subject = "Email da www.camillacoppi.it";
  $headers = "From: {$mail}\r\n";
  $headers .= "Reply-To: {$mail}\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=ISO-8859-1\r\n";

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
        <h1>Grazie per avermi contattato, {$name}!</h1>
        <p>Ti rispondero' il prima possibile!</p>
        <p>Camilla</p>
      </div>
    </body>
  </html>
";

  //controllo sulla validità dell'indirizzo email inserito dall'utente
  if (filter_var($mail, FILTER_VALIDATE_EMAIL)) {
      if (mail($to, $subject, $emailForMe, $headers)) {
          mail($mail, "Camilla Coppi: Grazie per avermi contattata", $emailForOther, $headers);
          header("Location: https://www.camillacoppi.it/");
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